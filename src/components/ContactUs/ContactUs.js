import React from "react";
import "./ContactUs.css";
import { useJsApiLoader, GoogleMap } from "@react-google-maps/api";


const ContactUs = () => {

  const lat = 28.5570,
    lng = 77.2763;
  const position = {
    lat:lat,
    lng:lng,
  };
  return (
    <div className="contact-container">
      <div className="contact-image-container">
        <div className="contact-image-title">Contact Us</div>
      </div>
      <div className="contact-section2">
        <div className="contact-subcontainer">
          <div className="contact-inner-cont1"> Address </div>
          <div className="contact-inner-cont2">
            <div className="contact-address">345, Pocket-IV</div>
            <div className="contact-address">New Residence, Lajpat Nagar</div>
            <div className="contact-address">New Delhi, 110025</div>
          </div>
        </div>
        <div className="contact-subcontainer">
          <div className="contact-inner-cont1"> Phone </div>
          <div className="contact-inner-cont2">
            <div className="contact-address"> +91-9090909090 </div>
          </div>
        </div>
        <div className="contact-subcontainer">
          <div className="contact-inner-cont1"> E-mail </div>
          <div className="contact-inner-cont2">
            <div className="contact-address"> samplemail@gmail.com </div>
          </div>
        </div>
      </div>
      <div className="contact-section3">
        <div className="contact-map">
          <div style={{ height: "280px", width: "100%" }}>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
