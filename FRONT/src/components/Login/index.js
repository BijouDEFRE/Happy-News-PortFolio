import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import avatar from 'src/assets/Images/avatar-SVG-primarycolor.svg';
import Bouton from '../Header/Button';
import Field from './Field.js';
// Import du CSS
import './style.scss';


const Login = ({email, password, changeField, handleLogin}) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin(
      console.log('je suis dans le composant login')
    );
  }; 

  return (
 
    <div>
      <section className="login">
        <div className="login__loginbox">
          <img alt="avatar" src={avatar} className="login__loginbox__avatar" />
          <h1 className="login__loginbox__title">Connexion</h1>
          <form onSubmit={handleSubmit}>
          <Field
          name="email"
          value={email}
          onChange={changeField}
          placeholder='Email'
          />
          <Field
              name="password"
              value={password}
              onChange={changeField}
              placeholder='Mot de passe'
          />
  
            <Bouton type="submit" >Se connecter</Bouton>
          </form> 
            <a className="form__link" href="#">Mot de passe oublié ?</a>
            <h2 className="form__h2">Si vous n'avez pas encore de compte :</h2>
            <NavLink to='/inscription/client' ><Bouton>Création compte Client</Bouton></NavLink>
            <NavLink to='/inscription/commercant' ><Bouton>Création compte Commerçant</Bouton></NavLink>
          
        </div>
      </section>
       {/* )} */}
    </div>
    
);
}
export default Login;

Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};