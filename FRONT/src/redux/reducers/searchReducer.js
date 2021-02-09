// import { CHANGE_SEARCH_VALUE } from '../actions';
import {
  ACTIVITY_SELECTED, CHANGE_SEARCH_VALUE, GET_CITY_FROM_API_SUCCESS, RESET_ACTIVITY_SELECTED
} from 'src/redux/actions';

const initialState = {
  searchValue: '',
  activitySelected: '',
  cityCoordinates: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SEARCH_VALUE:
      return { ...state, searchValue: action.value };
    case ACTIVITY_SELECTED:
      return { ...state, activitySelected: action.value };
    case GET_CITY_FROM_API_SUCCESS:
      return { ...state, cityCoordinates: action.cityCoordinates };
    case RESET_ACTIVITY_SELECTED:
      return { ...state, activitySelected: '' };
    default:
      return { ...state };
  }
};

export default searchReducer;
