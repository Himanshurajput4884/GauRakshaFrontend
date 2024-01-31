import React from "react";
import "./Home.css";
import CowImage1 from "../../images/CowImage1.jpg";
import donationIcon from "../../images/Donation_icon.png";
import adoptIcon from "../../images/Adopt_icon.png";
import sponsorIcon from "../../images/Sponsor_icon.png";
import { NavLink } from "react-router-dom";


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
            <div className="card-desc">Donate generously so that we can take care of our gau matas through various initiatives and rescues.</div>
            <div className="card-button"><NavLink to="/involve/donate" ><button> Donate now </button></NavLink></div>
          </div>
        </div>
        {/* <div className="home-section-outercard">
          <div className="home-section-innercard">
            <div className="card-icon">
              <div className="inner-card-icon">
                <img src={sponsorIcon} alt=""/>
              </div>
            </div>
            <div className="card-heading"> Sponsor </div>
            <div className="card-subheading"> Sponsor a cow at our shelter </div>
            <div className="card-desc">The sponsorship will go towards the care of the animal and regular updates for the same will be provided to you.</div>
            <div className="card-button"><NavLink to="/involve/sponsor" exact><button> Sponsor now </button></NavLink></div>
          </div>
        </div> */}
        <div className="home-section-outercard">
          <div className="home-section-innercard">
            <div className="card-icon">
              <div className="inner-card-icon">
                <img src={adoptIcon} alt=""/>
              </div>
            </div>
            <div className="card-heading"> Adopt </div>
            <div className="card-subheading"> Take gaumata to your home </div>
            <div className="card-desc">Adopt a cow, be a part of gau seva, and get a chance to earn punyas.</div>
            <div className="card-button"><NavLink to="/involve/adopt"><button> Adopt now </button></NavLink></div>
          </div>
        </div>
      </div>
      <div className="home-section-4">
          <div className="section4-head1">
            No living creature on this planet calls it's mother
          </div>
          <div className="section4-head2">
            "MAA"
          </div>
          <div className="section4-head1">
            except a calf (a baby cow) and a human being
          </div>
      </div>
      <div className="home-section-5">
        <div className="section5-container">
          <div className="section5-inner-box">
            <div className="inner-upper-box">300+</div>
            <div className="inner-lower-box">Gaumatas</div>
          </div>
          <div className="section5-inner-box">
          <div className="inner-upper-box">5+</div>
            <div className="inner-lower-box">Activites</div>
          </div>
          <div className="section5-inner-box">
          <div className="inner-upper-box">70+</div>
            <div className="inner-lower-box">Gopalak</div>
          </div>
          <div className="section5-inner-box">
          <div className="inner-upper-box">8 Acre</div>
            <div className="inner-lower-box">Area of Gaushala</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
