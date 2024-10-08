import React from "react";
import Navbar from "../navbar/Navbar";
import Tagline from "./Tagline";
import "./Page1.css";
import Button from "./Button";
import collage from "../../../public/collage.png"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { delay } from "framer-motion";

function Page1() {
  useGSAP(()=>{
    gsap.from(".right",{
      x:700,
      duration:1,
      delay:0.5,
      // ease: "power1.in"
    })
    // gsap.from(".left",{
    //   y:700,
    //   duration:1,
    //   delay:0.1,
    //   ease: "power1.out"
    // })

  })

  return (
    <div className="page1">
      <div className="moving-text">
        <Tagline />
        <Tagline />
        <Tagline />
      </div>
      <Navbar /> 
      <div className="hero">
        <div className="left">
          <h1 >Get the most Personalised Marketing experience ever</h1>
          <p>
            Leading the Way in Influencer Marketing, Talent Management, and
            Social Media Solutions across India. Connecting Brands with
            Influencers  — We'll Definitely Quirkify Your Brand!
          </p>
          <div className="btns">
            <Button  text="I'm a Brand" />
            <Button text="I'm an Influencer" />
          </div>
        </div>

        <div className="right">
          <img src={collage} alt="" />
        </div>

      </div>
    </div>
  );
}

export default Page1;
