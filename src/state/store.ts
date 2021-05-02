import {countReducer} from "./count-reducer";
import {combineReducers, createStore, Store} from "redux";

export const rootReducer = combineReducers({
    counterPage: countReducer,

} )
let store: Store = createStore(rootReducer)
export type AllAppStateType = ReturnType<typeof rootReducer>
export  default store