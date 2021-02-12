// == Import npm
import { connect } from 'react-redux';

// Import components
import News from 'src/components/News';

// Import from actions creator
import {
  changeSearchValueAction,
  getCityFromApiSuccess, handleSearchSubmit, handleSelectedActivity,
  resetActivitySelected,
} from 'src/redux/actions';

const mapStateToProps = (state) => ({
  // we create a booleen that is true if we have news are in the list
  hasData: state.newsList.list.length > 0,
  // we create a booleen that is true if we have activities in the list (activities)
  hasDataActivities: state.activities.activitiesList.length > 0,
  // we create the data that lists our news
  list: state.newsList.list,
  // we create the data that lists our activities (= categories on our News page)
  activities: state.activities.activitiesList,
  // we create a booleen to manage our spinner
  isLoading: !state.hasData,
  // The data that corresponds to the search entered by the user in News
  searchValue: state.searchValue.searchValue,
  // The data that corresponds to the activity chosen to filter the news
  activitySelected: state.searchValue.activitySelected,
  // the coordinates of the city returned by the api
  cityCoordinates: state.searchValue.cityCoordinates,
});

// mapDispatchToProps = cabling of actions (function type props)
const mapDispatchToProps = (dispatch) => ({
  loadNews: () => {
    dispatch({ type: 'GET_NEWS' });
  },
  loadActivities: () => {
    dispatch({ type: 'GET_ACTIVITIES' });
  },
  changeSearchField: (value, name) => {
    dispatch(changeSearchValueAction(value, name));
  },
  handleSearchSubmit: (cityNameEnteredByTheUser) => {
    dispatch(handleSearchSubmit(cityNameEnteredByTheUser));
  },
  handleSelectedActivity: (value) => {
    dispatch(handleSelectedActivity(value));
  },
  getCityFromApiSuccess: (cityCoordinates) => {
    dispatch(getCityFromApiSuccess(cityCoordinates));
  },
  resetActivitySelected: () => {
    dispatch(resetActivitySelected());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(News);
