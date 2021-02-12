import axios from 'axios';
import FormData from 'form-data';
import { ADD_NEWS, ADD_NEWS_SUCCESS, GET_NEWS } from '../redux/actions';

const add = (store) => (next) => (action) => {
  switch (action.type) {
    case ADD_NEWS: {
      const state = store.getState();
      const token = localStorage.getItem('token');
      // console.log('token du localstorage vaut :', token);
      // Faire la requête pour l'ajout de news
      // On récupère l'objet qui défini la news et
      // DANS L'ORDRE que le back attends sinon ça ne passera pas
      // store.getstate nous donne l'état du store à un instant T.
      // On le déstructure pour prendre ce dont on a besoin
      // const { addNews, auth } = store.getState();
      console.log('State.addNews.article_title:', state.addNews.article_title);
      console.log('State.addNews.description:', state.addNews.description);
      console.log('State.addNews.picture_url:', state.addNews.picture_url);
      console.log('State.addNews.price:', state.addNews.price);
      console.log('State.addNews.is_news:', state.addNews.is_news);
      console.log('State.auth.user_id:', state.auth.userId);
      console.log('State.addNews.activity_id:', state.user.user.activity_id);
      const formData = new FormData();
      // Ici, les données du formulaire
      formData.append('article_title', state.addNews.article_title);
      formData.append('description', state.addNews.description);
      formData.append('picture_url', state.addNews.picture_url);
      formData.append('price', state.addNews.price);
      formData.append('is_news', state.addNews.is_news);
      formData.append('user_id', state.auth.userId);
      formData.append('activity_id', state.user.user.activity_id);
      // console.log(formData);
      const config = {
        method: 'post', // verbe de la requête, ici un post pour insérer des informations à la bdd
        url: 'https://api-happy-news.herokuapp.com/article', // Voir avec Fredo pour finir la route. Viser celle pour la creation de new
        headers: {
          'Content-Type': 'multipart/form-data', // Ici on précise le type de data qu'on envoie. Celui-ci sert à pouvoir envoyer du texte et des fichiers
          Authorization: `Bearer ${token}`,
        },
        data: formData,
      };

      axios(config) // On lance la requête
        .then((response) => { // La requête réussit
          console.log('Je suis dans axios.then, et response.data vaut:', response.data);
          store.dispatch({ type: ADD_NEWS_SUCCESS, newNews: response.data });
          store.dispatch({ type: GET_NEWS });
          // addNewsSuccess(response.data)
        })
        .catch((error) => { // La requête échoue
          if (error) {
            console.log(error);
            window.alert('La création de news a échoué, merci de remplir tous les champs du formulaire');
          }
        });
      break;
    }

    default:
      next(action);
  }
};

export default add;
