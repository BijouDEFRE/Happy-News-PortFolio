// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';

// Import du CSS
import './style.scss';

const Footer = () => (
  <footer className="footer">
    <ul className="footer__list">
      <li className="footer__list__item">
        <NavLink to="/mentions-légales" className="footer__list__item__link">Mentions légales</NavLink>
      </li>
      <li className="footer__list__item">
        <NavLink to="/a-propos-de-nous" className="footer__list__item__link">A propos</NavLink>
      </li>
      <li className="footer__list__item">
        <NavLink to="/condition-generales-d'utilisations" className="footer__list__item__link">Conditions générales</NavLink>
      </li>
      <li className="footer__list__item">
        <NavLink to="/nous-contacter/formulaire" className="footer__list__item__link">Contact</NavLink>
      </li>
    </ul>
  </footer>
);

export default Footer;
