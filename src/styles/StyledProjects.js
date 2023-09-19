import styled, { css, keyframes } from "styled-components";

const aboutRight = keyframes`
0% {

}
100% {
    transform : translateX(0); 
    opacity : 1;
}
`

export const StyledProjects = styled.div`
  color : gray;
    margin-top : 12.95rem;
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
        color : aquamarine;
    }
    #outerDiv {
        display : flex;
        min-height : 60vh;
      height : fit-content;
      background-color : rgb(19, 16, 16);
      display : flex;
      justify-content : center;
      align-items : baseline;
      width : 99vw;
      margin-left : 2rem;
      position : relative;
      .projectDivs {
        flex-basis :10vw;
        flex-wrap : wrap;
        flex-grow : 2;
        height : 5rem;
        border : 2px solid gray;
        z-index : 1;
    }
}
.activatedProject {
            position : absolute;
            z-index : 2; 
            top : 10rem;
}
`
