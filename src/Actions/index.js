import history from '../history';

var questions = [
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

export const RECEIVE_QUESTIONS = 'GET_QUESTIONS';                      
export const ADD_QUESTION = 'ADD_QUESTION';
export const DELETE_QUESTION = 'DELETE_QUESTION';

export const getQuestions = () => {                                   
  return (dispatch) => {
        dispatch({type: RECEIVE_QUESTIONS, questions: questions})    
    };
};

export const addQuestion = ({ question }) => {                                                      
    return (dispatch) => {
        //questions.append(question); not working, instead, x6 empty elements are added
        dispatch({type: ADD_QUESTION, payload: {
            id: question.id, 
            question: question.question,
            possible_answers: question.possible_answers, 
            right_answer: question.right_answer
        }})  
        history.push("/questions");   
    };
};

export const deleteQuestion = ({ question_id }) => {                                                      
    return (dispatch) => {
        questions = questions.filter( 
            function(value, index, arr) 
            { 
                return index === question_id
            }
        );
        dispatch({type: DELETE_QUESTION, payload: {question_id}})  
        history.push("/questions");   
    };
  };