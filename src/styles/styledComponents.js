import styled from "styled-components";
import {keyframes, css} from "styled-components";

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
min-width : 15rem;
max-width : 100%;
align-items : center;
height : 200vh;
max-height : fit-content;
font-family: 'Montserrat', sans-serif;
flex-wrap : wrap;

`
//! end main page

//! content
const slider = keyframes`
0% {

}
100% {
    transform : scaleY(40000%); 
    opacity : .2;
}
`
const slider2 = keyframes`
0% {

}
100% {
    transform : scaleX(5900%); 
    opacity : .6;
}
`
const slider5 = keyframes`
0% {

}
100% {
    transform : scaleX(7800%); 
    opacity : .6;
}
`
const slider7 = keyframes`
0% {

}
100% {
    transform : scaleX(6800%); 
    opacity : .6;
}
`
const spreadHover = keyframes`
    0% {
        
    }
    100% {
        transform : scaleY(200%); 
        opacity : 1; 
    }
`
const fadeIn = keyframes`
0% {

}
100% {
    transform : translateX(5rem);
    opacity : .75;
}
`
const fadeIn2 = keyframes`
0% {
  
}
100% {
    transform : translateX(5rem);
    opacity : .75;
}
`
const fadeOpacity = keyframes`
0% {

}
100% {
    opacity : .5;
}
`
const slider3 = keyframes`
0% {
    opacity : .3;
}
100% {
    transform : translateY(51rem); 
    opacity : .7;
}
`
const lineSlide = keyframes`
0% {

}
100% {
    transform : scaleX(500%);
    opacity : .5;
}
`
export const ContentDiv = styled.div`
display : flex;
flex-direction : column;
filter : ${props=> props.visible ? "brightness(25%)" : ""}; 
transition : filter .3s ease-in-out;
width : 50rem;
min-width : 50%;
max-width : 100%;
align-items  :center;
#relative {
    position : relative;
}
#span::before {
    content : "";
    border : 1px solid aquamarine;
    /* background-color : rgb(31, 25, 25); */
    height : 2.2rem;
    position :absolute;
    width : 0;
    transform-origin : left;
    opacity : 0;
    animation : ${slider2} .5s ease-in-out forwards; 
    animation-delay : 1750ms;

}

main::before {
    content : "";
    position : relative;
    left : -15px;
    border : 1px solid aquamarine;
    opacity : 0;
    transform-origin : top;
    animation : ${slider} 3s ease-in-out forwards;
}
.circle {
    position : absolute;
    left : 7px;
    top : -1.4rem;
    color : aquamarine;
    opacity : 0;
    animation : ${fadeOpacity} 1s ease-in-out forwards;
}
#circle2 {
    position : absolute;
    left : 6.8px;
    top : -1.4rem;
    color : aquamarine;
    opacity : 0;
    animation : ${slider3} 7s ease-in-out infinite;
}
#circle3 {
    position : absolute;
    left : 7px;
    top : 49.8rem;
    color : aquamarine;
    opacity : 0;
    animation : ${fadeOpacity} 1s ease-in-out forwards;
    animation-delay : 6.5s;
}
.words {
    display : flex;
    align-items : baseline;
    height : 40rem;
    margin-top : 15rem;
    padding-left : 2rem;
    color : lavender;
    font-size : 140%;
    flex-direction : column;
    position : relative;
}
.word {
    display : flex;
    margin-right : .5rem;
    flex-basis  :6rem;

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
    color : rgb(157, 43, 233);
}
.routes {
    margin-top : 2rem;
    display : flex;
    flex-direction : column;
    flex-basis : 200px;
    justify-content : space-evenly;
    position : relative;
    div {
        display : flex;
        padding-right  :1rem;
        align-items : center;
        margin-bottom : 2rem;
        transition : letter-spacing 200ms ease-in-out; 
    }

    #about {
        opacity : 0;
        animation : ${fadeIn} 1s ease-in-out forwards;
        animation-delay : 1800ms;
        color : aquamarine;
        &:hover {
            letter-spacing : .2rem;
            transition : .1s ease-in-out; 
            color : white;
        } 
    }
    #about:hover::before {
    content : "";
    border : 1px solid aquamarine;
    height : 2.2rem;
    position :absolute;
    width : 0;
    transform-origin : left;
    opacity : 0;
    z-index : -1; 
    animation : ${slider5} .3s ease-in-out forwards;
    color : white;
}
    #skills {
        opacity : 0;
        animation : ${fadeIn2} 1s ease-in-out forwards;
        animation-delay : 1900ms;
        color : aquamarine; 
        &:hover {
            color : white;
            opacity : 1;
            letter-spacing : .2rem;
            transition : .1s ease-in-out; 
        } 
    }
    #skills:hover::before {
    content : "";
    border : 1px solid aquamarine;
    /* background-color : rgb(31, 25, 25); */
    height : 2.2rem;
    position :absolute;
    width : 0;
    transform-origin : left;
    opacity : 0;
    animation : ${slider2} .3s ease-in-out forwards;
    z-index : -1;
    color : white;
}
    #cv {
        opacity : 0;
        animation : ${fadeIn} 1s ease-in-out forwards;
        animation-delay : 2000ms;
        color : aquamarine; 
        &:hover {
            color : white;
            letter-spacing : .2rem;
            transition : .1s ease-in-out; 
        } 
    }
    #cv:hover::before {
    content : "";
    border : 1px solid aquamarine;
    /* background-color : rgb(31, 25, 25); */
    height : 2.2rem;
    position :absolute;
    width : 0;
    transform-origin : left;
    opacity : 0;
    animation : ${slider2} .3s ease-in-out forwards;
    z-index : -1;
    color : white;
}
    #contact {
        opacity : 0;
        animation : ${fadeIn2} 1s ease-in-out forwards;
        animation-delay : 2100ms;
        color : aquamarine; 
        &:hover {
            letter-spacing : .2rem;
            transition : .1s ease-in-out; 
            color : white;
        } 
    }
    #contact:hover::before {
    content : "";
    border : 1px solid aquamarine;
    /* background-color : rgb(31, 25, 25); */
    height : 2.2rem;
    position :absolute;
    width : 0;
    transform-origin : left;
    opacity : 0;
    animation : ${slider7} .3s ease-in-out forwards;
    z-index : -1;
    color : white;
}
    #projects {
        opacity : 0;
        animation : ${fadeIn} 1s ease-in-out forwards;
        animation-delay : 2200ms;
        color : aquamarine; 
        &:hover {
            letter-spacing : .2rem;
            transition : .1s ease-in-out; 
            color : white;
        } 
    }
    #projects:hover::before {
    content : "";
    border : 1px solid aquamarine;
    /* background-color : rgb(31, 25, 25); */
    height : 2.2rem;
    position :absolute;
    width : 0;
    transform-origin : left;
    opacity : 0;
    animation : ${slider7} .3s ease-in-out forwards;
    z-index : -1;
    color : white;
}
}
.line {
    color : aquamarine; 
    opacity : 0;
    left : -1rem;
    &:hover {
            color : white;
            letter-spacing : .2rem;
            transition : .2s ease-in-out; 
        } 
}
.line1 {
 position : absolute;
 top :16.8rem;
 animation : ${lineSlide} .5s ease-in-out forwards;
 transform-origin : left;
 animation-delay : 1775ms;
}
.line2 {
 position : absolute;
 top : .5rem;
 animation : ${lineSlide} .5s ease-in-out forwards;
 transform-origin : left;
 animation-delay : 1850ms;
}
.line3 {
 position : absolute;
 top :4.5rem;
 animation : ${lineSlide} .5s ease-in-out forwards;
 transform-origin : left;
 animation-delay : 1950ms;
}
.line4 {
 position : absolute;
 top :8.7rem;
 animation : ${lineSlide} .5s ease-in-out forwards;
 transform-origin : left;
 animation-delay : 2050ms;
}
.line5 {
 position : absolute;
 top :12.7rem;
 animation : ${lineSlide} .5s ease-in-out forwards;
 transform-origin : left;
 animation-delay : 2150ms;
}
`

//!header
export const HeaderDiv = styled.div`
  border-bottom: 2px solid rgb(61, 41, 41);
  background-color :rgb(24, 21, 21);
  position : fixed;
  display : flex;
  justify-content : space-between;
  align-items : center;
  width  :100%;
  height : 7rem;
  z-index : 2;
  flex-basis : 100px;
  color : gray;
  #menu {
    display : flex;
    justify-content : space-around;
    align-items : center;
    margin-left : 1rem;
    z-index : -1;
    #menuIcon {
        cursor: pointer;
        transition : .3s ease-in-out; 
    }
    #menuItems {
        border : 2px solid white;
        position : absolute;
        top : 7rem;
        height : 40rem;
        width : 15rem;
        transition : 2s ease-out; 
    }
  }
`
const sideBar = keyframes`
0% {
    opacity : 0;
    
}
100% {
    opacity : 1;
    transform : scaleX(100%); 
}
`
export const ToggleBar = styled.div`
        position : absolute;
        top : 7rem;
        height : 40rem;
        width : 15rem;
        transition : 2s ease-out; 
        transform-origin : left;
        border-right : 2px solid rgb(61, 41, 41);
        border-bottom : 2px solid rgb(61, 41, 41);
        transform : scaleX(0); 
        background-color :rgb(24, 21, 21);
        ${props => 
        props.menuVisible && 
        css`
        animation : ${sideBar} .5s ease-in-out forwards;
        ` }
`

//! end header

export const AboutMe = styled.div`
    border : 2px solid black;
    color : gray;
    height : 40rem;
    min-width : 20rem;
    margin-top : 13rem;
    flex-wrap : wrap;
    background-color :rgb(24, 21, 21);

`