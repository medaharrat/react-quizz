const redux = require('redux');
// 1. Create a basic Reducer
const rootReducer = ( state = 0, action ) => { 
    switch( action.type ){
        case 'INCREMENT':
            return state++;
        case 'DECREMENT':
            return state--;
        default:
            return state
    }
};
// 2. create a store
const store = redux.createStore( rootReducer );

console.log("Initial State => " + store.getState());
store.dispatch( { type: 'INCREMENT' } );
console.log("Current State After Dispatch => " + store.getState());