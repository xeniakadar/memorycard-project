import React from 'react'
import './styles/header-styles.css'

export default function Header(props) {
  return (
    <div className='header--container'>
      <h1 className='header--title'>Memory Game</h1>
      <h2 className='scores'>Max Score: {props.allImages.length }</h2>
      <h2 className='scores'>Current Score: {props.currentScore}</h2>
      <h2 className='scores'>Best Score: {props.bestScore}</h2>
    </div>
  )
}
