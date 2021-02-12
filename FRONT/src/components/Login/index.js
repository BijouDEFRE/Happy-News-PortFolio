// == Import npm
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
// useForm is an API to handling form fields
import { NavLink } from 'react-router-dom';

// Import img
import avatar from 'src/assets/Images/avatar-SVG-primarycolor.svg';

// Import components
import Button from '../Header/Button';
import Field from './Field';

// Import du CSS
import './style.scss';

const Login = ({
  email, password, changeField, handleLogin,
}) => {
  // With React Hook Form, we have to comment handleSubmit
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   handleLogin();
  // };
  // This is a config line to use React Hook Form
  const { register, handleSubmit, errors } = useForm();
  return (
    <div>
      <section className="login">
        <div className="login__loginbox">
          <img alt="avatar" src={avatar} className="login__loginbox__avatar" />
          <h1 className="login__loginbox__title">Connexion</h1>
          {/* (handlelogin for react hook form */}
          <form onSubmit={handleSubmit(handleLogin)}>

            <Field
              name="email"
              value={email}
              onChange={changeField}
              placeholder="Email"
              type="email"
              register={register({
                required: { value: true, message: 'Ce champ est obligatoire' },
              })}
              // register is a method allows us to register an input/select
              // Ref and apply validation rules into React Hook Form.
            />
            {errors.email && <div className="login__form-error"> {errors.email.message} </div>}
            <Field
              name="password"
              value={password}
              onChange={changeField}
              placeholder="Mot de passe"
              type="password"
              register={register({
                required: { value: true, message: 'Ce champ est obligatoire' },
              })}
            />
            {errors.password && <div className="login__form-error"> {errors.password.message}</div>}
            <div className="buttonDiv">
              <Button type="submit">Se connecter</Button>
            </div>
          </form>
          <a className="form__link" href="#">Mot de passe oublié ?</a>
          <h2 className="form__h2">Si vous n'avez pas encore de compte :</h2>
          <NavLink to="/inscription"><Button>Inscrivez vous</Button></NavLink>
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
