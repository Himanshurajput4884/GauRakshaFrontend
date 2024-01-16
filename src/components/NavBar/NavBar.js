import React, { useState } from "react";
import "./NavBar.css";
import cow_logo from "../../images/Cow_logo2.jpg";
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";
import downArrow from "../../images/DownArrow_icon.png";


const NavBar = ({toggleSideNavBar}) => {
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);

  const forGausala = [
    {
      title: "Acitivities",
      path: "/overview/activity",
    },
    {
      title: "Visit us",
      path: "/overview/contact-us",
    },
    {
      title: "About us",
      path: "/overview/about-us",
    },
    {
      title: "Cow Helpline",
      path: "/cow-helpine",
    },
  ];

  const forActivity = [
    {
      title: "Donate",
      path: "/involve/donate",
    },
    // {
    //   title: "Sponsor",
    //   path: "/involve/sponsor",
    // },
    {
      title: "Adopt",
      path: "/involve/adopt",
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
          <NavLink to="/" className="nav-link" > <span>Home</span> </NavLink>
        </div>
        <div className="forNavlink-1">
          <NavLink to="/show/gallery" className="nav-link" > <span>Gallery</span> </NavLink>
        </div>
        <div
          className="forNavLink-2"
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={() => handleMouseLeave(1)}
        >
          Gausala <img src={downArrow} alt="arrow"/>
           <Dropdown items={forGausala} isVisible={isVisible1}/>
        </div>
        <div
          className="forNavLink-2"
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={() => handleMouseLeave(2)}
        >
          Get Involved <img src={downArrow} alt="arrow"/>
          {isVisible2 && <Dropdown items={forActivity} isVisible={isVisible2}/>}
        </div>
        <div
          className="forNavLink-2"
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={() => handleMouseLeave(3)}
        >
          Projects <img src={downArrow} alt="arrow"/>
          {isVisible3 && <Dropdown items={forProjects} isVisible={isVisible3}/>}
        </div>
        <div className="forNavLink-1">
          <NavLink to="/overview/contact-us" className="nav-link"> <span> Contact Us </span> </NavLink>
        </div>
      </div>
      <div className="navbar-cont3">
      <NavLink to="/involve/donate" className="nav-link" >
      <button className="donate-button">
            Donate
        </button> 
       </NavLink>
      </div>
      <div className="navbar-cont4">
      <button onClick={toggleSideNavBar} className="side-navbar-btn">
            <span></span>
            <span></span>
            <span></span>
          </button>
      </div>
    </div>
  );
}

export default NavBar;
