import React, { useEffect, useState } from "react";
import "./Gallery.css";
import axios from "axios";

const URL = `https://gaushala-backend.onrender.com`;

const Gallery = () => {
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    const getImageData = async () => {
      try {
        const response = await axios.get(
          `${URL}/gallery/show/all`
        );
        if (
          response.status === 200 &&
          response.data.message === "Fetch All Image"
        ) {
          setImageData(response.data.galleryImages);
        }
      } catch (err) {
        console.log("Error in fetching image: ", err);
      }
    };
    getImageData();
  }, []);


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
        {imageData.map((image, index) => (
          <div className="gallery-image-border">
            <img src={image.imageUrl} alt={"pic" + index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
