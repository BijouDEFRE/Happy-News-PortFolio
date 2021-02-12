// ajout de loggin success pour thunk
import {
  CHANGE_AUTH_FIELD, GET_SELECT_FIELD, LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT, SUBSCRIBE_ERROR, SUBSCRIBE_ROLE_ID, SUBSCRIBE_SUCCESS
} from 'src/redux/actions';

export const initialState = {
  userId: '',
  email: '',
  password: '',
  logged: false,
  regeisterd: false,
  token: null || localStorage.getItem('token'),
  errorMessage: '',
  first_name: '',
  last_name: '',
  adress: '',
  zip_code: '',
  latitude: '',
  longitude: '',
  city: '',
  company_name: '',
  shop_name: '',
  registration_number: '',
  role_id: 4,
  activity_id: '',
  messageErrorLogin: '',
  messageErrorsubscribe: '',
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_AUTH_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };

    case LOGIN_SUCCESS:
      return {
        // we duplicate the state
        ...state,
        // we change state information
        logged: action.data.logged,
        token: action.data.userToken,
        first_name: action.data.user[0].first_name,
        last_name: action.data.user[0].last_name,
        userId: action.data.user[0].id,
        adress: action.data.user[0].adress,
        zip_code: action.data.user[0].zip_code,
        city: action.data.user[0].city,
        role_id: action.data.user[0].role_id,
      };

    case LOGIN_ERROR:
      return {
        ...state,
        // on copie les données de l'action dans le reducer
        messageErrorLogin: action.payload.message,
        email: '',
        password: '',
      };
    case LOGOUT:
      //   localStorage.removeItem('token')
      localStorage.clear();
      return {
        ...state,
        userId: '',
        logged: false,
        token: null,
        // 2eme changement
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        adress: '',
        zip_code: '',
        city: '',
      };
      // case SUBSCRIBE_ROLE_ID:
    case SUBSCRIBE_ROLE_ID:
      if (action.checked === true) {
        return {
          ...state,
          role_id: 3,
        };
      }
      if (action.checked === false) {
        return {
          ...state,
          role_id: 4,
        };
      }
    case GET_SELECT_FIELD:
      if (action.value === 'boulangerie') {
        return {
          ...state,
          activity_id: 1,
        };
      }
      if (action.value === 'boucherie') {
        return {
          ...state,
          activity_id: 2,
        };
      }
      if (action.value === 'fleuriste') {
        return {
          ...state,
          activity_id: 3,
        };
      }
      if (action.value === 'fromagerie') {
        return {
          ...state,
          activity_id: 4,
        };
      }
      if (action.value === 'charcuterie') {
        return {
          ...state,
          activity_id: 5,
        };
      }
      if (action.value === 'garagiste') {
        return {
          ...state,
          activity_id: 6,
        };
      }
      if (action.value === 'primeur') {
        return {
          ...state,
          activity_id: 7,
        };
      }
      if (action.value === 'coiffeur') {
        return {
          ...state,
          activity_id: 8,
        };
      }
      if (action.value === 'papeterie') {
        return {
          ...state,
          activity_id: 9,
        };
      }
    case SUBSCRIBE_SUCCESS:
      return {
        ...state,
        registered: action.data.registered,
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        adress: '',
        zip_code: '',
        city: '',
        company_name: '',
        shop_name: '',
        registration_number: '',
        role_id: 4,
      };
    case SUBSCRIBE_ERROR:
      return {
        ...state,
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        adress: '',
        zip_code: '',
        city: '',
        company_name: '',
        shop_name: '',
        registration_number: '',
        role_id: 4,
        messageErrorsubscribe: 'Une erreur inatendu est survenu, veuillez réessayer',
      };
    default:
      return { ...state };
  }
};
export default authReducer;
