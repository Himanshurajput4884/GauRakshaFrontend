import React from "react";
import "./Adopt.css";
import AdoptCard from "./AdoptCard.js";
import image from "../../images/activityImage1.jpg";

const Adopt = () => {
    const items = [
        {
            url:image,
            name:"Gauri",
            about:"Gauri, a gentle and cherished member of our herd, embodies grace and tranquility. Her warm, expressive eyes reflect a serene demeanor, symbolizing the compassion and strength inherent in every cow. Gauri's presence is a testament to the nurturing bond we share with these majestic beings at our care center.",
        },
        {
            url:image,
            name:"Gauri",
            about:"Gauri, a gentle and cherished member of our herd, embodies grace and tranquility. Her warm, expressive eyes reflect a serene demeanor, symbolizing the compassion and strength inherent in every cow. Gauri's presence is a testament to the nurturing bond we share with these majestic beings at our care center.",
        },
        {
            url:image,
            name:"Gauri",
            about:"Gauri, a gentle and cherished member of our herd, embodies grace and tranquility. Her warm, expressive eyes reflect a serene demeanor, symbolizing the compassion and strength inherent in every cow. Gauri's presence is a testament to the nurturing bond we share with these majestic beings at our care center.",
        },
        {
            url:image,
            name:"Gauri",
            about:"Gauri, a gentle and cherished member of our herd, embodies grace and tranquility. Her warm, expressive eyes reflect a serene demeanor, symbolizing the compassion and strength inherent in every cow. Gauri's presence is a testament to the nurturing bond we share with these majestic beings at our care center.",
        },
        {
            url:image,
            name:"Gauri",
            about:"Gauri, a gentle and cherished member of our herd, embodies grace and tranquility. Her warm, expressive eyes reflect a serene demeanor, symbolizing the compassion and strength inherent in every cow. Gauri's presence is a testament to the nurturing bond we share with these majestic beings at our care center.",
        },
        {
            url:image,
            name:"Gauri",
            about:"Gauri, a gentle and cherished member of our herd, embodies grace and tranquility. Her warm, expressive eyes reflect a serene demeanor, symbolizing the compassion and strength inherent in every cow. Gauri's presence is a testament to the nurturing bond we share with these majestic beings at our care center.",
        },
        {
            url:image,
            name:"Gauri",
            about:"Gauri, a gentle and cherished member of our herd, embodies grace and tranquility. Her warm, expressive eyes reflect a serene demeanor, symbolizing the compassion and strength inherent in every cow. Gauri's presence is a testament to the nurturing bond we share with these majestic beings at our care center.",
        },
    ]

  return (
    <div>
      <div className="adopt-section1">
        <div className="adopt-heading"> Adopt A Cow </div>
      </div>
      <div className="adopt-section2">
        <div className="adopt-desc">
          Our Gaumatas are looking for a home. Each would be a wonderful
          addition to a responsible, loving family.
        </div>
      </div>
      <div className="adopt-section3">
        <div className="adopt-section3-content">
          {
                items.map((value, index)=>(
                    <div key={index} className="adopt-for-cards"> 
                        <AdoptCard item={value}/>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  );
};

export default Adopt;
