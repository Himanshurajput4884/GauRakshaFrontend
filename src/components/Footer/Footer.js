import React from "react";
import "./Footer.css";
import logo from "../../images/Cow_logo2.jpg";
import Twitter from "../../images/Twitter_icon.png";
import facebook_icon from "../../images/facebook1_icon.png";
import Youtube_icon from "../../images/Youtube1_icon.png";
import locationIcon from "../../images/Location_icons.png";
import PhoneIcon from "../../images/Phone1_icon.png";
import GmailIcon from "../../images/Gmail1_icon.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer1">
        <div className="footer-cont1">
          <div className="footer-logo">
            <img src={logo} alt="" />
          </div>
          <div className="footer-des">
            A Cow Care Center is a dedicated facility providing holistic care
            for cows. Offering veterinary services, nutritional support, and a
            comfortable environment, it ensures the well-being of cows.
          </div>
          <div className="footer-social">
                <div className="social-sites-circle"> <a href="#"> <img src={facebook_icon} alt=""/> </a> </div>
                <div className="social-sites-circle"> <a href="#"> <img src={Twitter} alt=""/> </a> </div>
                <div className="social-sites-circle"> <a href="#"> <img src={Youtube_icon} alt=""/> </a> </div>
          </div>
        </div>
        <div className="footer-cont2">
            <div className="quick-links"> Quick-Links </div>
            <div className="actual-links">
                <span> <a href="#">Link1</a> </span>
                <span> <a href="#">Link2</a> </span>
                <span> <a href="#">Link3</a> </span>
                <span> <a href="#">Link4</a> </span>
                <span> <a href="#">Link5</a> </span>
            </div>
        </div>
        <div className="footer-cont3">
            <div className="address">
                Our Address
            </div>
            <div className="actual-contact">
                <div className="actual-address">
                    <div className="forLogo">
                    <img src={locationIcon}/>  
                    </div>
                    <div className="forAddress">
                        <span> 345, Pocket-IV </span>
                        <span> New Residence, Lajpat Nagar</span>
                        <span> New Delhi, 110025 </span>
                    </div>
                </div>
                <div className="forPhone"> <img src={PhoneIcon}/> +91-9090909090 </div>
                <div className="forGmail"> <img src={GmailIcon}/> samplegamil@gmail.com </div>
            </div>
        </div>
      </div>
      <div className="footer2">
        All Right Reserver for Gaurakha 2024
      </div>
    </div>
  );
};

export default Footer;
