import axios from 'axios';
import { GET_CITY_FROM_API_SUCCESS } from 'src/redux/actions';

const getCityCoordinatesByApi = (store) => (next) => (action) => {
  switch (action.type) {
    case 'GET_CITY_FROM_API':
      axios.get(`http://api-adresse.data.gouv.fr/search/?q=${action.cityNameEnteredByTheUser}&type=municipality&limit=1`)
        .then((response) => {
          console.log([response.data.features[0].geometry.coordinates[1],
            response.data.features[0].geometry.coordinates[0]]);
          store.dispatch({
            type: GET_CITY_FROM_API_SUCCESS,
            cityCoordinates: [response.data.features[0].geometry.coordinates[1],
              response.data.features[0].geometry.coordinates[0]],
          });
          localStorage.setItem('cityCoordinates', [response.data.features[0].geometry.coordinates[1],
            response.data.features[0].geometry.coordinates[0]]);
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    default:
      next(action);
  }
};

export default getCityCoordinatesByApi;
