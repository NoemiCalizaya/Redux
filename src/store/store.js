
import {createStore, combineReducers} from "redux";
import { counterReducer } from "../reducers/counterReducer";

const reducers = combineReducers ({
    counter: counterReducer
});

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;

