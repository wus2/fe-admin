import ActionTypes from './actionTypes';

const INIT_STATE = {
  skills: undefined,
};

const userReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionTypes.GET_SKILL_LIST:
      return { ...state, skills: action.payload };
    case ActionTypes.UPDATE_SKILL_LIST:
      state.skills.forEach(element => {
        if (element.id === action.payload.id) {
          element.tag = action.payload.tag;
          element.desc = action.payload.desc;
        }
      });
      return { ...state };
    default:
      return { ...state };
  }
};

export default userReducer;
