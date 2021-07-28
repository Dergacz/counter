import {combineReducers, createStore, Store} from "redux";
import {counterReducer} from "./counterReducer";
import {loadState, saveState} from "../utils/localStorage";


let RootReducer = combineReducers({
    counter: counterReducer,
});

export const store: Store = createStore(RootReducer,  loadState())

export type AppStateType = ReturnType<typeof RootReducer>

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    })
})