import React from 'react'
import "./Footer.css"

function Footer() {
  const d = new Date();
let year = d.getFullYear();
  return (
    <div className='footer'>
        <div className="links">
         <div className="mail">
          <h3>Mailbox: </h3>
          <p>quirkyfolksentertainment@gmail.com</p>
         </div>
         <div className="phn">
          <h3>Phone no: </h3>
          <p> +91-7827976821</p>
          <p>+91-8882153750</p>
         </div>
        </div>
        <div className="socials">
          <p>Copyright © {year} </p>
        </div>
    </div>
  )
}

export default Footer