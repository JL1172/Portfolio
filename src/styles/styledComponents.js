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
align-items : center;
min-height : 300vh;
max-height : fit-content;
font-family: 'Montserrat', sans-serif;

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

export const ContentDiv = styled.div`
display : flex;
flex-direction : column;
height : 100vh;
width : 100%;
align-items  :center;
main::before {
    content : "";
    position : relative;
    left : -10rem;
    border : 1px solid gray;
    opacity : 0;
    animation : ${slider} 3s ease-in-out forwards;
}

.words {
    display : flex;
    align-items : baseline;
    height : 40rem;
    margin-top : 15rem;
    color : lavender;
    font-size : 30px;
    flex-direction : column;
}
.word {
    display : flex;
    margin-right : 1rem;
}
div:nth-child(1) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
}
div:nth-child(2) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : .2s;
}
div:nth-child(3) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : .3s;
}
div:nth-child(4) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : .4s;
}
div:nth-child(5) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : .5s;
}
div:nth-child(6) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : .6s;
}
div:nth-child(7) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : .7s;
}
div:nth-child(8) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : .8s;
}
div:nth-child(9) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : .9s;
}
div:nth-child(10) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 1s;
}
div:nth-child(11) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 1.1s;
}
div:nth-child(12) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 1.2s;
}
div:nth-child(13) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 1.5s;
}

#second {
    div:nth-child(1) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 2s;
}
div:nth-child(2) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 2.1s;
}
div:nth-child(3) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 2.2s;
}
div:nth-child(4) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 2.3s;
}
div:nth-child(5) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 2.4s;
}
div:nth-child(6) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 2.5s;
}
div:nth-child(7) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 2.6s;
}
div:nth-child(8) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 2.7s;
}
div:nth-child(9) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 2.8s;
}
div:nth-child(10) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 2.9s;
}
div:nth-child(11) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 3s;
}
div:nth-child(12) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 3.1s;
}
div:nth-child(13) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 3.2s;
}
div:nth-child(14) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 3.3s;
}
div:nth-child(15) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 3.4s;
}
div:nth-child(16) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 3.5s;
}
div:nth-child(17) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 3.6s;
}
div:nth-child(18) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 3.7s;
}
div:nth-child(19) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 3.8s;
}
div:nth-child(20) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 3.9s;
}
div:nth-child(21) {
    opacity : 0;
    animation : ${kf} .1s ease-in-out forwards;
    animation-delay : 4s;
}
}
.type {
    color : gray;
}
`
