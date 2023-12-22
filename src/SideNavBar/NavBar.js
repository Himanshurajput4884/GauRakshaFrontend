import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar= () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <span> Gau-Raksha </span>
            {/* <i className="fas fa-code"></i> */}
            <span className="icon">
              
            </span>
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
                exact
                to="/about"
                className="nav-links"
              >
                About
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink
                exact
                to="/blog"
                className="nav-links"
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                className="nav-links"
              >
                Contact Us
              </NavLink>
            </li> */}
          </ul>
          
        </div>
      </nav>
    </>
  );
}

export default NavBar;