import React from "react";
import "./AboutUs.css";
import CowImage1 from "../../images/AboutUsCowImage1.jpg";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-image">
        <div className="about-us-heading">About Us</div>
      </div>
      <div className="about-us-section2">
        <div className="about-us-cont">
          <div className="about-us-cont1-image">
            <img src={CowImage1} alt="cowImage" />
          </div>
          <div className="about-us-cont1-outer">
            <div className="about-us-cont1-inner">
              Ashraya Gaushala, nestled in the serene outskirts of [Location],
              stands as a compassionate haven for our beloved bovine companions.
              Established with a noble vision, this gaushala is dedicated to
              providing care, shelter, and respect to cows, revered as sacred
              beings in Hindu culture. At Ashraya Gaushala, we prioritize the
              well-being of our resident cows, offering them a safe and
              comfortable environment. Our team of dedicated caretakers ensures
              that the cows receive proper nutrition, medical attention, and
              love. The gaushala serves not only as a sanctuary for these gentle
              creatures but also as an educational hub, promoting awareness
              about the significance of cow protection and sustainable practices
              in agriculture.
            </div>
          </div>
        </div>
      </div>
      <div className="about-us-section2">
        <div className="about-us-cont">
          <div className="about-us-cont1-outer">
            <div className="about-us-cont1-inner">
              Visitors to Ashraya Gaushala witness the harmonious coexistence
              between humans and cows, experiencing the tranquility that
              emanates from our commitment to compassion and care. Our goal is
              not just to provide shelter but to foster a sense of community
              that values and cherishes the divine presence of these sacred
              animals. Ashraya Gaushala invites you to be a part of our mission,
              where every contribution helps create a nurturing space for cows
              to live a life of dignity and grace. Join us in promoting a
              culture of compassion and reverence for these gentle souls at
              Ashraya Gaushala.
            </div>
          </div>
          <div className="about-us-cont1-image">
            <img src={CowImage1} alt="cowImage" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
