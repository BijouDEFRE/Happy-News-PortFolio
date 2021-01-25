import data from '../../data/data';
import { ADD_NEWS } from '../constants';

import newsList from 'src/data/data';
import { title } from 'process';

const initialState = {
  id: '',
  title: '',
  decription: '',
  category: '',
  price: '',
  file: []
}

// reducer

const reducerAddNews = (state = initialState, action) => {

  // condition to get newsData informations if allready exists
  if (localStorage.getItem('newsData')) {
    state = JSON.parse(localStorage.getItem('newsData'))
  }

  switch (action.type) {
    case ADD_NEWS:
      state = [...state, { 
      title: newHappyNews.title}]
      // To have access to the news registered
      localStorage.setItem('newsData', JSON.stringify(state))
      return state;
      
    default: return state;
  }
}
export default reducerAddNews;
