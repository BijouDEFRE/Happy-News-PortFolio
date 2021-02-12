import { ADD_NEWS_SUCCESS, CHANGE_ADDNEWS_FIELD, SET_ISNEWS_ON_ARTICLE } from '../actions';

// Initial State
const initialState = {
  article_title: '',
  description: '',
  picture_url: '',
  price: '',
  is_news: true,
  user_id: null,
  activity_id: '',
};

// reducer
const reducerAddNews = (oldState = initialState, action) => {
  switch (action.type) {
    case CHANGE_ADDNEWS_FIELD:
      return {
        ...oldState,
        [action.name]: action.value,
      };
    case ADD_NEWS_SUCCESS:
      return {
        ...oldState,
        article_title: '',
        description: '',
        picture_url: '',
        price: '',
        is_news: true,
        user_id: null,
        activity_id: '',
        window: window.alert('La news a été ajoutée avec succès'),
      };
    case SET_ISNEWS_ON_ARTICLE:
      if (action.checked === false) {
        return {
          ...oldState,
          is_news: true,
        };
      }
      if (action.checked === true) {
        return {
          ...oldState,
          is_news: false,
        };
      }
      break;
    default:
      return { ...oldState };
  }
};

export default reducerAddNews;
