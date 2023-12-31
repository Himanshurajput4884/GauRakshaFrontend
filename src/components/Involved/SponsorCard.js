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
        <div className="card-container">
            <div className="forImage">
                <img src="" alt=""/>
            </div>
            <div className="card-content">
                <div className="card-name">
                    {item.name}
                </div>
                <div className="card-desc"> {item.about} </div>
                <div className="card-price-container">
                    <div className="card-price"> {item.price}/- </div>
                    <div className="pricePerAmount"> Per {item.perAmount} </div>
                </div>
                <div className="forButton">
                    <div className="wholeButton">
                        <div className="forChange"> - </div>
                        <div className="forChange"> {item.buyed}</div>
                        <div className="forChange"> + </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SponsorCard;