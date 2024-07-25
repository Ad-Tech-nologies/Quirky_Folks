import React from "react";
import "./Card.css"
import influencer from "/influencer.png"
import brand from "/brand-image.png"


function Card() {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <h1>READY TO START A PROJECT?</h1>
        </div>
        <div className="card-back">
          <p>Give us a call or drop a mail, we endeavour to answer all enquiries within 24 hrs on business days.</p>
          <p>We will be happy to answer your questions!</p>
          <div className="options">
          <button> <img src={influencer} alt="" />
            I'M AN INFLUENCER</button>
          <button><img src={brand} alt="" />
            I'M A BRAND</button>
          </div>
          
        </div>
      </div>
    </div>
  ); 
}

export default Card;
