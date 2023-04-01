import React from 'react'
import './styles/card-styles.css'

export default function Cards(props) {

  return (
    <div>
      {props.allImages.map(image => {
        return (
          <div key={image.id} onClick={() => props.handleClick(image.id)}>
            <img
              className='card--images'
              src={require(`${image.src}`)}
              alt={image.title} />
            <h4>{image.title}</h4>
          </div>
        )
      })}
    </div>
  )
}
