import { connect } from "react-redux";
import { AboutMe } from "../styles/styledComponents";
import FetchingData from "./fetchingData/FetchingData";
import { Circles, Dna } from "react-loader-spinner";

function About(props) {
    console.log(props.aboutIsVisible)
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
                    <div>
                        <h1>About Me</h1>
                        <img id="profilePic" src={props.profile_pic} />
                        <div id = "container">
                            <div>{props.description}</div>
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
        description : state.aboutMeState.description,
        aboutIsVisible : state.aboutMeState.rootVisible,
    }
}
export default connect(mapStateToProps, {})(About);