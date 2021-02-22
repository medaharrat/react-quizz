import { RECEIVE_QUESTIONS, ADD_QUESTION, DELETE_QUESTION } from '../Actions/types';                           

const initialState = { questions: [] }

export default function questionsReducer(state = initialState, action) {  
  switch (action.type) {
    case RECEIVE_QUESTIONS:                                               
      return action.payload;
    case ADD_QUESTION:                                               
      return action.payload;
    case DELETE_QUESTION:
      return state.filter(question => question.id !== action.payload.id);  
    default:                                                             
      return state;
  }
}