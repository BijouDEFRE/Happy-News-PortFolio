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
                required: { value: true, message: 'Ce champ est obligatoire' },
              })}
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
