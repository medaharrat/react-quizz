import { RECEIVE_QUESTIONS, ADD_QUESTION, DELETE_QUESTION } from '../Actions';                           

const initialState = { questions: [] }

export default function questionsReducer(state = initialState, action) {  
  switch (action.type) {
    case RECEIVE_QUESTIONS:                                               
      return action.questions;
    case ADD_QUESTION:                                               
      return [action.payload, ...state];
    case DELETE_QUESTION:
      return state.filter(question => question.id !== action.payload.id);  
    default:                                                             
      return state;
  }
}