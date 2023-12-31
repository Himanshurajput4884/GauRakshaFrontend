import React from "react";
import "./Home.css";
import CowImage1 from "../../images/CowImage1.jpg";
import donationIcon from "../../images/Donation_icon.png";
import adoptIcon from "../../images/Adopt_icon.png";
import sponsorIcon from "../../images/Sponsor_icon.png";


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
      <div className="home-section-3">
        <div className="home-section-outercard">
          <div className="home-section-innercard">
            <div className="card-icon">
              <div className="inner-card-icon">
                <img src={donationIcon} alt=""/>
              </div>
            </div>
            <div className="card-heading"> Make Donation </div>
            <div className="card-subheading"> Help us by making a donation </div>
            <div className="card-desc">Donate generously so we can take care of our animal friends through our various initiatives and rescues.</div>
            <div className="card-button"><button> Donate now </button></div>
          </div>
        </div>
        <div className="home-section-outercard">
          <div className="home-section-innercard">
            <div className="card-icon">
              <div className="inner-card-icon">
                <img src={sponsorIcon} alt=""/>
              </div>
            </div>
            <div className="card-heading"> Sponsor </div>
            <div className="card-subheading"> Sponsor a cow at our shelter </div>
            <div className="card-desc">The sponsorship will go towards the care of the animal and regular updates for the same will be provided to you.</div>
            <div className="card-button"><button> Sponsor now </button></div>
          </div>
        </div>
        <div className="home-section-outercard">
          <div className="home-section-innercard">
            <div className="card-icon">
              <div className="inner-card-icon">
                <img src={adoptIcon} alt=""/>
              </div>
            </div>
            <div className="card-heading"> Adopt </div>
            <div className="card-subheading"> Take home a new family member </div>
            <div className="card-desc">Nothing brings more joy and satisfaction than to provide a forever home to one of our little wards.</div>
            <div className="card-button"><button> Adopt now </button></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
