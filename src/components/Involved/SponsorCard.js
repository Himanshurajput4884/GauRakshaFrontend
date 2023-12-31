import React from "react";
import "./SponsorCard.css";

const SponsorCard = ({item})=>{
    
    // const item = {
    //     url:"",
    //     name:"Chokar",
    //     about:"The outer shell of wheat is called bran. More than a lakh Kg per month",
    //     price:500,
    //     perAmount:"Bag of 20kg",
    //     buyed:0,
    // };

    return(
        <div className="sponsor-card-container">
            <div className="sponsor-card-Image">
                <img src="" alt=""/>
            </div>
            <div className="sponsor-card-content">
                <div className="sponsor-card-name">
                    {item.name}
                </div>
                <div className="sponsor-card-description"> {item.about} </div>
                <div className="sponsor-card-price-container">
                    <div className="sponsor-card-price"> {item.price}/- </div>
                    <div className="pricePerAmount"> Per {item.perAmount} </div>
                </div>
                <div className="sponsor-for-button">
                    <div className="sponsor-whole-button">
                        <div className="sponsor-for-change"> - </div>
                        <div className="sponsor-for-change"> {item.buyed}</div>
                        <div className="sponsor-for-change"> + </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SponsorCard;