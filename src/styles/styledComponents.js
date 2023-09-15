import styled from "styled-components";
import {keyframes} from "styled-components";

//!main page
const kf = keyframes`
0% {
   transform : scale(125%); 
}
100% {
   opacity : 1;
}
`

export const MainPage = styled.div`
background-color: rgb(31, 25, 25);
display : flex;
flex-direction : column;
justify-content : flex-start;
width : 100%;
align-items : center;
min-height : 300vh;
max-height : fit-content;
font-family: 'Montserrat', sans-serif;
flex-wrap : wrap;

`
//! end main page
//!header
export const HeaderDiv = styled.div`
  border-bottom: 2px solid rgb(61, 41, 41);
  background-color :rgb(24, 21, 21);
  position : fixed;
  width  :100%;
  height : 7rem;
  z-index : 2;
  flex-wrap : wrap;
flex-basis : 100px;
`
//! end header
//! content
const slider = keyframes`
0% {

}
100% {
    transform : scaleY(200000%); 
    opacity : .6;
}
`
const slider2 = keyframes`
0% {

}
100% {
    transform : scaleX(6000%); 
    opacity : .6;
}
`
const fadeIn = keyframes`
0% {
    transform : translate(1rem,1rem);
}
100% {
    transform : scale(1);
    opacity : .75;
}
`
const fadeIn2 = keyframes`
0% {
    transform : translate(1rem,-1rem);
}
100% {
    transform : scale(1);
    opacity : .75;
}
`
export const ContentDiv = styled.div`
display : flex;
flex-direction : column;
height : 100vh;
width : 100%;
align-items  :center;
flex-wrap : wrap;
flex-basis : 100px;
#relative {
    position : relative;
}
#span::before {
    content : "";
    border : 1px solid royalblue;
    background-color : royalblue;
    /* background-color : rgb(31, 25, 25); */
    height : 2.2rem;
    position :absolute;
    width : 0;
    transform-origin : left;
    opacity : 0;
    animation : ${slider2} .5s ease-in-out forwards; 
    animation-delay : 1750ms;
    flex-wrap : wrap;
flex-basis : 100px;
}

main::before {
    content : "";
    position : relative;
    left : -5rem;
    border : 1px solid gray;
    opacity : 0;
    animation : ${slider} 3s ease-in-out forwards;
    flex-wrap : wrap;
flex-basis : 100px;
}

.words {
    display : flex;
    align-items : baseline;
    height : 40rem;
    margin-top : 15rem;
    color : lavender;
    font-size : 150%;
    flex-direction : column;
    flex-wrap : wrap;
flex-basis : 100px;
}
.word {
    display : flex;
    margin-right : 1rem;
    flex-wrap : wrap;
flex-basis : 100px;
}
div:nth-child(1) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
}
div:nth-child(2) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 50ms;
}
div:nth-child(3) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 100ms;
}
div:nth-child(4) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 150ms;
}
div:nth-child(5) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 200ms;
}
div:nth-child(6) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 250ms;
}
div:nth-child(7) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay :300ms;
}
div:nth-child(8) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 350ms;
}
div:nth-child(9) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 400ms;
}
div:nth-child(10) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 450ms;
}
div:nth-child(11) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 500ms;
}
div:nth-child(12) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 550ms;
}
div:nth-child(13) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 600ms;
}

#second {
    div:nth-child(1) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 650ms;

}
div:nth-child(2) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 700ms;
}
div:nth-child(3) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 750ms;
}
div:nth-child(4) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 800ms;
}
div:nth-child(5) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 850ms;
}
div:nth-child(6) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 900ms;
}
div:nth-child(7) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay :950ms;
}
div:nth-child(8) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 1000ms;
}
div:nth-child(9) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 1050ms;
}
div:nth-child(10) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 1100ms;
}
div:nth-child(11) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 1150ms;
}
div:nth-child(12) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 1200ms;
}
#one {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 1250ms;
    color : azure;
}
#two {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 1300ms;
}
#three {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 1350ms;
}
#four {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 1400ms;
}
#five {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 1450ms;
}
#six{
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 1500ms;
}
#seven {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 1550ms;
}
#eight {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 1600ms;
}
#nine {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 1650ms;
    
}
}
.type {
    color : gray;
}
.routes {
    margin-top : 5rem;
    display : flex;
    flex-direction  :column;
    flex-wrap : wrap;
    flex-grow : 2;
    justify-content : space-evenly;
    div {
        display : flex;
        padding-right  :1rem;
        align-items : center;
        flex-grow : 2;
    }
    #about {
        opacity : 0;
        animation : ${fadeIn} 1s ease-in-out forwards;
        animation-delay : 1800ms;
        color : aquamarine; 
        flex-grow : 2;
        margin-left : 2rem;
    }
    #skills {
        opacity : 0;
        animation : ${fadeIn2} 1s ease-in-out forwards;
        animation-delay : 1800ms;
        color : aquamarine; 
        flex-grow :2;
        margin-left : 3.5rem;
    }
    #cv {
        opacity : 0;
        animation : ${fadeIn} 1s ease-in-out forwards;
        animation-delay : 1800ms;
        color : aquamarine; 
        flex-grow : 2;
        margin-left : 5rem;
    }
    #contact {
        opacity : 0;
        animation : ${fadeIn2} 1s ease-in-out forwards;
        animation-delay : 1800ms;
        color : aquamarine; 
        flex-grow : 2;
        margin-left : 3.5rem;
    }
    #projects {
        opacity : 0;
        animation : ${fadeIn} 1s ease-in-out forwards;
        animation-delay : 1800ms;
        color : aquamarine; 
        flex-grow : 2;
        margin-left : 2rem;
    }
}
.brackets {
    color : royalblue;
}
`
