import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import du moddleware activities
import activitiesMiddleware from '../middlewares/activities';
// Import de middleware d'appel a Api pour le POST d'une NEWS
import addNewsMiddleware from '../middlewares/addNewsMid';
// import de mon middleware d'appel a api (requête pour obtenir les news)
import api from '../middlewares/api';
// import middleware signup and signin
import authMiddleware from '../middlewares/auth';
// import du middleware d'appel api qui retourne
// les coordonnées gps de la ville saisie par l'utilisateur
import getCityCoordinatesByApi from '../middlewares/getCityCoordinatesByApi';
// rootReducer = résultat de combineReducers
import user from '../middlewares/userMiddleware';
import rootReducer from './reducers';

// on crée le store
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(
  // commentaire de auth mid pour thunk
  authMiddleware,
  api,
  activitiesMiddleware,
  user,
  getCityCoordinatesByApi,
  addNewsMiddleware,
)));

export default store;
