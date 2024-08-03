import React from 'react'
import "./Navbar.css"
import logo from "../../assets/qf.png";

function Navbar() {
  function menuAnimation() {

    var menu = document.querySelector("nav h2")
    var full = document.querySelector("#full-scr")
    var navimg = document.querySelector("nav img")
    var flag = 0
    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        } else {
            full.style.top = "-100%"
            navimg.style.opacity = 1
            flag = 0
        }
    })
}
  return (
    <nav>
        <img src={logo} alt="" />
        <div className="menu">
            <h3><a href="#services">Services</a></h3>
            <h3><a href="https://quirkyfolks.blogspot.com/">Our Blogs</a></h3>
            <h3><a href="#about-us">About Us</a></h3>
            <h4><a href="#contact-us">Contact Us</a></h4>
        </div>
        <h2 onClick={menuAnimation}>Menu</h2>
        <div id="full-scr">

        </div>
    </nav>
  )
}

export default Navbar