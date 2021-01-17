import React from 'react'

import './card.css'

const Card = ({ game }) => {
  return (
    <div className={`card ${game.class}`}>
      <div className="">
        <p className="card-text">{game.title}</p>
      </div>
    </div>
  )
}

export default Card
