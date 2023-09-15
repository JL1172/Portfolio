import { FETCHING_DATA, PUT_DATA_IN_STATE, ROOT_ABOUT_VISIBLE } from "../actions/aboutMeAction"

const initialState = {
    profile_pic : "",
    profile_information : [],
    loading : false,
    rootVisible : false,
}

export const aboutMeReducer = (state = initialState, action) => {
    switch(action.type) {
        case(FETCHING_DATA) : 
            return({...state, loading : action.payload}); 
        case(PUT_DATA_IN_STATE) :
            return({...state, profile_information : action.payload, profile_pic : action.payload.avatar_url}); 
        case(ROOT_ABOUT_VISIBLE) : 
            return({...state, rootVisible : !state.rootVisible}); 
        default :
            return(state); 
    }
}