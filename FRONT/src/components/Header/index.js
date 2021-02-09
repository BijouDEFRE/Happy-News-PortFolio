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
}) =>
  // console.log(useParams);
  (
    <header className="header">
      <Logo />
      <Title />
      <div className="header-nav">

        {token && (
        <>
          <Avatar />
          <div className="header-helloUser">
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
          <NavLink to={`/commercant/profil/${id}`}> <Button>Mon profil</Button></NavLink>
        </>
        )}
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
