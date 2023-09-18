import { connect } from "react-redux";
import { AboutMe } from "../styles/styledComponents";
import FetchingData from "./fetchingData/FetchingData";
import { Circles, Dna } from "react-loader-spinner";
import { useEffect, useRef, useState } from "react";
import Description from "./data/data";
import { Typewriter } from "react-simple-typewriter";

function About(props) {

    return (
        <AboutMe about={props.aboutIsVisible} >
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
                    <div style={{ padding: "2rem" }}>
                        <div><img id="computer" style={{ backgroundColor: "transparent" }} src="https://thenounproject.com/api/private/icons/5057273/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0" /></div>
                        <h1 style={{ margin: "1rem" }}>{ }aboutMe{"()   {"}</h1>
                        <img style={{ margin: "2rem", border : "2px solid white", borderRadius : "10rem" }} id="profilePic" src={props.profile_pic} />
                        <div id="container">
                            <Typewriter
                                words={["Hi! I am Jacob, welcome to my portfolio. Here is a little bit about me. I am currently a student at Bloom Institute of Technology for Full-stack web development and I am a student at GCU pursuing a Bachelors in Accounting public-accounting. I love not only the technical expertise software engineering demands, but the ability to be hands on with a project that can make a difference in the world, in the lives of many or few. I am a team player and highly self-motivated and driven to exceed expectations and deliver results. I am passionate about software engineering and development. I love what I do and I love the always moving, ever progressing nature of web development. I love customer satisfaction and crushing expectations, and I love the fact that there is always something new to learn"]}
                                loop={1}
                                cursor
                                cursorStyle='|'
                                typeSpeed={5}
                            />
                        </div>
                            <h1>{"}"}</h1>
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

