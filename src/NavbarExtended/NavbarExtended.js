import React from "react";
import "./NavbarExtended.css";
import cowLogo from "../images/cow_logo.jpg";

const NavbarExtended = () =>{
    return (
        <div className="outer-extended">
            <div className="inner-extended">
                <div className="inner-container1">
                    <div className="logo-container">
                        <a href="/"><img src={cowLogo} alt="cow_logo"/></a>
                    </div>
                </div>
                <div className="inner-container2">
                    <div className="inner-container2-1">
                        <div className="inner-heading1">
                            <span> ||गावो विश्वस्य मातर:|| </span>
                        </div>
                        <div className="inner-heading2">
                            <h1> Shree Krishnayan </h1>
                        </div>
                        <div className="inner-heading3">
                            <span>
                                Desi Gau-Raksha Avam Samiti
                            </span>
                        </div>
                    </div>
                </div>
                <div className="inner-container3">

                </div>
            </div>
        </div>
    )
}

export default NavbarExtended;