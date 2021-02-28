import { RECEIVE_QUESTIONS, ADD_QUESTION, DELETE_QUESTION } from '../Actions/types';                           

const initialState = {
  questions: [
    {
        id: 1,
        question: "Test Question 1?",
        possible_answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        right_answer: "Answer 1"
    },
    {
        id: 2,
        question: "Test Question 2?",
        possible_answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        right_answer: "Answer 2"
    },
    {
        id: 3,
        question: "Test Question 3?",
        possible_answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        right_answer: "Answer 3"
    },
  ] 
}

export default function questionsReducer(state = initialState, action) { 
  switch (action.type) {
    case RECEIVE_QUESTIONS:                                               
      return state.questions;
    case ADD_QUESTION:  
      return [
        ...state,
        action.payload
      ]
    case DELETE_QUESTION:
      return state.filter(question => question.id !== action.payload);
    default: 
      return state;
  }
}