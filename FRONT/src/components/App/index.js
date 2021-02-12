// == Import npm
import PropTypes from 'prop-types';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// == Import components / containers
import NotFound from 'src/components/404';
import About from 'src/components/About';
import CGU from 'src/components/CGU';
import ContactForm from 'src/components/ContactForm';
import Footer from 'src/components/Footer';
import Home from 'src/components/Home';
import Terms from 'src/components/Terms';
import AddNewsForm from 'src/containers/addNews';
import Header from 'src/containers/header';
import Login from 'src/containers/login';
import News from 'src/containers/news';
import Register from 'src/containers/register';
import RetaillerP from 'src/containers/RetaillerP';

// == Import CSS
import './styles.scss';

// == Composant
const App = ({ isLogged, isRegistered }) => (
  <div className="page_container">
    <Header />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/connexion">
        {/* redirect if the user is logged */}
        {isLogged ? <Redirect to="/news/liste" /> : <Login />}
      </Route>
      <Route exact path="/inscription">
        {/* redirect if the user susbcribe  */}
        {isRegistered ? <Redirect to="/connexion" /> : <Register />}
      </Route>
      <Route exact path="/commercant/profil/:id">
        <RetaillerP />
      </Route>
      <Route exact path="/news/liste">
        <News />
      </Route>
      <Route exact path="/creation-de-news">
        <AddNewsForm />
      </Route>
      <Route exact path="/condition-generales-d'utilisations">
        <CGU />
      </Route>
      <Route exact path="/nous-contacter/formulaire">
        <ContactForm />
      </Route>
      <Route exact path="/mentions-légales">
        <Terms />
      </Route>
      <Route exact path="/a-propos-de-nous">
        <About />
      </Route>
      <Route exact path="*">
        <NotFound />
      </Route>
    </Switch>
    <Footer />
  </div>
);

App.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  isRegistered: PropTypes.bool,
};
App.defaultProps = {
  isRegistered: false,
};
// == Export
export default App;
