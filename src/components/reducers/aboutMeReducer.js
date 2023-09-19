import { ACTIVATE_PROJECT, DEACTIVATE_PROJECT, FETCHING_DATA, MAXIMIZE_OR_MINIMIZE, MINIMIZE, PUT_DATA_IN_STATE, ROOT_ABOUT_VISIBLE, ROOT_STACK_VISIBLE, TOGGLE_ACTIVE, TOGGLE_CONTACT_VISIBILITY, TOGGLE_CV_VISIBILITY, TOGGLE_MENU, TOGGLE_PROJECT_VISIBILITY } from "../actions/aboutMeAction"



const initialState = {
    profile_pic: "",
    profile_information: [],
    loading: false,
    rootVisible: false,
    stackRootVisible: false,
    cvRootVisible: false,
    contactRootVisible: false,
    projectsRootVisible: false,
    frontEndVisible: false,
    backEndVisible: false,

    activeProject: "",
    deactivateProject: false,

    maxOrmin: false,
    min: false,

    menuIsVisible : false,
}

export const aboutMeReducer = (state = initialState, action) => {
    switch (action.type) {
        case (FETCHING_DATA):
            return ({ ...state, loading: action.payload });
        case (PUT_DATA_IN_STATE):
            return ({ ...state, profile_information: action.payload, profile_pic: action.payload.avatar_url });
        case (ROOT_ABOUT_VISIBLE):
            return ({
                ...state, menuIsVisible : false, rootVisible: !state.rootVisible, cvRootVisible: false,
                projectsRootVisible: false,
                contactRootVisible: false,
                stackRootVisible: false
            });
        case (ROOT_STACK_VISIBLE):
            return ({
                ...state, menuIsVisible : false,
                rootVisible: false, cvRootVisible: false, projectsRootVisible: false,
                contactRootVisible: false,
                stackRootVisible: !state.stackRootVisible
            })
        case (TOGGLE_ACTIVE):
            return ({ ...state,menuIsVisible : false, 
                frontEndVisible: action.payload, backEndVisible: !action.payload })
        case (TOGGLE_CONTACT_VISIBILITY):
            return ({
                ...state, menuIsVisible : false,
                frontEndVisible: false, backEndVisible: false,
                cvRootVisible: false, projectsRootVisible: false, contactRootVisible: !state.contactRootVisible, stackRootVisible: false, rootVisible: false
            })
        case (TOGGLE_CV_VISIBILITY):
            return ({
                ...state, menuIsVisible : false,
                 frontEndVisible: false, backEndVisible: false,
                cvRootVisible: !state.cvRootVisible, projectsRootVisible: false, contactRootVisible: false, stackRootVisible: false, rootVisible: false
            })
        case (TOGGLE_PROJECT_VISIBILITY):
            return ({
                ...state, menuIsVisible : false,
                frontEndVisible: false, backEndVisible: false,
                cvRootVisible: false, projectsRootVisible: !state.projectsRootVisible, contactRootVisible: false, stackRootVisible: false, rootVisible: false
            })
        case (ACTIVATE_PROJECT):
            return ({ ...state, activeProject: action.payload, deactivateProject: action.payload, maxOrmin: false, min: false })
        case (DEACTIVATE_PROJECT):
            return ({ ...state, activeProject: "", deactivateProject: "", maxOrmin: false, min: false });
        case (MAXIMIZE_OR_MINIMIZE):
            return ({ ...state, maxOrmin: !state.maxOrmin, min: true })
        case (MINIMIZE):
            return ({ ...state, maxOrmin: !state.maxOrmin, min: false })
        case (TOGGLE_MENU) : 
            return ({...state, menuIsVisible : !state.menuIsVisible})
        default:
            return (state);
    }
}