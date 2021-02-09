import {
  GET_ALL_USERS_SUCCESS, GET_USER_DETAILS_ERROR, GET_USER_DETAILS_SUCCESS, HANDLE_CHANGE_PROFIL_CONTENT_SUCCESS
} from 'src/redux/actions';

const initialState = {
  user: [],
  users: [],
};
// console.log(initialState);
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        users: action.users,
      };
    case GET_USER_DETAILS_SUCCESS:
      return {
        ...state,
        user: action.user,
      };
    case GET_USER_DETAILS_ERROR:
      return {
        ...state,
      };
    case HANDLE_CHANGE_PROFIL_CONTENT_SUCCESS:
      return {
        ...state,
        user: action.user,
      };
    default:
      return { ...state };
  }
};

export default userReducer;
