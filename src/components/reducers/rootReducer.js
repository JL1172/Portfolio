import { combineReducers } from "redux";
import { headReducer } from "./headReducer";
import { aboutMeReducer } from "./aboutMeReducer";

export const rootReducer = combineReducers({
    headerState : headReducer,
    aboutMeState : aboutMeReducer,
})