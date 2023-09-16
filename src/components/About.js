import { connect } from "react-redux";
import { AboutMe } from "../styles/styledComponents";
import FetchingData from "./fetchingData/FetchingData";
import { Circles, Dna } from "react-loader-spinner";

function About(props) {
    return (
        <AboutMe>
            {props.loading ?
            <div style = {{display : "flex", width : "100%", justifyContent : "center"}}>
               <Circles
               height="80"
               width="80"
               color="#4fa94d"
               ariaLabel="circles-loading"
               wrapperStyle={{}}
               wrapperClass=""
               visible={true}
             /></div>
                :
                <>
                    <FetchingData />
                    <div>
                        <h1>About Me</h1>
                    </div>
                </>
            }
        </AboutMe>
    )
}

const mapStateToProps = state => {
    return {
        loading: state.aboutMeState.loading,
    }
}
export default connect(mapStateToProps, {})(About);