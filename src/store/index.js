// src/index.js
import { createStore } from "../js/libs/redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/index.js';
 
let store = createStore(rootReducer, composeWithDevTools());

export default store; 