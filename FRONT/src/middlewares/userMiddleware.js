import axios from 'axios';
import {
  getAllUsersSuccess, getUserDetailsSuccess, GET_ALL_USERS, GET_USER_DETAILS
} from '../redux/actions';

const userApi = (store) => (next) => (action) => {
  switch (action.type) {
    // shows all shop owners on the map when starts
    case GET_ALL_USERS:
      axios.get('https://api-happy-news.herokuapp.com/user')
        .then((response) => {
          // console.log(response.data.data);
          store.dispatch(getAllUsersSuccess(response.data.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case GET_USER_DETAILS: {
      axios.get(`https://api-happy-news.herokuapp.com/user/${action.id}`)

        .then((response) => { // requete réussie
          // on envoie une action pour sauvegarder la liste des news (articles)
          // avec un second paramètre qui contient la réponse
          console.log(response.data.data);
          store.dispatch(getUserDetailsSuccess(response.data.data));
        })
        .catch((error) => { // cas d'erreur
          console.log(error);
        });
      break;
    }
    default:
      next(action);
  }
};

export default userApi;
