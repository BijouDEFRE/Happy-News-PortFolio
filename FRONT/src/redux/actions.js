export const CHANGE_AUTH_FIELD = 'CHANGE_AUTH_FIELD';
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
// export const LOGIN_ERROR  = 'LOGIN_ERROR'
export const LOGOUT = 'LOGOUT';
export const SUBSCRIBE = 'SUBSCRIBE';
export const SUBSCRIBE_ROLE_ID = 'SUBSCRIBE_ROLE_ID';
export const GET_SELECT_FIELD = 'GET_SELECT_FIELD';
export const SUBSCRIBE_SUCCESS = 'GET_SELECT_FIELD';
// export const SUBSCRIBE_ERROR= 'SUBSCRIBE_ERROR'
export const ADD_NEWS_SUCCESS = 'ADD_NEWS_SUCCESS';
export const ADD_NEWS = 'ADD_NEWS';
export const CHANGE_ADDNEWS_FIELD = 'CHANGE_ADDNEWS_FIELD';
export const GET_ALL_USERS = 'GET_ALL_USERS';
export const GET_ALL_USERS_SUCCESS = 'GET_ALL_USERS_SUCCESS';

  export const getAllUsers = () => ({
    type: GET_ALL_USERS,
  });

  export const getAllUsersSuccess = (users) => ({
    type: GET_ALL_USERS_SUCCESS,
    users,
  });
  // function to change input field
  export const changeAuthField = (value, name) => ({
      type: CHANGE_AUTH_FIELD,
      name,
      value,
  });

  export const handleLogin = () => {
    return {
        type: LOGIN
    };
  }

  export const handleLogout = () => {
    return {
        type: LOGOUT
    };
  }

// Function to change fields on addNewsForm
export const changeAddNewsField = (name, value) => ({
  type: CHANGE_ADDNEWS_FIELD,
  name,
  value,
});

// Function to submit the addNewsForm
export const handleAddNews = () => ({
  type: ADD_NEWS,
});

export const addNewsSuccess = () => ({
  type: ADD_NEWS_SUCCESS,
});

// Action Creator Paco Show modal
// export const showModalAction = () => ({
//   type: 'SHOW_MODAL',
//   modalType: 'DELETE_POST',
//   modalProps: {
//     postId: 42
//   }
// })
// >>>>>>> origin/front/getDataFromNewsForm

// ACTION CREATOR YANN
// je crée une action pour le changement de la valeur de l'input de recherche
// de la page News
export const CHANGE_SEARCH_VALUE = 'CHANGE_SEARCH_VALUE';
export const GET_CITY_FROM_API = 'GET_CITY_FROM_API';
export const ACTIVITY_SELECTED = 'ACTIVITY_SELECTED';
export const GET_CITY_FROM_API_SUCCESS = 'GET_CITY_FROM_API_SUCCESS';

// export const RESET_ACTIVITY_SELECTED = 'RESET_ACTIVITY_SELECTED';
export const GET_NEWS = 'GET_NEWS';
export const loadNews = () => ({
  type: GET_NEWS,
});

export const changeSearchValueAction = (value, name) => ({
  type: CHANGE_SEARCH_VALUE,
  value,
  name,
});

export const handleSearchSubmit = (cityNameEnteredByTheUser) => ({
  type: GET_CITY_FROM_API,
  cityNameEnteredByTheUser,
});

export const handleSelectedActivity = (value) => ({
  type: ACTIVITY_SELECTED,
  value,
});

export const getCityFromApiSuccess = (cityCoordinates) => ({
  type: GET_CITY_FROM_API_SUCCESS,
  cityCoordinates,
});

/* export const resetActivitySelected = (value) => ({
  type: RESET_ACTIVITY_SELECTED,
  value,
}); */

// FIN ACTION CREATOR DE YANN

// export for gettting user in retailler's profil information
export const GET_USER_DETAILS = 'GET_USER_DETAILS';
export const GET_USER_DETAILS_SUCCESS = 'GET_USER_DETAILS_SUCCESS';
export const GET_USER_DETAILS_ERROR = 'GET_USER_DETAILS_ERROR';

/* export const changeAuthField = (value, name) => ({
  type: CHANGE_AUTH_FIELD,
  name,
  value,
}); */
/* export const handleLogin = () => ({
  type: LOGIN,
}); */
export const handleLoginSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  data,
});
/* export const handleLogout = () => ({
  type: LOGOUT,
}); */
//   export const handleLoginError = () => {
//     return {
//         type: 'LOGIN_ERROR'
//     };
//   }

export const subscriptionSubmitForm = () => {
  console.log('je suis dans submit form de l\'action creation');
  return {
    type: SUBSCRIBE,
  };
};
export const HandleRoleIdChecked = (checked) => {
  console.log('je suis dans mon action createur et checked vaut', checked);
  return {
    type: 'SUBSCRIBE_ROLE_ID',
    checked,
  };
};
export const getSelectField = (value) => ({
  type: 'GET_SELECT_FIELD',
  value,
});
export const handleSubscribeSuccess = (data) => ({
  type: SUBSCRIBE_SUCCESS,
  data,
});
//   export const handleSubscribeError = () => {
//     return {
//         type: 'SUBSCRIBE_ERROR'
//     };
//   }
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

// delete news
export const DELETE_NEWS = 'DELETE_NEWS';
export const DELETE_NEWS_SUCCESS = 'DELETE_NEWS_SUCCESS';
export const DELETE_NEWS_ERROR = 'DELETE_NEWS_ERROR';

export const deleteNews = (value) => ({
  type: DELETE_NEWS,
  value,
});
export const deleteNewsSuccess = (message) => {
  console.log('je suis dans ma reponse deleteNewsSuccess');
  return {
    type: DELETE_NEWS_SUCCESS,
    message,
  };
};
export const deleteNewsError = () => ({
  type: DELETE_NEWS_ERROR,
});

// form is news a true
export const SET_ISNEWS_ON_ARTICLE = 'SET_ISNEWS_ON_ARTICLE';
export const handleIsNewsArticle = (checked) => {
  console.log('je suis is news dans action creator');
  return {
    type: SET_ISNEWS_ON_ARTICLE,
    checked,
  };
};

// Update content USER
export const CHANGE_CONTENT_USER_FIELD = 'CHANGE_CONTENT_USER_FIELD';
export const HANDLE_CHANGE_PROFIL_CONTENT = 'HANDLE_CHANGE_PROFIL_CONTENT';
export const HANDLE_CHANGE_PROFIL_CONTENT_SUCCESS = 'HANDLE_CHANGE_PROFIL_CONTENT_SUCCESS';
export const HANDLE_CHANGE_PROFIL_CONTENT_ERROR = 'HANDLE_CHANGE_PROFIL_CONTENT_ERROR';

export const changeContentUserField = (value) => {
  console.log('je suis dans changeContentUserField de action creator ', value);
  return {
    type: CHANGE_CONTENT_USER_FIELD,
    value,
  };
};

export const handleChangeProfilContent = () => ({
  type: HANDLE_CHANGE_PROFIL_CONTENT,
});
export const handleChangeProfilContentSuccess = () => ({
  type: HANDLE_CHANGE_PROFIL_CONTENT_SUCCESS,
});
export const handleChangeProfilContentError = () => ({
  type: HANDLE_CHANGE_PROFIL_CONTENT_ERROR,
});
