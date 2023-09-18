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
        margin-left : 3rem;
        color : aquamarine;
    }
    form {
      min-height : 60vh;
      height : fit-content;
      background-color : rgb(19, 16, 16);
      display : flex;
      width : 99vw;
      padding-top : 1rem;
      margin-left : 2rem;
      margin-bottom  : 4rem;
      flex-direction : row;
      justify-content : space-evenly;
      flex-basis : 100%;
      flex-wrap : wrap;
      align-items  : center;
      #social {
        display : flex;
        justify-content : center;
        align-items  : center;
        flex-direction : column;
        border-bottom : 1px solid gray;
        h3 {
          border-bottom : 1px solid gray;
        }
        
        height : 50vh;
        margin-bottom : 3rem;
      }
      .linksSocial {
        display : flex;
        width  :100%;
        justify-content : space-around;
        flex-wrap : wrap;
        a:hover {
          transform : scale(1.1);
          transition  : 100ms ease-in-out;
        }
      }
      .rows {
        display : flex;
        flex-direction : column;
        justify-content : center;
        align-items : center;
        margin-bottom  :2rem;
      }
      .msg {
        display : flex;
        flex-direction :column;
        margin-bottom : 2rem;
      }
      input[type=text], input[type=email] {
        width : 20rem;
        margin-left : 1rem;
        padding-left : .6rem;
        padding-top : .5rem;
        padding-bottom : .5rem;
      }
      textarea {
        padding : 1rem;
      }
      label {
        margin-left : 1rem;
      }
      input,textarea {
        border : none;
        margin-left : 1rem;
        outline : 1px solid gray;
        border-radius : 10px;
        background-color : transparent;
        color : white;
      }
      input:hover, textarea:hover {
        outline-offset : 4px;
        box-shadow : 0 0 1em gray;
      }
      .incorrect {
        outline-color : rgb(180, 79, 79);
        color : rgb(180, 79, 79);
      }
      input[type=submit] {
        width : fit-content;
        padding-left : 5%;
        padding-right : 5%;
        padding-top : 1%;
        padding-bottom : 1%;
      }
      input[type=submit]:hover {
        color : rgb(19, 16, 16);
        background-color : white;
      }

    }
    #successMessage {
      height : 60vh;
      display  :flex;
      flex-direction  :column;
      justify-content : center;
      align-items : center;
      max-height : fit-content;
      p {
        font-size : 24px;
        color : aquamarine; 
      }
    }
`