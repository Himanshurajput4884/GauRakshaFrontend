import React from "react";
import "./UpperNavBar.css";
import Twitter from "../../images/Twitter_icon.png";
import facebook_icon from "../../images/facebook1_icon.png";
import Youtube_icon from "../../images/Youtube1_icon.png";
import Phone_icon from "../../images/Phone1_icon.png";
import Gmail_icon from "../../images/Gmail1_icon.png";
import Clcok_icon from "../../images/Clock1_icon.png";

const UpperNavBar = () =>{

    return (
        <div className="nav-container">
            <div className="nav-cont1">
                <div className="forContacts"> <a href="#"> <img src={Phone_icon} alt=""/> +91-9999999999 </a> </div>
                <div className="forContacts"> <a href="#"> <img src={Phone_icon} alt=""/> +91-9999999999 </a> </div>
                <div className="forContacts"> <a href="#"> <img src={Gmail_icon} alt=""/> temporarygmail@gmail.com </a> </div>
                <div className="forContacts"> <a href="#"> <img src={Clcok_icon} alt=""/> Mon-Fri: 10AM - 5PM </a> </div>
            </div>
            <div className="nav-cont2">
                <div className="social-sites-circle"> <a href="#"> <img src={facebook_icon} alt=""/> </a> </div>
                <div className="social-sites-circle"> <a href="#"> <img src={Twitter} alt=""/> </a> </div>
                <div className="social-sites-circle"> <a href="#"> <img src={Youtube_icon} alt=""/> </a> </div>
            </div>
        </div>
    )
}



export default UpperNavBar;