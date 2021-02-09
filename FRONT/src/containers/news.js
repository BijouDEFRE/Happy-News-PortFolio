import { connect } from 'react-redux';
// composant de présentation
import News from 'src/components/News';
import {
  changeSearchValueAction,
  getCityFromApiSuccess, handleSearchSubmit, handleSelectedActivity,
  resetActivitySelected
} from 'src/redux/actions';

const mapStateToProps = (state) => ({
  // on crée un booleen qui vaut vrai si on a des news sont dans la liste
  hasData: state.newsList.list.length > 0,
  // on crée un booleen qui vaut vrai si on a des activitiés dans la liste (activities)
  hasDataActivities: state.activities.activitiesList.length > 0,
  // on crée la data qui liste nos news
  list: state.newsList.list,
  // on crée la data qui liste nos activités (= catégories dans notre page News)
  activities: state.activities.activitiesList,
  // on crée un booleen pour gérer notre spinner
  isLoading: !state.hasData,
  // La donnée qui correspond à la recherche saisie par l'utilisateur dans News
  searchValue: state.searchValue.searchValue,
  // La donnée qui correspond à l'activité choisie pour filtrer les news
  activitySelected: state.searchValue.activitySelected,
  // les coordonnées de la ville retournée par l'api
  cityCoordinates: state.searchValue.cityCoordinates,
});
// mapDispatchToProps = cablage des actions (props de type fonction)
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
