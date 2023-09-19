import { combineReducers } from "redux";
import { aboutMeReducer } from "./aboutMeReducer";

export const rootReducer = combineReducers({
    aboutMeState : aboutMeReducer,
})