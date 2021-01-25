
import { combineReducers } from 'redux';
import authReducer from './auth';
import reducerAddNews from './reducerAddNews';

export default combineReducers({
    auth: authReducer,
    addNews: reducerAddNews
  });
