import React from 'react'
import Card from '../common/feature-card/card'

import './features.css'
const Features = () => {
  const games = [
    {
      title: 'Deep Earth',
      class: 'deep-earth'
    },
    {
      title: 'Night Arcade',
      class: 'night-arcade'
    },
    {
      title: 'Soccer Team VR',
      class: 'soccer-team'
    },
    {
      title: 'The Grid',
      class: 'the-grid'
    },
    {
      title: 'From Up Above VR',
      class: 'from-above'
    },
    {
      title: 'Pocket Borealis',
      class: 'pocket-borealis'
    },
    {
      title: 'The Curiosity',
      class: 'the-curiosity'
    },
    {
      title: 'Make It Fisheye',
      class: 'fisheye'
    },
  ]

  return (
    <section className="features-container">
      <div className="features__pre">
        <h3 className="features__heading">Our Creations</h3>
        <button className="features-btn"> See All </button>
      </div>
      <div className="features features-grid">
        {games.map((game, index) => <Card key={index} game={game} />)}
      </div>
    </section>
  )
}

export default Features
