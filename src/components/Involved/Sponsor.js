import React from "react";
import "./Sponsor.css";
import SponsorCard from "./SponsorCard";

const Sponsor = () => {
  const items = [
    {
      url: "",
      name: "Chokar",
      about:
        "The outer shell of wheat is called bran. More than a lakh Kg per month",
      price: 500,
      perAmount: "Bag of 20kg",
      buyed: 0,
    },
    {
      url: "",
      name: "Chokar",
      about:
        "The outer shell of wheat is called bran. More than a lakh Kg per month",
      price: 500,
      perAmount: "Bag of 20kg",
      buyed: 0,
    },
    {
      url: "",
      name: "Chokar",
      about:
        "The outer shell of wheat is called bran. More than a lakh Kg per month",
      price: 500,
      perAmount: "Bag of 20kg",
      buyed: 0,
    },
    {
      url: "",
      name: "Chokar",
      about:
        "The outer shell of wheat is called bran. More than a lakh Kg per month",
      price: 500,
      perAmount: "Bag of 20kg",
      buyed: 0,
    },
    {
      url: "",
      name: "Chokar",
      about:
        "The outer shell of wheat is called bran. More than a lakh Kg per month",
      price: 500,
      perAmount: "Bag of 20kg",
      buyed: 0,
    },
    {
      url: "",
      name: "Chokar",
      about:
        "The outer shell of wheat is called bran. More than a lakh Kg per month",
      price: 500,
      perAmount: "Bag of 20kg",
      buyed: 0,
    },
    {
      url: "",
      name: "Chokar",
      about:
        "The outer shell of wheat is called bran. More than a lakh Kg per month",
      price: 500,
      perAmount: "Bag of 20kg",
      buyed: 0,
    },
  ];
  return (
    <div>
      <div className="sponsor-section1">
        <div className="sponsor-heading"> Sponsor A Cow </div>
      </div>
      <div className="sponsor-section2">
        <div className="sponsor-desc">
          Some Gaumatas are destined to spend their lives at our centers as they
          cannot be released or adopted. You can help us take care of these
          lovely Gaumatas by contributing towards their upkeep.
        </div>
      </div>
      <div className="sponsor-section3">
        <div className="section3-content">
            {
                items.map((value, index)=>(
                    <div key={index} className="forCards"> 
                        <SponsorCard item={value}/>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
