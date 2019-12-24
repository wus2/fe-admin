import { combineReducers } from 'redux';
import CurrentAccount from './currentAccount/reducer';
import UserList from './listUser/reducer';
export default combineReducers({
    CurrentAccount,
    UserList
});
