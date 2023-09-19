import styled, { css, keyframes } from "styled-components";

const aboutRight = keyframes`
0% {

}
100% {
    transform : translateX(0); 
    opacity : 1;
}
`
const slideX1 = keyframes`
0% {

}
100% {
    transform : scaleX(10000%); 
    opacity : 1;
}
`
const slideX2 = keyframes`
0% {

}
100% {
    transform : scaleX(1000%); 
    opacity : 1;
}
`
const slideX3 = keyframes`
0% {

}
100% {
    transform : scaleX(1300%); 
    opacity : 1;
}
`

export const StyledCV = styled.div`
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
    opacity : 0;
    padding-right : 3rem;
    transform : translatex(-100%); 
    transform-origin : left;
    ${props => props.cvRootVisible && css`
    animation : ${aboutRight} .6s ease-in-out forwards; 
    animation-delay : .6s;`}
    padding-left : 1rem;
    width : 99vw;
    h1 {
        margin : 1.5rem;
        margin-left : 3rem;
        color : aquamarine;
    }
    #bodyDiv {
    min-height : 60vh;
      height : fit-content;
      background-color : rgb(19, 16, 16);
      display : flex;
      width : 99vw;
      padding-top : 1rem;
      margin-left : 2rem;
      margin-bottom  : 4rem;
      flex-direction : column;
      justify-content : space-evenly;
      align-items  : center;
    }
   h3 {
    color : aquamarine;
   }
   h5 { 
     margin-bottom : 2rem;
   }
   h4 {
    margin-bottom : 2rem;
   }
   .mainContent {
    margin-top : 3rem;
    flex-wrap : wrap;
    flex-basis : 100px;
      flex-wrap : wrap;
    width  :90vw;
    position :relative;
   }
   #topHeading {
    border-bottom : 2px solid gray;
    display : flex;
    justify-content : center;
    flex-direction : column;
    align-items  :center;
    width : 70vw;
    position :relative;
   }
   .h5h5,.h5h55,.h5h56,.h5h57 {
    color : white;
    margin : 0;
    border-bottom : 1px solid aquamarine;
    
   }
`