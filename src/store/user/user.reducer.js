export const USER_ACTION_TYPE = {
  SET_CURRENT_USER: "SET_CURRENT_USER"
};

const INITAL_STATE = {
  currentUser: null
};

export const userReducer = (state = INITAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPE.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload
      };
    default:
      return state;
  }
};
