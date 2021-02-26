import { combineReducers } from 'redux';
import questions from './questionsReducer';
import user from './userReducer';

export default combineReducers({
  questions: questions,
  user: user
});