import axios from 'axios';
import FormData from 'form-data';
import { ADD_NEWS, ADD_NEWS_SUCCESS, GET_NEWS } from '../redux/actions';

const add = (store) => (next) => (action) => {
  switch (action.type) {
    case ADD_NEWS: {
      const state = store.getState();
      const token = localStorage.getItem('token');
      const formData = new FormData();
      // Here we push the new data of the form
      formData.append('article_title', state.addNews.article_title);
      formData.append('description', state.addNews.description);
      formData.append('picture_url', state.addNews.picture_url);
      formData.append('price', state.addNews.price);
      formData.append('is_news', state.addNews.is_news);
      formData.append('user_id', state.auth.userId);
      formData.append('activity_id', state.user.user.activity_id);
      const config = {
        method: 'post', 
        url: 'https://api-happy-news.herokuapp.com/article',
        headers: {
          'Content-Type': 'multipart/form-data', 
          Authorization: `Bearer ${token}`,
        },
        data: formData,
      };

      axios(config) 
        .then((response) => { 
          console.log('Je suis dans axios.then, et response.data vaut:', response.data);
          store.dispatch({ type: ADD_NEWS_SUCCESS, newNews: response.data });
          store.dispatch({ type: GET_NEWS });
          
        })
        .catch((error) => { 
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
