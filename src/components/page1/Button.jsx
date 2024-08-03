import React from 'react'
import "./Button.css"

function Button(props) {
  return (
    <div>
        <button><a href="#contact-us">{props.text}</a></button>
    </div>
  )
}

export default Button