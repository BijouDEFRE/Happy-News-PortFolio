// initial state of the slice "activities" from our store
const initialState = {
  activitiesList: [],
};

// reducer who will manage the activities list
const activitiesReducer = (oldState = initialState, action) => {
  switch (action.type) {
    // I dispatch a new action in the case of a call to the list of activities
    case 'GET_ACTIVITIES_SUCCESS':
      return {
        ...oldState,
        activitiesList: action.activities,
      };
    default:
      return { ...oldState };
  }
};

export default activitiesReducer;
