import rootReducer from './Reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const middleWare = [thunk];

const store = createStore(
    rootReducer, 
    applyMiddleware(...middleWare)
);

export default store;