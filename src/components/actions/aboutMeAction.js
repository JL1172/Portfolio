import axios from "axios";

export const FETCHING_DATA = "FETCHING_DATA";
export const PUT_DATA_IN_STATE = "PUT_DATA_IN_STATE";
export const ROOT_ABOUT_VISIBLE = "ROOT_ABOUT_VISIBLE"; 

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