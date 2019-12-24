import ActionTypes from './actionTypes';

const INIT_STATE = {
  users: undefined,
};

const userReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionTypes.GET_USER_LIST:
      return { ...state, users: action.payload };
    case ActionTypes.UPDATE_USER_LIST:
      state.users.forEach(element => {
        if (element.id === action.payload.id) {
          element.account_status = action.payload.account_status;
        }
      });
      return { ...state };
    default:
      return { ...state };
  }
};

export default userReducer;
