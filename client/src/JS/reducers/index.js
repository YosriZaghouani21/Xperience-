import {combineReducers} from 'redux';
import userReducer from './userReducer';
import {experiencesReducers} from './experienceReducers';
import {reclamationReducer} from './reclamationReducer';

export default combineReducers({
  userReducer,
  experiencesReducers,
  reclamationReducer,
});
