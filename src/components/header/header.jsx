import React, { useState } from 'react'
import Logo from '../common/main-logo/logo'
import Nav from '../common/nav/nav';
import ModalNav from '../common/modal-nav/modal-nav'

import './header.css'

const Header = () => {

  const [toggle, setToggle] = useState(false)

  const handleToggle = (e) => {
    e.preventDefault()
    setToggle(!toggle)
  }

  return (
    <header className="header-container">
      <div className="nav-container">
        <Logo />
        <Nav handleToggle={handleToggle} />
        <ModalNav handleToggle={handleToggle} toggle={toggle} />
      </div>
      <h1 className="header"> Immersive Experiences That Deliver</h1>
    </header>
  )
}

export default Header
