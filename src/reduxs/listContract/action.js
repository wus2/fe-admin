import ActionTypes from './actionTypes';
import * as HttpClient from '../../core/services/HttpClient';

const GetContractList = () => async dispatch => {

  const url = `listcontract/page/1/limit/10`;

  const res = await HttpClient.sendGet(url);

  const { data } = res;

  dispatch({ type: ActionTypes.GET_CONTRACT_LIST, payload: data });
}

export default {
  getList: GetContractList
};
