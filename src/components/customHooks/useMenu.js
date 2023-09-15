import { useState } from "react"

export const useMenu = (value) => {
    const [visible,setVisible] = useState(value);
    const toggleVisibility = () => {
        setVisible(!visible); 
    }
    return [visible,toggleVisibility];
}