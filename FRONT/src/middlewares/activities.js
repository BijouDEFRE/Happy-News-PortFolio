// activities = catégories dans notre page News
import axios from 'axios';

const api = (store) => (next) => (action) => {
  switch (action.type) {
    case 'GET_ACTIVITIES':
      // on déclenche la requete
      axios.get('https://api-happy-news.herokuapp.com/activity')
        .then((response) => { // requete réussie
          // on envoie une action pour sauvegarder les activités
          // avec un second paramètre qui contient la réponse
          store.dispatch({ type: 'GET_ACTIVITIES_SUCCESS', activities: response.data.data });
          // list existant déjà dans nos data, j'appel la liste des activités : activities
        })
        .catch((error) => { // cas d'erreur
          console.log(error);
        });
      break;
    default:
      next(action);
  }
};

export default api;
