import React, {useEffect, useState} from "react";
import "./header.css";
import logo from "../../assets/images/newLogo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
	const [show, handleShow] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
		  if (window.scrollY > 100) {
			handleShow(true);
		  } else {
			handleShow(false);
		  }
		};
	  
		window.addEventListener("scroll", handleScroll);
	  
		return () => {
		  window.removeEventListener("scroll", handleScroll);
		};
	  }, []);
	return (
		<div className={`header_outer_container ${show && "nav__black"}`}>
			<div className="header_container">
				<div className="header_left">
					<ul>
						<li>
							<img
								className="nav_log"
								src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Netflix-Logo.png"
							/>
						</li>
						<li>Home</li>
						<li>TVShows</li>
						<li>Movies</li>
						<li>MyList</li>
						<li>Browse by Languages</li>
					</ul>
				</div>
				<div className="header_right">
					<ul>
						<li>
							<SearchIcon />
						</li>
						<li>
							<NotificationsNoneIcon />
						</li>
						<li>
							<AccountBoxIcon />
						</li>
						<li>
							<ArrowDropDownIcon />
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Header;
