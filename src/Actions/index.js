import { 
    RECEIVE_QUESTIONS, ADD_QUESTION, DELETE_QUESTION, 
    SET_USERNAME, GET_USERNAME 
} from './types';                           

/* Questions Actions */
export const getQuestions = () => (dispatch) => {
    dispatch({type: RECEIVE_QUESTIONS})    
};

export const addQuestion = (question) => (dispatch) => {
    dispatch({type: ADD_QUESTION, payload: question}) 
};

export const deleteQuestion = (questionId) => (dispatch) => {
    dispatch({type: DELETE_QUESTION, payload: questionId})  
};

/* User Actions */
export const getUsername = () => (dispatch) => {
    dispatch({type: GET_USERNAME})  
};

export const setUsername = (username) => (dispatch) => {
    dispatch({type: SET_USERNAME, payload: GET_USERNAME})  
};