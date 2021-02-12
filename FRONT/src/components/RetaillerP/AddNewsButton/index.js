import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

const AddNewsButton = () =>
  // console.log(store);
  (
    <div className="bouton">
      <NavLink to="/creation-de-news">
        <button type="button" className="btn">Ajouter une News</button>
      </NavLink>

    </div>
  );
export default AddNewsButton;
