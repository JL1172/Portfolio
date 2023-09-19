import axios from "axios";

export const FETCHING_DATA = "FETCHING_DATA";
export const PUT_DATA_IN_STATE = "PUT_DATA_IN_STATE";
export const ROOT_ABOUT_VISIBLE = "ROOT_ABOUT_VISIBLE"; 
export const ROOT_STACK_VISIBLE = "ROOT_STACK_VISIBLE"; 
export const TOGGLE_ACTIVE = "TOGGLE_ACTIVE"; 
export const TOGGLE_CONTACT_VISIBILITY = "TOGGLE_CONTACT_VISIBILITY"; 
export const TOGGLE_PROJECT_VISIBILITY = "TOGGLE_PROJECT_VISIBILITY";

export const TOGGLE_CV_VISIBILITY = "TOGGLE_CV_VISIBILITY"; 

export const ACTIVATE_PROJECT = "ACTIVATE_PROJECT";
export const DEACTIVATE_PROJECT = "DEACTIVATE_PROJECT"; 

export const MAXIMIZE_OR_MINIMIZE = "MAXIMIZE_OR_MINIMIZE";
export const MINIMIZE = "MINIMIZE"
export const TOGGLE_MENU = "TOGGLE_MENU";

export const fetchDataSuccess = () => dispatch => {
    dispatch(rootAboutVisible())
    dispatch(fetchingDataLoader(true)); 
    axios.get("https://api.github.com/users/JL1172")
    .then(res=> {
        dispatch(putDataInState(res.data));
        dispatch(fetchingDataLoader(false))
    })
    .catch(err=> console.error(err.message)); 
}

const fetchingDataLoader = (bool) => {
    return { type : FETCHING_DATA, payload : bool};
}

const putDataInState = (data) => {
    return { type : PUT_DATA_IN_STATE, payload : data}; 
}

const rootAboutVisible = () => {
    return {type : ROOT_ABOUT_VISIBLE}
}

//!stack

export const toggleStackVisibility = () => {
    return{type : ROOT_STACK_VISIBLE}
}

export const toggleActive = (bool) => {
    return {type : TOGGLE_ACTIVE, payload : bool};
}

//!end of stack

//!contact

export const toggleContactVisibility = () => {
    return {type : TOGGLE_CONTACT_VISIBILITY}
}
//!end of contact

//!CV

export const toggleCVVisibility = () => {
    return{type : TOGGLE_CV_VISIBILITY};
}
//!end of cv

//!Project 

export const toggleProjectVisibility = () => {
    return{type : TOGGLE_PROJECT_VISIBILITY};
}

export const activateProject = (id) => {
        return {type : ACTIVATE_PROJECT, payload : id};
}
export const deactivatedProjected = () => {
    return{type :DEACTIVATE_PROJECT}
}

export const maximizeOrMinimize = (e) => {
    e.stopPropagation();
    return {type : MAXIMIZE_OR_MINIMIZE};
}

export const minimize = (e) => {
    e.stopPropagation();
    return {type : MINIMIZE}; 
}


//!menu
export const toggleTheMenu = () => {
    return {type : TOGGLE_MENU}
} 