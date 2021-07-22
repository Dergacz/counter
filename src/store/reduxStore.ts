import {combineReducers, createStore, Store} from "redux";
import {counterReducer} from "./counterReducer";
import {loadState, saveState} from "../utils/localStoregeUtils";


let reducers = combineReducers({
    counter: counterReducer,
})

export const store: Store = createStore(reducers, loadState())

export type AppStateType = ReturnType<typeof reducers>


store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    })
    localStorage.setItem("value", JSON.stringify(store.getState().counter.value))
})