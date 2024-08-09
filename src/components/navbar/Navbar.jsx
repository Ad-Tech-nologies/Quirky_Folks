import React, { useState, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import "./Navbar.css";
import logo from "../../assets/qf.png";

function Navbar() {
  const navRef = useRef();
  const showNavbar = () =>{
    navRef.current.classList.toggle(
			"responsive_nav"
		);
  };

  return (

    <nav>
      <img src={logo} alt="Logo"  />
      <div ref={navRef} className="menu">
        <h3><a href="#services">Services</a></h3>
        <h3><a href="https://quirkyfolks.blogspot.com/">Our Blogs</a></h3>
        <h3><a href="#about-us">About Us</a></h3>
        <h4><a href="#contact-us">Contact Us</a></h4>
        <button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
      </div>
      <button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
    </nav>
  );
}

export default Navbar;
