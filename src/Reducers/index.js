import { combineReducers } from 'redux';
import questions from './questionsReducer';
import answers from './answersReducer';

export default combineReducers({
  questions: questions,
  answers: answers
});