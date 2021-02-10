import React from 'react';
import './style.scss';

const InformationForm = ({ user }) => (
  <div className="user-info__container">
    <ul className="user-info__container__list">
      <li className="user-info"> Nom : {user.first_name} </li>
      <li className="user-info"> Prenom : {user.last_name} </li>
      <li className="user-info"> Rue : {user.adress} </li>
      <li className="user-info"> Code postal : {user.zip_code} </li>
      <li className="user-info"> Ville : {user.city} </li>
      <li className="user-info"> nom du magasin : {user.shop_name} </li>
      <li className="user-info"> Contactez ce commercant par email : {user.email} </li>
    </ul>
  </div>
);

export default InformationForm;
