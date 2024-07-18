import React from "react";
import "./Page3.css";
import Card from "../card/Card";

function Page3() {
  return (
    <div className="page3">
              <Card />

      <div className="about">
        
        <h1>ABOUT US</h1>
        <p>
          We are a group of Quirky Folks who came together to form a marketing
          agency. We have created campaigns for some of the major brands and
          have relationships with influencers from all around India.
        </p>

        <p>
          We cater to our clients by providing them with personalised campaign
          strategies so that they can get the best results.{" "}
        </p>

        <p>Sit back, relax and let Quirky handle it!</p>
      </div>
    </div>
  );
}

export default Page3;
