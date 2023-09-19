import { ACTIVATE_PROJECT, DEACTIVATE_PROJECT, FETCHING_DATA, PUT_DATA_IN_STATE, ROOT_ABOUT_VISIBLE, ROOT_STACK_VISIBLE, TOGGLE_ACTIVE, TOGGLE_CONTACT_VISIBILITY, TOGGLE_CV_VISIBILITY, TOGGLE_PROJECT_VISIBILITY } from "../actions/aboutMeAction"


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

    activeProject : "",
    deactivateProject : false,
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
                stackRootVisible : false}); 
        case(ROOT_STACK_VISIBLE) : 
            return({...state, rootVisible : false, cvRootVisible : false, projectsRootVisible : false,
                contactRootVisible : false,
                stackRootVisible : !state.stackRootVisible})
        case(TOGGLE_ACTIVE) : 
            return({...state, frontEndVisible : action.payload, backEndVisible : !action.payload })
        case(TOGGLE_CONTACT_VISIBILITY) : 
            return({...state, frontEndVisible : false, backEndVisible : false,
                cvRootVisible : false, projectsRootVisible : false, contactRootVisible : !state.contactRootVisible, stackRootVisible : false, rootVisible : false})
        case(TOGGLE_CV_VISIBILITY) :
            return({...state, frontEndVisible : false, backEndVisible : false,
                cvRootVisible : !state.cvRootVisible, projectsRootVisible : false, contactRootVisible :false, stackRootVisible : false, rootVisible : false})
        case(TOGGLE_PROJECT_VISIBILITY) :
            return({...state,frontEndVisible : false, backEndVisible : false,
                cvRootVisible : false, projectsRootVisible : !state.projectsRootVisible, contactRootVisible :false, stackRootVisible : false, rootVisible : false})
        case(ACTIVATE_PROJECT) :
            return({...state, activeProject :action.payload, deactivateProject : action.payload})
        case(DEACTIVATE_PROJECT) :
            return({...state, activeProject : "", deactivateProject : ""}); 
        default :
            return(state); 
    }
}