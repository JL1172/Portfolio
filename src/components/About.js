import { connect } from "react-redux";
import { AboutMe } from "../styles/styledComponents";
import FetchingData from "./fetchingData/FetchingData";
import { Circles, Dna } from "react-loader-spinner";
import { useEffect, useRef, useState } from "react";
import Description from "./data/data";
import { Typewriter } from "react-simple-typewriter";

function About(props) {

    return (
        <AboutMe id = "aAbout2" about={props.aboutIsVisible} >
            {props.loading ?
                <div style={{ display: "flex", width: "99vw", justifyContent: "center" }}>
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
                    <div  style={{ padding: "2rem" }}>
                        {/* <div><img id="computer" style={{ backgroundColor: "transparent" }} src="https://thenounproject.com/api/private/icons/5057273/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0" /></div> */}
                        <h1 style={{ margin: "1rem", marginLeft : "2rem"}}>{ }About Me{""}</h1>
                        {/* <img style={{ margin: "2rem", border : "2px solid white", borderRadius : "10rem" }} id="profilePic" src={props.profile_pic} /> */}
                        <div id="container" style = {{marginTop : "4rem"}}>
                            <Typewriter
                                words={["Hi! I am Jacob, welcome to my portfolio. Here is a little bit about me: I am currently a student at Bloom Institute of Technology for Full-stack Web Development, and I am a student at GCU (Grand Canyon University) pursuing a Bachelors in Accounting (public-accounting). I love not only the technical expertise software engineering demands, but also the ability to be hands-on with a project that can make a difference in the world. I am a team player, highly self-motivated, and driven to exceed expectations. I deliver results. I am passionate about software engineering and development. I enjoy the ever progressing nature of web development. Exceeding customer expectations is a personal priority."]}
                                loop={1}
                                cursor
                                cursorStyle=''
                                typeSpeed={5}
                            />
                        </div>
                            <h1>{""}</h1>
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
        aboutIsVisible: state.aboutMeState.rootVisible,
    }
}
export default connect(mapStateToProps, {})(About);

