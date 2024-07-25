import React from 'react'
import genz from '/person.png'


function Why(props) {
  return (
        <div className="why-content">
            <h4>{props.heading}  <img src={props.image} alt="" />
            </h4>
            <p>{props.con}</p>            
        </div>
  )
}

export default Why