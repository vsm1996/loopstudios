import React from 'react'
import Logo from '../common/main-logo/logo'
import Nav from '../common/nav/nav';

import './header.css'

const Header = () => {
  return (
    <header className="header-container">
      <div className="nav-container">
        <Logo />
        <Nav />
      </div>
      <h1 className="header"> Immersive Experiences That Deliver</h1>
    </header>
  )
}

export default Header
