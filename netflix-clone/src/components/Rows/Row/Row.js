import React, { useEffect, useState } from "react";
import axios from "../../../utils/axios";
import "./row.css";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow }) => {
	const [movies, setMovies] = useState([]);
	const [trailerUrl, setTrailerUrl] = useState("");
	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(fetchUrl);
			setMovies(request.data.results);
			return request;
		}
		fetchData();
	}, [fetchUrl]);

	const opts = {
		height: "390",
		width: "100%",
		playerVars: {
			autoplay: 1,
		},
	};
	// .catch((error) => console.log(error));

	const handleClick = (movie) => {
		if (trailerUrl) {
			setTrailerUrl("");
		} else {
			//movieTrailer returns url
			movieTrailer(movie?.title || "")
            .then(
				(url) => {
					// console.log("URL:", url)
					const urlParams = new URLSearchParams(new URL(url).search)
					setTrailerUrl(urlParams.get("v"));
				}
			)
            .catch((error) => console.log(error))
		}
	};
	return (
		<div className="row">
			<h2>{title}</h2>
			<div className="row_posters">
				{movies?.map((movie) => (
					// console.log(movie)
					<img
						key={movie.id}
						onClick={() => handleClick(movie)}
						className={`row_poster ${isLargeRow && "row_posterLarge"}`}
						src={`${base_url}${
							isLargeRow ? movie.poster_path : movie.backdrop_path
						}`}
						alt={movie.name}
					/>
				))}
			</div>
			<div style={{ padding: "40px" }}>
				{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
               
			</div>
		</div>
	);
};

export default Row;
