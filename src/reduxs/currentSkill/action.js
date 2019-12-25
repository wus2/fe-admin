import ActionTypes from './actionTypes';
import * as HttpClient from '../../core/services/HttpClient';

const UpdateCurrentSkill = (skill) => async dispatch => {
  dispatch({ type: ActionTypes.UPDATE_CURRENT_SKILL, payload: skill });
  const url = `/admin/updateskill`;
  const updatedSkill = {
    skillID: skill.id,
    skill: skill.tag,
    desc: skill.desc,
  }
  await HttpClient.sendPut(url, updatedSkill);
}

export default {
  UpdateCurrentSkill,
};
