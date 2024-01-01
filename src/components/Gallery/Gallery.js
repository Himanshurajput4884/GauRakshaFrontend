import React from "react";
import "./Gallery.css";
import AdoptCow from "../../images/AdoptCowImage1.jpg";

const Gallery = () => {

    const items= [
        {url:AdoptCow},
        {url:AdoptCow},
        {url:AdoptCow},
        {url:AdoptCow},
        {url:AdoptCow},
        {url:AdoptCow},
        {url:AdoptCow},
        {url:AdoptCow},
        {url:AdoptCow},
        {url:AdoptCow},
        {url:AdoptCow},
        {url:AdoptCow},
        {url:AdoptCow},
        {url:AdoptCow},
        {url:AdoptCow},
    ]

  return (
    <div className="gallery-container">
      <div className="gallery-image1">
        <div className="gallery-image-title"> Gallery </div>
      </div>
      <div className="gallery-text-content">
        <div className="gallery-description">
          Explore the serene beauty and divine presence of our Gaushala through
          our carefully curated gallery. Witness the harmonious coexistence of
          our beloved cows in the tranquil surroundings, capturing moments of
          love, care, and the sacred bond between humans and the gentle beings.
          Each image tells a story of compassion, fostering a connection with
          the divine in the heart of our Gaushala.
        </div>
      </div>
      <div className="gallery-images">
        {
            items.map((value, index)=>(
                <div className="gallery-image-border">
                    <img src={value.url} alt={"pic"+index}/>
                </div>
            ))
        }
      </div>
    </div>
  );
};

export default Gallery;
