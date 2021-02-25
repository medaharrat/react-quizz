import { RECEIVE_QUESTIONS, ADD_QUESTION, DELETE_QUESTION, SET_USERNAME } from './types';                           

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

/* Other Actions */
export const setUsername = (username) => (dispatch) => {
    console.log('Setting username action called!');
    dispatch({
        type: SET_USERNAME, 
        payload: username
    })  
};