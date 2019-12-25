import Types from './actionTypes';

const INIT_STATE = {
  dayRevenue: undefined,
  weekRevenue: undefined,
  monthRevenue: undefined,
  yearRevenue: undefined,
  topDayRevenue: undefined,
  topWeekRevenue: undefined,
  topMonthRevenue: undefined,
  topYearRevenue: undefined,

};

const userReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case Types.GET_DAY_REVENUE:
      return { ...state, dayRevenue: action.payload };
    case Types.GET_WEEK_REVENUE:
      return { ...state, weekRevenue: action.payload };
    case Types.GET_MONTH_REVENUE:
      return { ...state, monthRevenue: action.payload };
    case Types.GET_YEAR_REVENUE:
      return { ...state, yearRevenue: action.payload };
    case Types.GET_TOP_DAY_TUTOR:
      return { ...state, topDayRevenue: action.payload };
    case Types.GET_TOP_WEEK_TUTOR:
      return { ...state, topWeekRevenue: action.payload };
    case Types.GET_TOP_MONTH_TUTOR:
      return { ...state, topMonthRevenue: action.payload };
    case Types.GET_TOP_YEAR_TUTOR:
      return { ...state, topYearRevenue: action.payload };
    default:
      return { ...state };
  }
};

export default userReducer;
