import api from "../../utils/api";

/**
 * @TODO: Define all the actions (creator) for the users state
 */
const ActionType = {
  RECEIVE_USERS: "RECEIVE_USERS",
};

function receiveUsersActionCreator(users) {
  return {
    type: ActionType.RECEIVE_USERS,
    payload: { users },
  };
}

function asyncRegisterUser({ id, name, password }) {
  return async (dispatch) => {
    try {
      await api.register({ id, name, password });
    } catch (error) {
      alert(error.message);
    }
  };
}

export { ActionType, receiveUsersActionCreator, asyncRegisterUser };
