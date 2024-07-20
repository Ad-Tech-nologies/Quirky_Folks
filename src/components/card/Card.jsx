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
          <p>Give us a call or drop a mail, we endeavour to answer all enquiries within 24 hrs on business days.</p>
          <p>We will be happy to answer your questions!</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
