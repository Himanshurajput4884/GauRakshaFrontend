import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import cowLogo from "../images/cow_logo.jpg";


const NavBar= ({ isExpanded, toggleSideNavBar }) => {
  // const [click, setClick] = useState(false);

  // const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact={true} to="/" className="nav-logo">
            <img src={cowLogo} alt="cowLogo"/>
            <span> Gau-Raksha </span>
            {/* <i className="fas fa-code"></i> */}
          </NavLink>

          <ul className= "nav_menu">
            {/* <li className="nav-item">
              <NavLink
                exact
                to="/"
                className="nav-links"
              >
                Home
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink
                exact={true}
                to="/about"
                className="nav-links"
              >
                About
              </NavLink>
            </li>
          </ul>
          <button onClick={toggleSideNavBar} className="side-navbar-btn">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </>
  );
}

export default NavBar;