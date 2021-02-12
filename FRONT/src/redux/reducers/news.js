// Import from actions creator
import { DELETE_NEWS_SUCCESS } from 'src/redux/actions';

// initial state of the slice "newsList" from our store
const initialState = {
  list: [],
};

// reducer who will manage the activities news
const newsReducer = (oldState = initialState, action) => {
  switch (action.type) {
    // This action will give the list of news returned by the api if the successful action
    case 'GET_NEWS_SUCCESS':

      return {
        ...oldState,
        list: action.list,

      };
    // This action will inform us that the news is delete with success
    case DELETE_NEWS_SUCCESS:
      return {
        ...oldState,
      };
    default:
      return { ...oldState };
  }
};

export default newsReducer;
