import React from 'react'
import "./Page3.css"

function Blogs(props) {
    function handleClick(){
        window.open(props.link, "_blank");
      }
  return (
    
    <div className='blog-content'>
            <img src={props.img} alt="" />
            <h3>{props.heading}</h3>
            <p>{props.para}</p>
            <button onClick={handleClick} className="blog-btn">Read More</button>
    </div>
  )
}

export default Blogs