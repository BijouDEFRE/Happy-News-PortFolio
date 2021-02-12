// Type login
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT = 'LOGOUT';

// Type subscribe
export const SUBSCRIBE = 'SUBSCRIBE';
export const SUBSCRIBE_SUCCESS = 'GET_SELECT_FIELD';
export const SUBSCRIBE_ERROR = 'SUBSCRIBE_ERROR';
// type users details
export const GET_ALL_USERS = 'GET_ALL_USERS';
export const GET_ALL_USERS_SUCCESS = 'GET_ALL_USERS_SUCCESS';
// Type user detail
export const GET_USER_DETAILS = 'GET_USER_DETAILS';
export const GET_USER_DETAILS_SUCCESS = 'GET_USER_DETAILS_SUCCESS';
export const GET_USER_DETAILS_ERROR = 'GET_USER_DETAILS_ERROR';

// Type delete a news
export const DELETE_NEWS = 'DELETE_NEWS';
export const DELETE_NEWS_SUCCESS = 'DELETE_NEWS_SUCCESS';
export const DELETE_NEWS_ERROR = 'DELETE_NEWS_ERROR';

// Type catch input value auth-subscribe-addnews
export const CHANGE_AUTH_FIELD = 'CHANGE_AUTH_FIELD';
export const CHANGE_ADDNEWS_FIELD = 'CHANGE_ADDNEWS_FIELD';

// type to get activity id and roleid in subscribe
export const SUBSCRIBE_ROLE_ID = 'SUBSCRIBE_ROLE_ID';
export const GET_SELECT_FIELD = 'GET_SELECT_FIELD';

// type add news
export const ADD_NEWS = 'ADD_NEWS';
export const ADD_NEWS_SUCCESS = 'ADD_NEWS_SUCCESS';
// Type get news
export const GET_NEWS = 'GET_NEWS';

// Type get cities
export const GET_CITY_FROM_API = 'GET_CITY_FROM_API';
export const GET_CITY_FROM_API_SUCCESS = 'GET_CITY_FROM_API_SUCCESS';

// type to get isnews value on addnews form
export const SET_ISNEWS_ON_ARTICLE = 'SET_ISNEWS_ON_ARTICLE';

export const CHANGE_SEARCH_VALUE = 'CHANGE_SEARCH_VALUE';
export const ACTIVITY_SELECTED = 'ACTIVITY_SELECTED';
export const RESET_ACTIVITY_SELECTED = 'RESET_ACTIVITY_SELECTED';

// function to Loginn-Logout
export const handleLogin = () => ({
  type: LOGIN,
});
export const handleLoginSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  data,
});
export const handleLoginError = (message) => ({
  type: 'LOGIN_ERROR',
  payload: message,
});
export const handleLogout = () => ({
  type: LOGOUT,
});
// function to subscribe
export const subscriptionSubmitForm = () => ({
  type: SUBSCRIBE,
});
export const handleSubscribeSuccess = (data) => ({
  type: SUBSCRIBE_SUCCESS,
  data,
});
export const handleSubscribeError = () => ({
  type: 'SUBSCRIBE_ERROR',
});
// function to get all users
export const getAllUsers = () => ({
  type: GET_ALL_USERS,
});
export const getAllUsersSuccess = (users) => ({
  type: GET_ALL_USERS_SUCCESS,
  users,
});
// fucntion to get user detail
export const getUserDetails = (id) => ({
  type: GET_USER_DETAILS,
  id,
});
export const getUserDetailsSuccess = (user) => ({
  type: GET_USER_DETAILS_SUCCESS,
  user,
});
export const getUserDetailsError = () => ({
  type: GET_USER_DETAILS_ERROR,
});
// fucntion to delete news
export const deleteNews = (value) => ({
  type: DELETE_NEWS,
  value,
});
export const deleteNewsSuccess = (message) => ({
  type: DELETE_NEWS_SUCCESS,
  message,
});
export const deleteNewsError = () => ({
  type: DELETE_NEWS_ERROR,
});

// Function to catch field's value on login-susbcribe
export const changeAuthField = (value, name) => ({
  type: CHANGE_AUTH_FIELD,
  name,
  value,
});
// Function to catch field's value on addNewsForm
export const changeAddNewsField = (name, value) => ({
  type: CHANGE_ADDNEWS_FIELD,
  name,
  value,
});
// function to get activity id and roleid in subscribe
export const HandleRoleIdChecked = (checked) => ({
  type: 'SUBSCRIBE_ROLE_ID',
  checked,
});
export const getSelectField = (value) => ({
  type: 'GET_SELECT_FIELD',
  value,
});
// Function to submit the addNewsForm
export const handleAddNews = () => ({
  type: ADD_NEWS,
});
export const addNewsSuccess = () => ({
  type: ADD_NEWS_SUCCESS,
});
// function to lad news on page ( useEffect )
export const loadNews = () => ({
  type: GET_NEWS,
});
// function to get cities
export const handleSearchSubmit = (cityNameEnteredByTheUser) => ({
  type: GET_CITY_FROM_API,
  cityNameEnteredByTheUser,
});
export const getCityFromApiSuccess = (cityCoordinates) => ({
  type: GET_CITY_FROM_API_SUCCESS,
  cityCoordinates,
});
// form is news true
export const handleIsNewsArticle = (checked) => ({
  type: SET_ISNEWS_ON_ARTICLE,
  checked,
});
export const changeSearchValueAction = (value, name) => ({
  type: CHANGE_SEARCH_VALUE,
  value,
  name,
});

export const handleSelectedActivity = (value) => ({
  type: ACTIVITY_SELECTED,
  value,
});

export const resetActivitySelected = () => ({
  type: RESET_ACTIVITY_SELECTED,
});
