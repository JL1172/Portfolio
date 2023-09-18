import styled, { css, keyframes } from "styled-components";

const aboutRight = keyframes`
0% {

}
100% {
    transform : translateX(0); 
    opacity : 1;
}
`

export const StyledForm = styled.div`
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
    ${props => props.contactRootVisible && css`
    animation : ${aboutRight} .6s ease-in-out forwards; 
    animation-delay : .6s;`}
    padding-left : 1rem;
    width : 99vw;
      h1 {
        margin : 1.5rem;
        color : aquamarine;
    }
    form {
      height : 60vh;
      display : flex;
      flex-direction : column;
      justify-content : center;
      align-items  : baseline;
    }
`