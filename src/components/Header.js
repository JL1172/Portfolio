import { useState } from "react";
import { HeaderDiv } from "../styles/styledComponents";

export default function Header() {
    const [skillsSwitch,setSkillsSwitch] = useState(["<front-end/>","<back-end/>","<U/X/>","<U/I/>","<full-stack/>"]);
    const [output,setOutput] = useState(0);  
    setInterval(()=> {
        if (output === skillsSwitch.length - 1) {
            setOutput(0); 
        } else {
            setOutput( output + 1); 
        }
    },7000)
    return (
        <HeaderDiv>
            <div >
               <h2>{skillsSwitch[output]}</h2>
            </div>
            <div>
                
            </div>
        </HeaderDiv>
    )
}