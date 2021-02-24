import { SET_ANSWER } from '../Actions/types';                           

const initialState = { answers: [] }

export default function answersReducer(state = initialState, action) {  
  switch (action.type) {
    case SET_ANSWER:                                               
      return action.payload;
    default:                                                             
      return state;
  }
}