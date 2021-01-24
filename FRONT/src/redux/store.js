import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import authMiddleware from '../middlewares/auth';
// rootReducer = résultat de combineReducers
import rootReducer from './reducers';


// on crée le store
const store = createStore (rootReducer,composeWithDevTools(applyMiddleware(authMiddleware)));

export default store;