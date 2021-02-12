// Import from actions creator
import {
  ACTIVITY_SELECTED, CHANGE_SEARCH_VALUE, GET_CITY_FROM_API_SUCCESS, RESET_ACTIVITY_SELECTED
} from 'src/redux/actions';

// initial state of the slice "searchValue" from our store
const initialState = {
  searchValue: '',
  activitySelected: '',
  cityCoordinates: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    // get input value from searchBar in News component
    case CHANGE_SEARCH_VALUE:
      return { ...state, searchValue: action.value };
    // get the name of the activity clicked from News component
    case ACTIVITY_SELECTED:
      return { ...state, activitySelected: action.value };
    // get city coordinates from gouvernment API
    case GET_CITY_FROM_API_SUCCESS:
      return { ...state, cityCoordinates: action.cityCoordinates };
    // reset the parameter activitySelected from News component
    case RESET_ACTIVITY_SELECTED:
      return { ...state, activitySelected: '' };
    default:
      return { ...state };
  }
};

export default searchReducer;
