import { GET_USERNAME, SET_USERNAME } from '../Actions/types';

const initialState = {
    username: ""
}

export default function userReducer(state = initialState, action) {
    switch(action.type) {
        case GET_USERNAME:
            return state.username;
        case SET_USERNAME:
            return {
                ...state,
                username: action.payload
            };
        default:
            return state;
    }
}