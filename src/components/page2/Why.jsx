import React from 'react'

function Why(props) {
  return (
    <div className='why'>
        <div className="why-content">
            <h4>{props.heading}</h4>
            <p>{props.con}
            </p>
        </div>
    </div>
  )
}

export default Why