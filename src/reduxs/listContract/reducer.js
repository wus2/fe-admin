import ActionTypes from './actionTypes';

const INIT_STATE = {
  contracts: undefined,
};

const userReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionTypes.GET_CONTRACT_LIST:
      return { ...state, contracts: action.payload };
    case ActionTypes.UPDATE_CONTRACT_LIST:
      return { ...state };
    default:
      return { ...state };
  }
};

export default userReducer;
