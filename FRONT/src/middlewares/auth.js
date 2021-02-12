import axios from 'axios';
import FormData from 'form-data';
import {
  handleLoginError, handleLoginSuccess, handleSubscribeError, handleSubscribeSuccess, LOGIN, SUBSCRIBE
} from '../redux/actions';

const api = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      // to get state
      const state = store.getState();
      // create new form data
      const form = new FormData();
      form.append('email', state.auth.email);
      form.append('password', state.auth.password);
      // config axios
      const config = {
        method: 'post', // verbe POST
        url: 'https://api-happy-news.herokuapp.com/login', // endpoint de login
        data: form,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };
      axios(config) // on lance la requete...
        .then((response) => { // cas de réussite
          // to get userToken in BDD
          const { userToken } = response.data;
          // to get user id in BDD
          const { id } = response.data.user[0];
          // to save in localStorage
          localStorage.setItem('token', userToken);
          localStorage.setItem('id', id);
          store.dispatch(handleLoginSuccess(response.data));
          // on le stocke aussi dans le localStorage
        })
        .catch((error) => { // cas d'erreur
          store.dispatch(handleLoginError(error.response.data));
        });
      break;
    }
    case SUBSCRIBE: {
      const state = store.getState();
      // console.log(state);

      const form = new FormData();
      form.append('first_name', state.auth.first_name);
      form.append('last_name', state.auth.last_name);
      form.append('adress', state.auth.adress);
      form.append('zip_code', state.auth.zip_code);
      form.append('city', state.auth.city);
      form.append('email', state.auth.email);
      form.append('password', state.auth.password);

      if (state.auth.role_id == 3) {
        form.append('company_name', state.auth.company_name);
        form.append('shop_name', state.auth.shop_name);
        form.append('registration_number', state.auth.registration_number);
      }
      form.append('role_id', state.auth.role_id);
      if (state.auth.role_id == 3) {
        form.append('activity_id', state.auth.activity_id);
      }

      const config = {
        method: 'post',
        url: 'https://api-happy-news.herokuapp.com/signup',
        data: form,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };
      axios(config)
        .then((response) => {
          store.dispatch(handleSubscribeSuccess(response.data));
          console.log(response.data.registered);
        })
        .catch((error) => { // cas d'erreur
          console.log(error);
          store.dispatch(handleSubscribeError());
        });
      break;
    }
    default:
      next(action);
  }
};

export default api;
