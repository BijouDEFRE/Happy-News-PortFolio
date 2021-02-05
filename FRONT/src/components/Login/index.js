import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import avatar from 'src/assets/Images/avatar-SVG-primarycolor.svg';
import Button from '../Header/Button';
import Field from './Field';
// pour react hook form
// Import du CSS
import './style.scss';

const Login = ({
  email, password, changeField, handleLogin,
}) => {
  // pour react hook form on commente handle submit
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   handleLogin();
  // };
  const { register, handleSubmit, errors } = useForm();
  // const handleSubmit = data => console.log(data);
  return (
    <div>
      <section className="login">
        <div className="login__loginbox">
          <img alt="avatar" src={avatar} className="login__loginbox__avatar" />
          <h1 className="login__loginbox__title">Connexion</h1>
          {/* (handlelogin pour react hook form */}
          <form onSubmit={handleSubmit(handleLogin)}>

            <Field
              name="email"
              value={email}
              onChange={changeField}
              placeholder="Email"
              type="email"
              register={register({
                required: true,
                minLength: { value: 8, message: 'vous devez entrer au moins 10 caracteres' },
              })}
            />
            {errors.email && <span> {errors.email.message} </span>}
            <Field
              name="password"
              value={password}
              onChange={changeField}
              placeholder="Mot de passe"
              type="password"
              register={register({
                required: { value: true, message: 'ce champs est obligatoire' }, minLength: { value: 2, message: 'le password doit contenir plus de deux caracteres' },
              })}
            />
            {errors.password && <p> {errors.password.message}</p>}
            <Button type="submit">Se connecter</Button>
          </form>
          <a className="form__link" href="#">Mot de passe oublié ?</a>
          <h2 className="form__h2">Si vous n'avez pas encore de compte :</h2>
          <NavLink to="/inscription"><Button>Creer votre compte</Button></NavLink>
        </div>
      </section>
    </div>
  );
};
Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
};
export default Login;
