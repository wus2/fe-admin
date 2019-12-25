import ActionTypes from './actionTypes';
import * as HttpClient from '../../core/services/HttpClient';

const GetSkillList = () => async dispatch => {

  const url = `skills/page/1/limit/10`;

  const res = await HttpClient.sendGet(url);

  const { data } = res;

  dispatch({ type: ActionTypes.GET_SKILL_LIST, payload: data });
}

const UpdateSkillList = (skill) => async dispatch => {

  const url = `/updateskill`;
  const updatedSkill = {
    skillID: skill.id,
    skill: skill.tag,
    desc: skill.desc,
  }
  dispatch({ type: ActionTypes.UPDATE_SKILL_LIST, payload: skill });
  await HttpClient.sendPut(url, updatedSkill);
}

const AddNewSkill = skill => async dispatch => {
  const url = `/addskill`;
  const newSkill = {
    skill: skill.tag,
    desc: skill.desc,
    image: null
  }

  dispatch({ type: ActionTypes.ADD_NEW_SKILL, payload: skill })
  await HttpClient.sendPost(url, newSkill);
}

export default {
  getList: GetSkillList,
  updateList: UpdateSkillList,
  addNewSkill: AddNewSkill,
};
