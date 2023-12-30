import React, { useState } from "react";
import "./NavBar.css";
import cow_logo from "../../images/Cow_logo2.jpg";
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";

const NavBar = () => {
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);

  const forGausala = [
    {
      title: "Overview",
      path: "/overview",
    },
    {
      title: "Visit us",
      path: "/visit-us",
    },
    {
      title: "Cow Helpline",
      path: "/cow-helpine",
    },
  ];

  const forActivity = [
    {
      title: "Upcoming Activity",
      path: "#",
    },
    {
      title: "Activity-2",
      path: "#",
    },
    {
      title: "Activity-3",
      path: "#",
    },
  ];

  const forProjects = [
    {
      title: "Hospital",
      path: "#",
    },
    {
      title: "Products",
      path: "#",
    },
    {
      title: "Bio-Gas Plant",
      path: "#",
    },
  ];

  const handleMouseEnter = (dropdownNumber) => {
    if (dropdownNumber === 1) {
      setIsVisible1(true);
    } else if (dropdownNumber === 2) {
      setIsVisible2(true);
    } else if (dropdownNumber === 3) {
      setIsVisible3(true);
    }
  };

  const handleMouseLeave = (dropdownNumber) => {
    if (dropdownNumber === 1) {
      setIsVisible1(false);
    } else if (dropdownNumber === 2) {
      setIsVisible2(false);
    } else if (dropdownNumber === 3) {
      setIsVisible3(false);
    }
  };

  return (
    <div className="navbar-container">
      <div className="navbar-cont1">
        <div className="cow-logo-container">
          <a href="/"> <img src={cow_logo} alt="cow"/> </a>
        </div>
      </div>
      <div className="navbar-cont2">
        <div className="forNavlink-1">
          <NavLink to="/" className="nav-link"> <span>Home</span> </NavLink>
        </div>
        <div className="forNavlink-1">
          <NavLink to="/gallery" className="nav-link"> <span>Gallery</span> </NavLink>
        </div>
        <div
          className="forNavLink-2"
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={() => handleMouseLeave(1)}
        >
          Gausala
           <Dropdown items={forGausala} isVisible={isVisible1}/>
        </div>
        <div
          className="forNavLink-2"
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={() => handleMouseLeave(2)}
        >
          Activities
          {isVisible2 && <Dropdown items={forActivity} isVisible={isVisible2}/>}
        </div>
        <div
          className="forNavLink-2"
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={() => handleMouseLeave(3)}
        >
          Projects
          {isVisible3 && <Dropdown items={forProjects} isVisible={isVisible3}/>}
        </div>
        <div className="forNavLink-1">
          <NavLink to="/" className="nav-link"> <span>About Us</span> </NavLink>
        </div>
      </div>
      <div className="navbar-cont3"></div>
    </div>
  );
}

export default NavBar;
