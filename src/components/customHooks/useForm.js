import axios from "axios";
import { useState } from "react"

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
    const [data,setData] = useState(initialState);
    const [status,setStatus] = useState(initialStateForStatus); 
    const [errorData,setErrorData] = useState(""); 
    const [showMessage,setShowMessage] = useState(false)

    const changeHandler = (name,value) => {
        setData({...data, [name] : value});
    }
    const submissionHandler = (e) => {
        e.preventDefault(); 
        setStatus({...status, submitting : true});
        axios.post("https://formspree.io/f/mleylajq",data)
        .then(()=> {
            setStatus(initialStateForStatus)
            setShowMessage(true);
            setStatus({...status, [status.info.msg] : "Thanks for reaching out, I will be in contact soon!"})
        })
        .catch(err=> {
            setShowMessage(true);
            setStatus({...status, [status.info.msg] : err.message})
        })
        .finally(()=> {
           setData(initialState) 
        } )
    }

    const closeShowMessage = () => {
        setStatus(initialStateForStatus);
        setShowMessage(false); 
    }
    return [data,changeHandler,submissionHandler,status,showMessage,closeShowMessage]
}