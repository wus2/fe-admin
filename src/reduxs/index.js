import { combineReducers } from 'redux';
import CurrentAccount from './currentAccount/reducer';
import UserList from './listUser/reducer';
import CurrentSkill from './currentSkill/reducer';
import SkillList from './listSkill/reducer';
import ContractList from './listContract/reducer';
import Revenue from './revenue/reducer';
export default combineReducers({
    CurrentAccount,
    UserList,
    CurrentSkill,
    SkillList,
    ContractList,
    Revenue
});
