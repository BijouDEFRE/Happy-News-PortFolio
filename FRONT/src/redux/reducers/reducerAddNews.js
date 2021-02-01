
import { ADD_NEWS, CHANGE_ADDNEWS_FIELD } from '../actions';

// Initial State
const initialState = {
    article_title: '',
    description: '',
    picture_url: '',
    price: '',
    is_news: true, 
    user_id: null, // A récupérer depuis le state
    activity_id: '', // A récupérer depuis un champs déroulant. 9 id différents à récup dans le back
    visible: false
}
// reducer

const reducerAddNews = (oldState = initialState, action) => {
  console.log('oldState dans le reducer:', oldState)

  switch (action.type) {
    
    case CHANGE_ADDNEWS_FIELD:
      return {
        ...oldState,
        [action.name]:action.value,
      }
      default:
      return { ...oldState};
  }
}

export default reducerAddNews;

