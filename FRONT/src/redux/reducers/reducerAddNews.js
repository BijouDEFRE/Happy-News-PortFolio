import { CHANGE_ADDNEWS_FIELD, ADD_NEWS_SUCCESS, HANDLE_CHANGE_IMG} from '../actions';

// Initial State
const initialState = {
    article_title: '',
    description: '',
    picture_url: '',
    price: '',
    is_news: true, 
    user_id: null, // A récupérer depuis le localstorage
    activity_id: '', // A récupérer depuis un champs déroulant. 9 id différents à récup dans le back
    // modalType: null,
    // modalProps: {}
}

// reducer

const reducerAddNews = (oldState = initialState, action) => {
  // console.log('oldState dans le reducer:', oldState);

  switch (action.type) {
    case CHANGE_ADDNEWS_FIELD:
      return {
        ...oldState,
        [action.name]: action.value,
      };
    case HANDLE_CHANGE_IMG:
      return {
        ...oldState,
        picture_url: action.picture_url,
      }
    case ADD_NEWS_SUCCESS:
      console.log("case addNewsSuccess");
      return {
        ...oldState,
        article_title: '',
        description: '',
        picture_url: '',
        price: '',
        is_news: true, 
        user_id: null, 
        activity_id: '',
        window: window.alert("La news a été ajoutée avec succès")
      };
    
    default:
      return { ...oldState };
  }
};

export default reducerAddNews;
