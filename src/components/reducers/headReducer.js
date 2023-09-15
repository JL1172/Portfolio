import { TOGGLE_MENU } from "../actions/headerActions";


export const headReducer = (state=false,action) => {
    switch(action.type) {
        case(TOGGLE_MENU) :
            return(!state);
        default :
            return(state);
    }
}