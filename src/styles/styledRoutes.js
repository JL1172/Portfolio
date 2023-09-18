import styled, { css, keyframes } from "styled-components";

const aboutRight = keyframes`
0% {

}
100% {
    transform : translateX(0); 
    opacity : 1;
}
`


export const StyledStack = styled.div`
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
    ${props => props.stackRootVisible && css`
    animation : ${aboutRight} .6s ease-in-out forwards; 
    animation-delay : 1.4s;`}
    padding-left : 1rem;
    width : 99vw;
    #headingStack {
        margin : 1%;
        display : flex;
        flex-direction : column;
        align-items : center;
        justify-content : center;
    }
    h1 {
        margin : 1.5rem;
        color : aquamarine;
    }
    #subHeading {
        display : flex;
        justify-content : center; 
        border :  1px 0px 1px 1px solid gray;
        margin-bottom : 3rem;
        margin-top : 3rem;
    }
    .tabs { 
        padding  : 1rem;
        display : flex;
        justify-content :center;
        border : 1px solid gray;
        width : 30vw;
        
    &:hover {
        color : white;
        background-color : rgb(70, 69, 69);
        border-top : 1px solid dodgerblue;
    }
    }
    .active {
        background-color : rgb(19, 16, 16);
        border-top : 1px solid dodgerblue;
    }
    #front {
        border-right : 1px solid gray;
        margin-left : 6%;
    }
    #back {
        margin-left : 3%;
    }
    .body1 {
        display : flex;
        margin-bottom : 4rem;
        box-shadow : 0 0 2em rgb(19, 16, 16);
        justify-content : center;
        background-color : rgb(19, 16, 16);
        width :90vw;
        h3 {
            text-align  :center;
            padding-top : 2rem;
            padding-bottom : 1rem;
            border-bottom  : 2px solid gray;
            width : 90vw;
        img {
            width : 100px;
            height : 100px;
            background-color : rgb(19, 16, 16);
        }
    }
    }
    #frontDiv {
        display  :flex;
        flex-direction : column;
        justify-content : center;

    }
    ul {
        display  :flex;
        align-items :baseline;
        justify-content  :space-between;
        flex-basis : 100px;
        flex-wrap  :wrap;
        margin : 1rem;
        a {
            text-decoration : none;
            color : inherit;
        }
    }
    li {
        list-style : circle;
        margin-bottom : 1rem;
        &:hover {
            color : white;
        }
    }
    li::before {
        content : "";
        position : absolute;
        border-bottom : 1px solid rgb(157, 43, 233);
        transform-origin : left;
        opacity : 0;
        width : 1em;
        top : 1.3rem;
        transition : .3s ease-in-out; 
    }
    li:hover::before {
        transform  : scaleX(1000%); 
        opacity : 1;
    }
    .special::before {
        content : "";
        position : absolute;
        border-bottom : 1px solid rgb(157, 43, 233);
        transform-origin : left;
        opacity : 0;
        width : 1em;
        top : 1.3rem;
        transition : 100ms ease-in-out; 
    }
    .special:hover::before {
        transform  : scaleX(1500%); 
        opacity : 1;
    }
    .case:hover::before {
        transform  : scaleX(1850%); 
        opacity : 1;
    }
    .case2:hover::before {
        transform  : scaleX(1200%); 
        opacity : 1;
    }
    .divUl {
        display : flex;
        margin-top  : 2rem;
        flex-direction : column;
        justify-content : baseline;
        align-items : baseline;
    }
.relative {
    position : relative;
}
.backendDiv {
    width : 99vw;
    display : flex;
    flex-direction : column;
    align-items : center;
    align-content : space-evenly;
    justify-content : center;
    margin-bottom : 4rem; 
    .backDiv {
        margin-top : 2rem;
        display : flex;
        flex-direction : column;
        align-items : center;
    }
}
`
