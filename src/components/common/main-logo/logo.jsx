import React from 'react';
import LoopLogo from '../../../assets/logo.svg';
import './logo.css';

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={LoopLogo} alt="loopstudios logo" className="logo" />
    </div>
  );
}

export default Logo;