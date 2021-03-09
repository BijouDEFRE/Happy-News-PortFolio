import React from 'react';
import errorPicture from '../../assets/Images/404.png';
import './style.scss';

const NotFound = () => ( 
  <div className="error">
    <img src={errorPicture} alt="erreur 404" className="error_picture" />
    <p className="error_message">
      OUPS ! cette page semble introuvable
    </p>
  </div>
);

export default NotFound;
