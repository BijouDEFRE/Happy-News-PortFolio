import axios from 'axios';
import { deleteNewsSuccess, DELETE_NEWS } from '../redux/actions';

const api = (store) => (next) => (action) => {
  switch (action.type) {
    case 'GET_NEWS': {
      // on déclenche la requete
      axios.get('https://api-happy-news.herokuapp.com/article')
        .then((response) => { // requete réussie
          // on envoie une action pour sauvegarder la liste des news (articles)
          // avec un second paramètre qui contient la réponse
          // console.log(response.data.data);
          store.dispatch({ type: 'GET_NEWS_SUCCESS', list: response.data.data });
        });
      break;
    }
    case DELETE_NEWS: {
      const token = localStorage.getItem('token');
      // const state = store.getState();
      // const articleId = state.addNews.id;
      // console.log(articleId);
      // on déclenche la requete

      const config = {
        method: 'delete',
        url: `https://api-happy-news.herokuapp.com/article/${action.value}`,
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      };

      axios(config)
        .then((response) => { // requete réussie
          // on envoie une action pour sauvegarder la liste des news (articles)
          // avec un second paramètre qui contient la réponse
          store.dispatch(deleteNewsSuccess(response.data));
          // loadNews();
          window.alert('La suppression de la carte a été effectuée');
        })
        .catch((error) => { // cas d'erreur
          console.log(error);
          window.alert("La suppression de la carte n'a pas pu être effectuée");
        });
      break;
    }
    default:
      next(action);
  }
};

export default api;
