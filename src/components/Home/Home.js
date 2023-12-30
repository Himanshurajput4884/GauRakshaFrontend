import React from "react";
import "./Home.css";
import CowImage1 from "../../images/CowImage1.jpg";

const Home = () => {
  return (
    <div className="Home-Container">
      <div className="imageContainer">
        <img src={CowImage1} alt="cow" />
      </div>
      <div className="home-section-2">
        <div className="section2-desc">
          <div className="actual-desc"> 
            Our mission is to save and enhance
          the lives of cows, ensuring their well-being and promoting a
          sustainable and ethical approach to cattle management.
          We provide a nurturing environment, veterinary
          services, and nutritional support. 
          </div>
        </div>
        <div className="section2-smallDesc">
            <div className="smallTalk-Desc">Take Action! Help us achieve this noble mission.</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
