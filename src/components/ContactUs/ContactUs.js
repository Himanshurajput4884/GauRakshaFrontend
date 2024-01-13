import React from "react";
import "./ContactUs.css";
import { useJsApiLoader, GoogleMap } from "@react-google-maps/api";

const ContactUs = () => {
  const lat = 28.557,
    lng = 77.2763;
  const position = {
    lat: lat,
    lng: lng,
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
          <div className="map-heading"> Find us on Google Map </div>
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12064.898718352835!2d77.26294054228065!3d28.555378688961273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3f279740be3%3A0x3a2e6577270486!2sSukhdev%20Vihar%2C%20Okhla%2C%20New%20Delhi%2C%20Delhi!5e1!3m2!1sen!2sin!4v1704705394607!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{border:"4px solid gray", borderRadius:"10px"}}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
