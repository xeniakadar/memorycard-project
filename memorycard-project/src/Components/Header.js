import React from 'react'

export default function Header(props) {
  return (
    <div>
      <h2>Max Score: 5</h2>
      <h2>Current Score: {props.currentScore}</h2>
      <h2>Best Score: {props.bestScore}</h2>
    </div>
  )
}
