import React from "react";
import "./ContactUs.css";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

const ContactUs = () => {
  const latti = 28.557,
    longi = 77.2763;
  const position = [latti, longi];
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
          <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              crossOrigin={true}
              onError={(e) => {
                console.error("Error loading map tiles:", e);
                // Implement fallback logic here
              }}
            />

            {/* <Marker position={position}></Marker> */}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
