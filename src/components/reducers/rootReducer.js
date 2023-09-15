import { combineReducers } from "redux";
import { headReducer } from "./headReducer";

export const rootReducer = combineReducers({
    headerState : headReducer,
})