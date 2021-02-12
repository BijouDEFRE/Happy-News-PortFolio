import axios from 'axios';
// import { getDataCity } from '../redux/actions';

const api = (store) => (next) => (action) => {
  switch (action.type) {
    case 'GET_NEWS':
      // on déclenche la requete
      axios.get('https://api-happy-news.herokuapp.com/article')
        .then((response) => { // requete réussie
          // on envoie une action pour sauvegarder les recettes
          // avec un second paramètre qui contient la réponse
          store.dispatch({ type: 'GET_NEWS_SUCCESS', list: response.data.data });
        });
      break;
    default:
      next(action);
  }
};

export default api;
