import React from 'react'
import uniqid from 'uniqid'
import './styles/card-styles.css'

export default function Cards(props) {

  return (
    <div>
      {props.allImages.map(image => {
        return (
          <div key={image.id}>
            <img onClick={props.handleClick} className='card--images' src={require(`${image.src}`)} alt="images" />
            <h4>{image.title}</h4>
          </div>
        )
      })}
    </div>
  )
}
