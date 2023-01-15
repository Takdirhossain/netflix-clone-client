import "./nav.scss";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    window.onscroll= () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true)
        return () => (window.onscroll = null)
    }
   
  return (
    <div className={isScrolled ? "navbar scrolled " : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <Link to="/" className="link"><span>Home</span></Link>
         <Link to="/series" className="link"> <span>Series</span></Link>
          <Link to="/movie" className="link"><span>Movie</span></Link>
          <span>New And Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <SearchIcon className="icon" />
          <span>Kid</span>
          <NotificationsIcon className="icon" />
          <img
            src="https://img.freepik.com/free-photo/portrait-successful-man-having-stubble-posing-with-broad-smile-keeping-arms-folded_171337-1267.jpg?w=2000"
            alt=""
          />
          
            <div className="profile">
            <KeyboardArrowDownIcon />
            <div className="options">
                <span>Settings</span>
                <span>Logout</span>
            </div>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Nav;
