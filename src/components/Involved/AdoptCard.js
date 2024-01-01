import React from "react";
import "./AdoptCard.css";

const AdoptCard = ({item})=>{
    

    return(
        <div className="adopt-card-container">
            <div className="adopt-card-Image">
                <img src="" alt=""/>
            </div>
            <div className="adopt-card-content">
                <div className="adopt-card-name">
                    {item.name}
                </div>
                <div className="adopt-card-description"> {item.about} </div>
            </div>
        </div>
    )
}

export default AdoptCard;