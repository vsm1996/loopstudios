import React from 'react'
import Logo from '../main-logo/logo'
import NavClose from '../../../assets/icon-close.svg'

import './modal-nav.css'

const ModalNav = ({ handleToggle, toggle }) => {

  return (
    <div className={toggle === true ? 'modal show' : 'modal hide'}>
      <ul className="modal__nav">
        <div className="modal__func">
          <Logo />
          <img src={NavClose} alt="navigation menu icon" className="navicon-close" onClick={handleToggle} />
        </div>
        <div className="modal__list">
          <li className="modal__nav-item">About</li>
          <li className="modal__nav-item">Careers</li>
          <li className="modal__nav-item">Events</li>
          <li className="modal__nav-item">Products</li>
          <li className="modal__nav-item">Support</li>
        </div>
      </ul>
    </div>
  )
}

export default ModalNav
