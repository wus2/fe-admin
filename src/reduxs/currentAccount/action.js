import ActionTypes from './actionTypes';
import UserListActionType from 'reduxs/listUser/actionTypes';
import * as HttpClient from '../../core/services/HttpClient';

const UpdateCurrentAccount = (account) => async dispatch => {
  dispatch({ type: ActionTypes.UPDATE_CURRENT_ACCOUNT, payload: account });
}

const ToggleStatus = (id, status) => async dispatch => {

  const url = (status === 1 ? `blockuser` : `unblockuser`) + `/${id}`;

  const newStatus = status === 1 ? 2 : 1;

  dispatch({ type: ActionTypes.TOGGLE_STATUS, payload: newStatus });
  dispatch({ type: UserListActionType.UPDATE_USER_LIST, payload: { id, account_status: newStatus } });
  await HttpClient.sendPut(url);
}

export default {
  UpdateCurrentAccount,
  ToggleStatus
};
