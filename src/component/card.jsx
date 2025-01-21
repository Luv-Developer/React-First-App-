import React from 'react'
import "./card.css"
function card({title,description}) {
  return (
    <div className='cards'>
        <img  className = "image" src = "https://permutable.ai/wp-content/uploads/2024/03/19301.jpg"></img>
        <div className='data'>
        <h1>{title}</h1>
        <p>{description}</p>
        </div>
    </div>
  )
}

export default card