import styled, { css, keyframes } from "styled-components";
import { DiJsBadge } from "react-icons/di";

const aboutRight = keyframes`
0% {

}
100% {
    transform : translateX(0); 
    opacity : 1;
}
`
const slider = keyframes`
0% {

}
100% {
    transform : translateX(15rem);
    opacity : 0;
}
`
const rotate = keyframes`
from {transform : rotate(0); opacity : 1; }
to {transform : rotate(360deg); opacity : 1;}
`

export const StyledProjects = styled.div`
  color : gray;
    margin-top : 12.95rem;
    margin-bottom : 5rem;
    background-color :rgb(24, 21, 21);
    display : flex;
    flex-direction : column;
    height : fit-content;
    justify-content : center;
    align-items : center;
    box-shadow : 0 0 2em rgb(24, 21, 21);
    transition : .3s;
    opacity : 1;
    padding-right : 3rem;
    transform : translatex(-100%); 
    transform-origin : left;
    ${props => props.projectsRootVisible && css`
    animation : ${aboutRight} .6s ease-in-out forwards; 
    animation-delay : .6s;`}
    padding-left : 1rem;
    width : 99vw;
    position : relative;
    h1 {
        margin : 1.5rem;
        margin-left : 3rem;
        margin-top : 3rem;
        color : aquamarine;

    }
    #outerDiv {
        margin-top : 5rem;
        display : flex;
        min-height : 90vh;
        border : 2px solid rgb(61, 41, 41);
        padding : 1rem;
      height : fit-content;
      background-color : rgb(19, 16, 16);
      display : flex;
      justify-content : center;
      align-items : baseline;
      width : 99vw;
      margin-left : 2rem;
      position : relative;
      flex-basis :20vw;
      flex-wrap : wrap;
      margin-bottom : 8rem;
      .projectDivs {
          z-index : 2;
          background-color : rgb(19, 16, 16);
        margin-top : 1rem;
        flex-grow : 2;
        padding-top : 1rem;
        height : 5rem;
        border : 2px solid rgb(61, 41, 41);
        overflow : hidden;
        display :flex;
        margin-right : .7rem;
        position : relative;
        justify-content : flex-start;
        align-items : center;
        flex-direction : column;
}

.activatedProject {
            background-color : rgb(31, 29, 29); 
            transition : .3s ease-in-out; 
            height :40vw !important;
            transition : .3s ease-in-out;
            position : relative;
            p::after {
                content : "Technologies";
                position : absolute;
                color : aquamarine;
                left : 3rem;
                bottom : -2rem;
                font-size : 20px;
            }
            .tech {
            position : absolute;
            opacity : 1;
            width : 2rem;
            height : 2rem;
            bottom : -5rem;
            color : royalblue;
}
            .tech2 {
            position : absolute;
            width : 2rem;
            height : 2rem;
            bottom : -5rem;
            color : royalblue;
            left : 3rem;
            }
            .tech3 {
            position : absolute;
            width : 2rem;
            height : 2rem;
            bottom : -5rem;
            color : royalblue;
            left : 6rem;
            }
            .tech4 {
            position : absolute;
            width : 2rem;
            height : 2rem;
            bottom : -5rem;
            color : royalblue;
            left : 9rem;
            }
            .tech5 {
            position : absolute;
            width : 2rem;
            height : 2rem;
            bottom : -5rem;
            color : royalblue;
            left : 12rem;
            }
            .headings {
                color : aquamarine;
            }
            .headings::before {
                content : '';
                position : absolute;
                border : 1px solid aquamarine; 
                top : 2.5rem;
                width : 1rem;
                animation : ${slider} .7s ease-in-out forwards;
            }
            ${props => props.maxOrMin &&
        css`
            position : absolute;
            width : 95vw;
            margin-left : 2%;
            overflow-x : 0;
            z-index : 3;
            height : 80vh !important;
            transition : .3s ease-in-out;
            `
    }
}
.iconClose {
    position : absolute;
    right : 1px;
    top : 1px;
    width : 2rem;
    height : 2rem;
}

.iconLink {
    position : absolute;
    left : 1rem;
    width : 2rem;
    height : 2rem;
    color : rgb(157, 43, 233);
}
.tightened {
    margin-top : 1rem;
    display : flex;
    height  :40rem;
    width : 15rem;
    justify-content : flex-start;
    align-items : flex-start;
    overflow-y : scroll;
    color : white;
}
.projectDivs:hover {
    background-color : rgb(31, 29, 29);
}
.tightened::-webkit-scrollbar {
    display : none;
}
.max {
    position : absolute;
    right : .2rem;
    top : 3rem;
    width : 1.5rem;
    height : 1.5rem;

}
}
.logo {
    position : absolute;
    width : 60vw;
    height : 30vh;
    color : royalblue;
    z-index  : 1;   
    bottom : 24rem;
    opacity : 1;
    animation : ${rotate} 10s infinite linear;
}
.logo2 {
    position : absolute;
    z-index : 1;
    color : gray;
    font-size : 20px;
    bottom :45rem;
}

`
