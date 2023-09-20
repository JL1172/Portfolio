import axios from "axios";
import { useEffect, useState } from "react"
import { schema } from "../formSchema/schema";
import * as yup from "yup";  
import { useLoaderData } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";

export const initialState = {
    fname : "",
    lname : "",
    email : "",
    message : "",
}
export const initialStateForStatus = {
    submitted : false,
    submitting : false,
    info : {error : false, msg : null},
}
export const useForm = (initialState, initialStateForStatus, key) => {
    const [data,setData] = useLocalStorage(initialState,key);
    const [status,setStatus] = useState(initialStateForStatus); 
    const [disabled,setDisabled] = useState(true); 
    const [errorData,setErrorData] = useState({
        fname : "",
        lname : "",
        email : "",
        message : "",
    }); 
    const [showMessage,setShowMessage] = useState(false)

    useEffect(()=> {
        schema.isValid(data).then(valid=> setDisabled(!valid))
    },[data])

    const formFieldValidation = (name,value) => {
        yup.reach(schema,name).validate(value).then(()=> 
        setErrorData({...errorData, [name] : ""})
        )
        .catch(err=> setErrorData({...errorData, [name] : err.errors[0]}))
    }

    const changeHandler = (name,value) => {
        formFieldValidation(name,value);
        setData({...data, [name] : value});
    }
    const submissionHandler = (e) => {
        e.preventDefault(); 
        setStatus({...status, submitting : true});
        axios.post("https://formspree.io/f/mleylajq",data)
        .then(()=> {
            setStatus(initialStateForStatus)
            setShowMessage(true);
            setStatus({...status, info : {...status.info, msg : "Thanks for reaching out. I will be in contact soon!"}})
        })
        .catch(err=> {
            setShowMessage(true);
            setStatus({...status, [status.info.msg] : err.message})
        })
        .finally(()=> {
           setData(initialState);
        } )
    }

    const closeShowMessage = () => {
        window.localStorage.clear();
        setStatus(initialStateForStatus);
        setShowMessage(false); 
    }

    return [data,changeHandler,submissionHandler,status,showMessage,closeShowMessage,errorData,disabled]
}