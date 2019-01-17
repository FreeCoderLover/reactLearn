// src/index.js
import { combineReducers } from "../../js/libs/redux";
import productsReducer from './cart-reducer.js';
import cartReducer from './products-reducer.js';

const allReducers = {
    products: productsReducer,
    shoppingCart: cartReducer
}

const rootReducer = combineReducers(allReducers);

export default rootReducer;