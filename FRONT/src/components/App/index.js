// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';
// == Import
import NotFound from 'src/components/404';
import About from 'src/components/About';
import CGU from 'src/components/CGU';
import ContactForm from 'src/components/ContactForm';
import CUstomerP from 'src/components/CUstomerP';
import Footer from 'src/components/Footer';
import Home from 'src/components/Home';
// import Login from 'src/components/Login';
import RetaillerP from 'src/components/RetaillerP';
import Terms from 'src/components/Terms';
// import Header from 'src/components/Header';
import Header from 'src/containers/header';
import Login from 'src/containers/Login';
// == Import CSS
import './styles.scss';


// == Composant
const App = ({isLogged}) => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/connexion">  
        <Login />
        {/* {isLogged ? <Redirect to="/news/liste" /> : <Login />} */}
      </Route>

    {/* <Route exact path="/inscription/commercant">
        < />
      </Route> */}
    {/* <Route exact path="/inscription/client">
        < />
      </Route> */}
    <Route exact path="/commercant/profil"> {/* pas encore l'id customers */}
        <RetaillerP />
      </Route>
    {/* <Route exact path="/commercant/profil/:id/modifications-client">
        < />
      </Route> */}
     
      <Route exact path="/client/profil">
        <CUstomerP />
      </Route>
      {/* <Route exact path="/client/profil/:id/modifications-client">
        < />
      </Route> */}
    {/* <Route exact path="/news/liste">
        < />
      </Route> */}
    {/* <Route exact path="/news/:categoriesId">
        < />
    </Route> */}
    {/* <Route exact path="/news/recherche">
          < />
    </Route> */}
    {/* <Route exact path="/map/recherche">
          < />
    </Route> */}
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

// == Export
export default App;

