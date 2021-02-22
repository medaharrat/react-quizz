import { RECEIVE_QUESTIONS, ADD_QUESTION, DELETE_QUESTION } from './types';                           

const questions = [
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
        possible_answers: ["1", "2", "3"],
        right_answer: "2"
    },
    {
        id: 5,
        question: "What is your mothers mainden name?",
        possible_answers: ["1", "2", "3"],
        right_answer: "2"
    },
    {
        id: 6,
        question: "What is your highest achievement?",
        possible_answers: ["1", "2", "3"],
        right_answer: "2"
    },
]

export const getQuestions = () => (dispatch) => {
    dispatch({type: RECEIVE_QUESTIONS, payload: questions})    
};

export const addQuestion = (question) => (dispatch) => {
    console.log('Action called!');
    questions.push(question);
    dispatch({type: ADD_QUESTION, payload: question})  
};

export const deleteQuestion = ({ question_id }) => {                                                      
    return (dispatch) => {
        dispatch({type: DELETE_QUESTION, payload: {question_id}})  
    };
  };