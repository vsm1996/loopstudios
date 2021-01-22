import React from 'react'
import NavOpen from '../../../assets/icon-hamburger.svg'


import './nav.css'
const Nav = ({ handleToggle }) => {


  return (
    <div className="nav-controller">
      <ul className="nav">
        <li className="nav-item">About</li>
        <li className="nav-item">Careers</li>
        <li className="nav-item">Events</li>
        <li className="nav-item">Products</li>
        <li className="nav-item">Support</li>
      </ul>
      <img src={NavOpen} alt="navigation menu icon" className="navicon-open" onClick={handleToggle} />
    </div>
  )
}

export default Nav
