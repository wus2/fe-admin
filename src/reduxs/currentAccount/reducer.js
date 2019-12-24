import ActionTypes from './actionTypes';

const INIT_STATE = {
  id: undefined,
  username: undefined,
  password: undefined,
  email: undefined,
  address: undefined,
  district: undefined,
  city: undefined,
  name: undefined,
  phone: undefined,
  dob: undefined,
  card_id: undefined,
  gender: undefined,
  role: undefined,
  avatar: undefined,
  skill_tags: undefined,
  price_per_hour: undefined,
  num_stars: undefined,
  num_rate: undefined,
  intro_desc: undefined,
  degree: undefined,
  account_status: undefined
};

const userReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_CURRENT_ACCOUNT:
      return { ...state, ...action.payload };
    case ActionTypes.TOGGLE_STATUS:
      return { ...state, account_status: action.payload }
    default:
      return { ...state };
  }
};

export default userReducer;
