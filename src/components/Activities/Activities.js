import React, { useState, useEffect } from "react";
import "./Activities.css";
import axios from "axios";

const Activities = () => {
    const [blogData, setBlogData] = useState([]);

    useEffect(()=>{
        const getBlogData = async()=>{
            try{
                const response = await axios.get(`http://localhost:8008/activity/show/all`);
                if(response.status === 200 && (response.data.message === "Fetch All blogs")){
                    setBlogData(response.data.blogs);
                }
            }
            catch(err){
                console.log("Error in fetching blogs: ", err);
            }
        }
        getBlogData();
      },[]);

      console.log(blogData);

  return (
    <div className="activity-container">
      <div className="activity-image1">
        <div className="activity-image-title"> Activities & Blogs </div>
      </div>
      <div className="activity-text-content">
        <div className="activity-description">
          Explore the serene beauty and divine presence of our Gaushala through
          our carefully curated gallery. Witness the harmonious coexistence of
          our beloved cows in the tranquil surroundings, capturing moments of
          love, care, and the sacred bond between humans and the gentle beings.
          Each image tells a story of compassion, fostering a connection with
          the divine in the heart of our Gaushala.
        </div>
      </div>
      <div className="activity-blogs">
        <div className="activity-blogs-inner-box">
            {
                blogData.map((blog, index)=>(
                    <div key={index} className="blog-outer-box"> 
                        <div className="blog-inner-box">
                            <div className="blog-image">
                                <img src={blog.imageUrl}/>
                            </div>
                            <div className="blog-content-short">{blog.title}</div>
                            <div className="blog-content-short">{blog.subtitle}</div>
                            <div className="blog-content-desc">{blog.desc}</div>
                        </div>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  );
};

export default Activities;
