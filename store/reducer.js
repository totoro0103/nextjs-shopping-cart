import { combineReducers } from 'redux';
import Users from '../modules/User/reducer';
import Auth from '../modules/Auth/reducer';
import Film from '../modules/Film/reducer';

export default combineReducers({
  user: Users,
  authentication: Auth,
  film: Film,
});
