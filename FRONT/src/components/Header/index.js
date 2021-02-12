// import NPM
import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Avatar from 'src/components/Header/Avatar';
import Button from 'src/components/Header/Button';
import Logo from 'src/components/Header/Logo';
import './style.scss';
import Title from './Title';

const Header = ({
  token, handleLogout, id, prenom,
}) => (
  <header className="header">
    <Logo />
    <Title />
    <div className="header__nav">
      {/* display of buttons depends on token in local storage */}
      {token && (
        <>
          <Avatar />
          <div className="header__helloUser">
            <p>Bonjour {prenom}</p>
          </div>
          <NavLink to="/">
            <Button
              type="button"
              event={handleLogout}
            >
              Déconnexion
            </Button>
          </NavLink>
          {/* redirect to the retailler's profil */}
          <NavLink to={`/commercant/profil/${id}`}> <Button>Mon profil</Button></NavLink>
        </>
      )}
      {/* display conditional, depends on the token in the LocalStorage */}
      {token == null && (
        <>
          <div className="header-adjustSize" />
          <NavLink to="/connexion"> <Button>Connexion</Button></NavLink>
          <NavLink to="/inscription"> <Button>Inscription</Button></NavLink>
        </>
      )}
      <NavLink to="/news/liste"><Button>Liste des news</Button></NavLink>
    </div>
  </header>
);
Header.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  token: PropTypes.string,
  prenom: PropTypes.string,
  id: PropTypes.string,
};

Header.defaultProps = {
  prenom: '',
  token: '',
  id: '',
};

export default Header;
