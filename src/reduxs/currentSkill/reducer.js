import ActionTypes from './actionTypes';

const INIT_STATE = {
  id: undefined,
  tag: undefined,
  desc: undefined,
  image: undefined
};

const userReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_CURRENT_SKILL:
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
};

export default userReducer;
