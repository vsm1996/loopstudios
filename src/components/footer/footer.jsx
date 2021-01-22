import React from 'react'
import Logo from '../common/main-logo/logo';
import Nav from '../common/nav/nav';

import Facebook from '../../assets/icon-facebook.svg'
import Instagram from '../../assets/icon-instagram.svg'
import Pinterest from '../../assets/icon-pinterest.svg'
import Twitter from '../../assets/icon-twitter.svg'

import './footer.css'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="left">
        <Logo />
        <div className="footer-nav">
          <ul className="footer-nav__list">
            <li className="footer-nav__item">About</li>
            <li className="footer-nav__item">Careers</li>
            <li className="footer-nav__item">Events</li>
            <li className="footer-nav__item">Products</li>
            <li className="footer-nav__item">Support</li>
          </ul>
        </div>
      </div>

      <div className="right">
        <ul className="footer-icon-list">
          <li className="footer-icon">
            <img src={Facebook} alt="facebook logo" className="footer-icon__logo" />
          </li>
          <li className="footer-icon">
            <img src={Twitter} alt="twitter logo" className="footer-icon__logo" />
          </li>
          <li className="footer-icon">
            <img src={Pinterest} alt="pinterest logo" className="footer-icon__logo" />
          </li>
          <li className="footer-icon">
            <img src={Instagram} alt="instagram logo" className="footer-icon__logo" />
          </li>
        </ul>
        <p className="footer-copyright">© 2021 Loopstudios. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
