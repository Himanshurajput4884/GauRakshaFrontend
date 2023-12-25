import React, { useState } from "react";
import "./SideNavBar.css";

const SideNavBar = ( {isExpanded, toggleSideNavBar} ) => {
  // const [isExpanded, setExpendState] = useState(false);
  const menuItems = [
    {
      text: "Latest News & Updates",
      icon: "",
    },
    {
      text: "FAQ's",
      icon: "",
    },
    {
      text: "About Us",
      icon: "",
    },
    {
      text: "Out Activities",
      icon: "",
    },
    {
      text: "Benefits of Cow",
      icon: "",
    },
    {
      text: "Gallery",
      icon: "",
    },
    {
      text: "Donation",
      icon: "",
    },
    {
      text: "Shraad",
      icon: "",
    },
    {
      text: "Event",
      icon: "",
    },
    {
      text: "Godaan",
      icon: "",
    },
    {
      text: "Adopt a Cow",
      icon: "",
    },
    {
      text: "Downloads",
      icon: "",
    },
    {
      text: "Newsletter",
      icon: "",
    },
    {
      text: "Blog",
      icon: "",
    },
    {
      text: "Contact Us",
      icon: "",
    },
  ];
  return (
    <div>
      <div
        className={
          // isExpanded
          //   ? 
          `side-nav-container ${ isExpanded ? 'expanded' : ''}`
            // : 
            // "side-nav-container side-nav-container-NX"
        }
      >
        <div className="nav-upper">
          <div className="nav-heading">
            {/* {isExpanded && */}
             
              <div className="nav-brand">
                {/* <img src="icons/Logo.svg" alt="" srcset="" /> */}
                <h4 style={{margin:"5px 5px", padding:"0px 15px"}}>Gau-Raksha</h4>
              </div>
            
            {/* } */}
            <button
              className={
                // isExpanded
                  // ? 
                  "hamburger hamburger-in"
                  // : 
                  // "hamburger hamburger-out"
              }
              // onClick={() => setExpendState(!isExpanded)}
              onClick={toggleSideNavBar}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <div className="nav-menu">
            {menuItems.map(({ text, icon }, index) => (
              <a
                className={
                  // isExpanded ? 
                  "menu-item"
                  //  : 
                  // "menu-item menu-item-NX"
                }
                href="#"
                style={{margin:"0", padding:"0px 10px", alignContent:"center", borderBottomStyle:"1px solid black"}}
              >
                {/* <img className="menu-item-icon" src={icon} alt="" srcset="" /> */}
                {/* {isExpanded &&  */}
                <p className="menu-item-para">{text}</p>
                {/* } */}
              </a>
            ))}
          </div>
        </div>
        {/* <div className="nav-footer">
          {isExpanded && (
            <div className="nav-details">
              <img
                className="nav-footer-avatar"
                src="icons/admin-avatar.svg"
                alt=""
                srcset=""
              />
              <div className="nav-footer-info">
                <p className="nav-footer-user-name">M Showkat</p>
                <p className="nav-footer-user-position">store admin</p>
              </div>
            </div>
          )}
          <img
            className="logout-icon"
            src="icons/logout.svg"
            alt=""
            srcset=""
          />
        </div> */}
      </div>
    </div>
  );
};

export default SideNavBar;
