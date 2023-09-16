import { connect } from "react-redux";
import { AboutMe } from "../styles/styledComponents";
import FetchingData from "./fetchingData/FetchingData";
import { Circles, Dna } from "react-loader-spinner";
import { useEffect, useRef, useState } from "react";
import Description from "./data/data";

function About(props) {
   
    return (
        <AboutMe about = {props.aboutIsVisible} >
            {props.loading ?
                <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
                    <Circles
                        height="80"
                        width="80"
                        color="aquamarine"
                        ariaLabel="circles-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    />
                </div>
                :
                <>
                    <div style = {{padding : "2rem"}}>
                        <div><img id = "computer" style = {{backgroundColor : "transparent"}} src = "https://cdn.iconscout.com/icon/free/png-256/free-laptop-screen-device-view-isometric-grid-3d-32801.png?f=webp"/></div>
                        <h1 style = {{margin : "1rem"}}>{}about_me{"()   {"}</h1>
                        <img style = {{margin : "2rem"}}id="profilePic" src={props.profile_pic} />
                        <div style = {{display : "flex", flexBasis : "100px", flexWrap : "wrap", margin : "2rem"}} id = "container">
                            <Description />
                            <h1>{"}"}</h1>
                            </div>
                    </div>
                </>
            }
        </AboutMe>
    )
}

const mapStateToProps = state => {
    return {
        loading: state.aboutMeState.loading,
        profile_pic: state.aboutMeState.profile_pic,
        aboutIsVisible : state.aboutMeState.rootVisible,
    }
}
export default connect(mapStateToProps, {})(About);