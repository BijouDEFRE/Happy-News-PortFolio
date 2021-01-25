import clsx from 'clsx';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
import authMiddleware from '../middlewares/auth';
// rootReducer = résultat de combineReducers
import rootReducer from './reducers';

// on crée le store
const store = createStore (rootReducer,composeWithDevTools(applyMiddleware(
    // commentaire de auth mid pour thunk
    authMiddleware
    // thunk
)));

console.log(store.getState());

export default store;

// Version PACO
/* import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducerAddNews } from './reducers/reducerAddNews';

console.log(reducerAddNews);
const rootReducer = combineReducers({
  newsList: reducerAddNews
})


// on crée le store
const store = createStore (rootReducer,composeWithDevTools());

export default store;
>>>>>>> origin/front/getDataFromNewsForm */