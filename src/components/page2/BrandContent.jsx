import React from 'react'
import jvnsthi from "../../assets/jeevansathi.png"
import ajio from "../../assets/ajio.png"
import flipkart from "../../assets/flipkart.png"
import lenskart from "../../assets/lenskart.png"
import may from "../../assets/maybelline.png"
import milagro from "../../assets/milagro.png"
import titan from "../../assets/titan.png"

function BrandContent(props) {
  return (
    <div className='content'>
        <img src= {props.img1} alt="" />
        <img src={props.img2} alt="" />
        <img src={props.img3} alt="" />
        <img src={props.img4} alt="" />
        <img src={props.img5} alt="" />
        <img className='img6' src={props.img6} alt="" />

    </div>
    
  )
}

export default BrandContent