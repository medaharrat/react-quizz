import { RECEIVE_QUESTIONS, ADD_QUESTION, DELETE_QUESTION, SET_ANSWER } from './types';                           

/* Questions Actions */
export const getQuestions = () => (dispatch) => {
    dispatch({type: RECEIVE_QUESTIONS})    
};

export const addQuestion = (question) => (dispatch) => {
    dispatch({type: ADD_QUESTION, payload: question}) 
};

export const deleteQuestion = ({ question_id }) => (dispatch) => {
    dispatch({type: DELETE_QUESTION, payload: question_id})  
};

/* Answers Actions */
export const setAnswer = (answer, question_id) => (dispatch) => {
    console.log('Setting answer action called!');
    dispatch({
        type: SET_ANSWER, 
        payload: {id: question_id, answer: answer}
    })  
};