import { RECEIVE_ALL_USERS } from '../actions/user_actions';

const UsersReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      nextState = Object.assign({}, action.users)
      return action.users;
    default:
      return state;
  };
};

export default UsersReducer;