import ActionTypes from './actionTypes';

const INIT_STATE = {
  users: undefined,
};

const userReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionTypes.GET_USER_LIST:
      return { ...state, users: action.payload };
    default:
      return { ...state };
  }
};

export default userReducer;
