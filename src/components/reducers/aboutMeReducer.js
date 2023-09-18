import { FETCHING_DATA, PUT_DATA_IN_STATE, ROOT_ABOUT_VISIBLE, ROOT_STACK_VISIBLE, TOGGLE_ACTIVE } from "../actions/aboutMeAction"


const initialState = {
    profile_pic : "",
    profile_information : [],
    loading : false,
    rootVisible : false,
    stackRootVisible : false,
    cvRootVisible : false,
    contactRootVisible : false,
    projectsRootVisible : false,
    frontEndVisible : false,
    backEndVisible : false,
}

export const aboutMeReducer = (state = initialState, action) => {
    switch(action.type) {
        case(FETCHING_DATA) : 
            return({...state, loading : action.payload}); 
        case(PUT_DATA_IN_STATE) :
            return({...state, profile_information : action.payload, profile_pic : action.payload.avatar_url}); 
        case(ROOT_ABOUT_VISIBLE) : 
            return({...state, rootVisible : !state.rootVisible, cvRootVisible : false,
                 projectsRootVisible : false,
                contactRootVisible : false,
                stackRootVisible : !state.stackRootVisible}); 
        case(ROOT_STACK_VISIBLE) : 
            return({...state, rootVisible : false, cvRootVisible : false, projectsRootVisible : false,
                contactRootVisible : false,
                stackRootVisible : !state.stackRootVisible})
        case(TOGGLE_ACTIVE) : 
            return({...state, frontEndVisible : action.payload, backEndVisible : !action.payload })
        default :
            return(state); 
    }
}