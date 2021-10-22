import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import UsersReducer from './users_reducer';

const entitiesReducer = combineReducers({
  session: SessionReducer,
  users: UsersReducer,
})

export default entitiesReducer;