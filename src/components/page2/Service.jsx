import React from 'react'
import "./Page2.css"

function Service(props) {
  return (
    <div id='services' className='service-content'>
        <h2>{props.heading}</h2>
        <p>{props.content}
        </p>
    </div>
  )
}

export default Service