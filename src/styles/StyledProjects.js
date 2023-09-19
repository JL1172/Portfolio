import styled, { css, keyframes } from "styled-components";

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
        border  : 2px solid white;
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
        margin-top : 1rem;
        flex-grow : 2;
        padding-top : 1rem;
        height : 5rem;
        border : 2px solid gray;
        overflow : hidden;
        display :flex;
        margin-right : .7rem;
        position : relative;
        justify-content : center;
        text-align : center;
        
    }
}
.activatedProject {
            position : flex;
            background-color : rgb(19, 16, 16); 
            transition : .3s ease-in-out; 
            height :40vw !important;
            position : relative;
            p {
                color : aquamarine;
            }
            p::before {
                content : '';
                position : absolute;
                border : 1px solid aquamarine; 
                top : 2.5rem;
                width : 1rem;
                animation : ${slider} .7s ease-in-out forwards;
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

`
