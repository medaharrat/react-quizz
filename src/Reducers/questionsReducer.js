import { RECEIVE_QUESTIONS, ADD_QUESTION, DELETE_QUESTION } from '../Actions/types';                           

const initialState = { 
  questions: [
    {
        id: 1,
        question: "How old are you?",
        possible_answers: ["🧐 13", "😐 25", "🙄 31", "🤔 50"],
        right_answer: "25"
    },
    {
        id: 2,
        question: "Where do you live?",
        possible_answers: ["U.S", "Canada", "France"],
        right_answer: "Canada"
    },
    {
        id: 3,
        question: "What is your highest degree?",
        possible_answers: ["Bachelor", "Masters", "PhD"],
        right_answer: "PhD"
    },
    {
        id: 4,
        question: "What is your name?",
        possible_answers: ["Med", "Cali", "Moha"],
        right_answer: "Med"
    },
    {
        id: 5,
        question: "What is your mothers mainden name?",
        possible_answers: ["Fati", "Mari", "Selma"],
        right_answer: "Mari"
    },
    {
        id: 6,
        question: "What is your highest achievement?",
        possible_answers: ["1", "2", "3"],
        right_answer: "2"
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
      return [...state].filter(question => [...state].id !== action.question_id)
    default: 
      return state;
  }
}