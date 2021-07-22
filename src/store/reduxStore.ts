import {combineReducers, createStore, Store} from "redux";
import {counterReducer} from "./counterReducer";


let reducers = combineReducers({
    counter: counterReducer,


})
export const store: Store = createStore(reducers)

export type AppStateType = ReturnType<typeof reducers>