import React from 'react'
import "./Navbar.css"
import logo from "../../assets/qf.png";

function Navbar() {
  return (
    <nav>
        <img src={logo} alt="" />
        <div className="menu">
            <h3><a href="#">Services</a></h3>
            <h3><a href="#">Our Blogs</a></h3>
            <h3><a href="#">About Us</a></h3>
            <h4><a href="#contact-us">Contact Us</a></h4>
        </div>
    </nav>
  )
}

export default Navbar