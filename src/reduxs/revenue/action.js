import ActionTypes from './actionTypes';
import * as HttpClient from '../../core/services/HttpClient';
import Moment from 'core/utils/TimeUtil';
import palette from 'theme/palette';

const getRevenueUrl = `/revenuesystem?`;

const convertDateToTimestamp = (date) => {

  date = date.split("/");
  var newDate = date[1] + "," + date[0] + "," + date[2];
  return new Date(newDate).getTime() / 1000;
}

const GetDayRevenue = () => async dispatch => {

  const date = new Date();
  const revenue = [];
  const revenuedate = [];
  for (let i = 6; i >= 0; i--) {

    const currentDate = String(date.getDate()).padStart(2, '0') + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    const timestamp = convertDateToTimestamp(currentDate);
    const end = timestamp - (86400 * i);
    const start = timestamp - (86400 * (i + 1));

    const url = getRevenueUrl + `start_time=${start}&end_time=${end}`;

    const res = await HttpClient.sendGet(url);
    const { data } = res;

    if (i === 0) dispatch({ type: ActionTypes.GET_TODAY_REVENUE, payload: data[0].money ? data[0].money : 0 });
    if (data) revenue.push(data[0].money ? data[0].money : 0);
    revenuedate.push(Moment(end).format('DD/MM/YYYY'));
  }

  const data = {
    labels: revenuedate,
    datasets: [
      {
        backgroundColor: palette.primary.main,
        data: revenue,
      },
    ]
  };
  dispatch({ type: ActionTypes.GET_DAY_REVENUE, payload: data })
}

const GetWeekRevenue = () => async dispatch => {

  const date = new Date();
  const revenue = [];
  const revenueweek = [];
  for (let i = 3; i >= 0; i--) {

    const currentDate = String(date.getDate()).padStart(2, '0') + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    const timestamp = convertDateToTimestamp(currentDate);
    const end = timestamp - (86400 * 7 * i);
    const start = timestamp - (86400 * 7 * (i + 1));

    const url = getRevenueUrl + `start_time=${start}&end_time=${end}`;

    const res = await HttpClient.sendGet(url);
    const { data } = res;
    if (data) revenue.push(data[0].money ? data[0].money : 0);
    revenueweek.push("Week " + Moment(end).format('w'));
  }

  const data = {
    labels: revenueweek,
    datasets: [
      {
        backgroundColor: palette.primary.main,
        data: revenue,
      },
    ]
  };
  dispatch({ type: ActionTypes.GET_WEEK_REVENUE, payload: data })
}

const GetMonthRevenue = () => async dispatch => {

  const date = new Date();
  const revenue = [];
  const revenuemonth = [];
  for (let i = 11; i >= 0; i--) {

    const currentDate = String(date.getDate()).padStart(2, '0') + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    const timestamp = convertDateToTimestamp(currentDate);
    const end = timestamp - (86400 * 7 * 4 * i);
    const start = timestamp - (86400 * 7 * 4 * (i + 1));

    const url = getRevenueUrl + `start_time=${start}&end_time=${end}`;

    const res = await HttpClient.sendGet(url);
    const { data } = res;
    if (data) revenue.push(data[0].money ? data[0].money : 0);
    revenuemonth.push("Month " + (12 - i));
  }

  const data = {
    labels: revenuemonth,
    datasets: [
      {
        backgroundColor: palette.primary.main,
        data: revenue,
      },
    ]
  };
  dispatch({ type: ActionTypes.GET_MONTH_REVENUE, payload: data })
}


/**
 * @action to get top tutor
 */

const getTopTutorRevenueUrl = `/revenuetoptutor?`;

const GetTopDayTutorRevenue = () => async dispatch => {

  const date = new Date();
  const currentDate = String(date.getDate()).padStart(2, '0') + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
  const timestamp = convertDateToTimestamp(currentDate);
  const end = timestamp;
  const start = timestamp - 86400;

  const url = getTopTutorRevenueUrl + `start_time=${start}&end_time=${end}`;

  const res = await HttpClient.sendGet(url);
  const { data } = res;
  const revenue = [];
  const revenueUser = [];
  data.forEach(element => {
    if (element.money !== undefined && element.name !== undefined && element.money !== null && element.name !== null) {
      revenue.push(element.money);
      revenueUser.push(element.name);
    }
  });

  const payload = {
    labels: revenueUser,
    datasets: [
      {
        backgroundColor: palette.primary.main,
        data: revenue,
      },
    ]
  };
  dispatch({ type: ActionTypes.GET_TOP_DAY_TUTOR, payload })
}

const GetTopWeekTutorRevenue = () => async dispatch => {

  const date = new Date();
  const currentDate = String(date.getDate()).padStart(2, '0') + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
  const timestamp = convertDateToTimestamp(currentDate);
  console.log(timestamp)
  const end = timestamp;
  const start = timestamp - 86400 * 7;

  const url = getTopTutorRevenueUrl + `start_time=${start}&end_time=${end}`;

  const res = await HttpClient.sendGet(url);
  const { data } = res;
  const revenue = [];
  const revenueUser = [];
  data.forEach(element => {
    if (element.money !== undefined && element.name !== undefined && element.money !== null && element.name !== null) {
      revenue.push(element.money);
      revenueUser.push(element.name);
    }
  });

  const payload = {
    labels: revenueUser,
    datasets: [
      {
        backgroundColor: palette.primary.main,
        data: revenue,
      },
    ]
  };
  dispatch({ type: ActionTypes.GET_TOP_WEEK_TUTOR, payload })
}

const GetTopMonthTutorRevenue = () => async dispatch => {

  const date = new Date();
  const currentDate = String(date.getDate()).padStart(2, '0') + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
  const leadDate = '01/' + (date.getMonth() + 1) + '/' + date.getFullYear();
  const end = convertDateToTimestamp(currentDate);
  const start = convertDateToTimestamp(leadDate);

  const url = getTopTutorRevenueUrl + `start_time=${start}&end_time=${end}`;

  const res = await HttpClient.sendGet(url);
  const { data } = res;
  const revenue = [];
  const revenueUser = [];
  data.forEach(element => {
    if (element.money !== undefined && element.name !== undefined && element.money !== null && element.name !== null) {
      revenue.push(element.money);
      revenueUser.push(element.name);
    }
  });

  const payload = {
    labels: revenueUser,
    datasets: [
      {
        backgroundColor: palette.primary.main,
        data: revenue,
      },
    ]
  };
  dispatch({ type: ActionTypes.GET_TOP_MONTH_TUTOR, payload })
}


export default {
  getDayRevenue: GetDayRevenue,
  getWeekRevenue: GetWeekRevenue,
  getMonthRevenue: GetMonthRevenue,
  getTopDayTutorRevenue: GetTopDayTutorRevenue,
  getTopWeekTutorRevenue: GetTopWeekTutorRevenue,
  getTopMonthTutorRevenue: GetTopMonthTutorRevenue,
};
