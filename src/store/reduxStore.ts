import {combineReducers, createStore, Store} from "redux";
import {counterReducer} from "./counterReducer";
import {buttonsReducer} from "./buttonsReducer";

let reducers = combineReducers({
    counter: counterReducer,
    buttons: buttonsReducer

})
export const store: Store = createStore(reducers)