import { useState } from "react"



export const useLocalStorage = (initialState,key) => {
    const [data,setData] = useState(()=> {
        if (window.localStorage.getItem(key)) {
            return JSON.parse(window.localStorage.getItem(key))
        }
        window.localStorage.setItem(key,JSON.stringify(initialState));
        return initialState;
    })
    const changer = (value) => {
        setData(value);
        window.localStorage.setItem(key,JSON.stringify(value)); 
    }
    return [data,changer];
}