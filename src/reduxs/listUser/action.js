import ActionTypes from './actionTypes';
import * as HttpClient from '../../core/services/HttpClient';

const GetUserList = () => async dispatch => {

  const url = `getusers/page/1/limit/10`;

  const res = await HttpClient.sendGet(url);

  const { data } = res;

  dispatch({ type: ActionTypes.GET_USER_LIST, payload: data });
}

export default {
  GetUserList
};
