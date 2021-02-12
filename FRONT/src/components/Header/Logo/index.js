import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/Images/logo-happy-news-SVG.svg';
import './style.scss';

function Logo() {
  return (
    <div className="logo">
      <NavLink to="/"> <img src={logo} alt="logo website" className="logo__img" /></NavLink>
    </div>
  );
}

export default Logo;
