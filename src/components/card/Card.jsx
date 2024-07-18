import React from "react";
import "./Card.css"

function Card() {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <h1>READY TO START A PROJECT?</h1>
        </div>
        <div className="card-back">
          <p>I'm a Brand</p>
          <p>I'm an Influencer</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
