import { connect } from "react-redux"
import { StyledProjects } from "../styles/StyledProjects"
import { activateProject, deactivateProject, deactivatedProjected } from "./actions/aboutMeAction"
import {AiOutlineClose} from "react-icons/ai";
import {BiLinkExternal} from "react-icons/bi";
import { descriptionsProject } from "./data/descriptions";


const Projects = (props) => {
    return (
        <StyledProjects projectsRootVisible={props.projectsRootVisible}>
            <h1>Projects</h1>
            <span>Tap on one for the details</span>
            <div id="outerDiv">
                <div onClick={(e) => props.activateProject(e.target.outerText)} id="1"
                    className={props.activeProject === "Spotify Login Mock" ? "projectDivs activatedProject" : "projectDivs"}>
                    {props.deactivateProject === "Spotify Login Mock" && <AiOutlineClose className="iconClose" onClick={()=>props.deactivatedProjected()}/>}
                    {props.deactivateProject === "Spotify Login Mock" && <BiLinkExternal className="iconLink" />}
                    <span className="headings" aria-label="1" >Spotify Login Mock </span>
                    <div className = "tightened" >
                    {props.deactivateProject === "Spotify Login Mock" && <p>{descriptionsProject.spotify}</p>}
                    </div>
                </div>
                <div onClick={(e) => props.activateProject(e.target.outerText)} id="2"
                    className={props.activeProject === "React Form Playground" ? "projectDivs activatedProject" : "projectDivs"}>
                    {props.deactivateProject === "React Form Playground" && <AiOutlineClose className="iconClose" onClick={()=>props.deactivatedProjected()}/>}
                    {props.deactivateProject === "React Form Playground" && <BiLinkExternal className="iconLink" />}
                    <span className="headings" aria-label="2">React Form Playground </span>
                    <div className = "tightened">
                    {props.deactivateProject === "React Form Playground" && <p>{descriptionsProject.form}</p>}
                    </div>
                </div>
                <div onClick={(e) => props.activateProject(e.target.outerText)} id="3"
                    className={props.activeProject === "Stock Market Trading App" ? "projectDivs activatedProject" : "projectDivs"}>
                    {props.deactivateProject === "Stock Market Trading App" && <AiOutlineClose className="iconClose" onClick={()=>props.deactivatedProjected()}/>}
                    {props.deactivateProject === "Stock Market Trading App" && <BiLinkExternal className="iconLink" />}
                    <span className="headings" aria-label="3">Stock Market Trading App </span>
                    <div className = "tightened">
                    {props.deactivateProject === "Stock Market Trading App" && <p>{descriptionsProject.stock}</p>}
                    </div>
                </div>
                <div onClick={(e) => props.activateProject(e.target.outerText)} id="4"
                    className={props.activeProject === "Nasa Photo of The Day" ? "projectDivs activatedProject" : "projectDivs"}>
                    {props.deactivateProject === "Nasa Photo of The Day" && <AiOutlineClose className="iconClose" onClick={()=>props.deactivatedProjected()}/>}
                    {props.deactivateProject === "Nasa Photo of The Day" && <BiLinkExternal className="iconLink" />}
                    <span className="headings" aria-label="4">Nasa Photo of The Day </span>
                    <div className = "tightened">
                    {props.deactivateProject === "Nasa Photo of The Day" && <p>{descriptionsProject.nasa}</p>}
                    </div>
                </div>
                <div onClick={(e) => props.activateProject(e.target.outerText)} id="5"
                    className={props.activeProject === "Global Bank GDP Query" ? "projectDivs activatedProject" : "projectDivs"}>
                    {props.deactivateProject ===  "Global Bank GDP Query" && <AiOutlineClose className="iconClose" onClick={()=>props.deactivatedProjected()}/>}
                    {props.deactivateProject ===  "Global Bank GDP Query" && <BiLinkExternal className="iconLink" />}
                    <span className="headings" aria-label="5">Global Bank GDP Query </span>
                    <div className = "tightened">
                    {props.deactivateProject ===  "Global Bank GDP Query" && <p>{descriptionsProject.gdp}</p>}
                    </div>
                </div>
            </div>
        </StyledProjects>
    )
}

const mapStateToProps = state => {
    return {
        projectsRootVisible: state.aboutMeState.projectsRootVisible,
        activeProject: state.aboutMeState.activeProject,
        deactivateProject : state.aboutMeState.deactivateProject
    }
}

export default connect(mapStateToProps, { activateProject,  deactivatedProjected })(Projects);