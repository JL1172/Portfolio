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
                    <p aria-label="1" >Spotify Login Mock </p>
                    {props.deactivateProject === "Spotify Login Mock" && <p></p>}
                </div>
                <div onClick={(e) => props.activateProject(e.target.outerText)} id="2"
                    className={props.activeProject === "React Form Playground" ? "projectDivs activatedProject" : "projectDivs"}>
                    {props.deactivateProject === "React Form Playground" && <AiOutlineClose className="iconClose" onClick={()=>props.deactivatedProjected()}/>}
                    {props.deactivateProject === "React Form Playground" && <BiLinkExternal className="iconLink" />}
                    <p aria-label="2">React Form Playground </p>
                </div>
                <div onClick={(e) => props.activateProject(e.target.outerText)} id="3"
                    className={props.activeProject === "Stock Market Trading App" ? "projectDivs activatedProject" : "projectDivs"}>
                    {props.deactivateProject === "Stock Market Trading App" && <AiOutlineClose className="iconClose" onClick={()=>props.deactivatedProjected()}/>}
                    {props.deactivateProject === "Stock Market Trading App" && <BiLinkExternal className="iconLink" />}
                    <p aria-label="3">Stock Market Trading App </p>
                </div>
                <div onClick={(e) => props.activateProject(e.target.outerText)} id="4"
                    className={props.activeProject === "Nasa Photo of The Day" ? "projectDivs activatedProject" : "projectDivs"}>
                    {props.deactivateProject === "Nasa Photo of The Day" && <AiOutlineClose className="iconClose" onClick={()=>props.deactivatedProjected()}/>}
                    {props.deactivateProject === "Nasa Photo of The Day" && <BiLinkExternal className="iconLink" />}
                    
                    <p aria-label="4">Nasa Photo of The Day </p>
                </div>
                <div onClick={(e) => props.activateProject(e.target.outerText)} id="5"
                    className={props.activeProject === "Global Bank GDP Query" ? "projectDivs activatedProject" : "projectDivs"}>
                    {props.deactivateProject ===  "Global Bank GDP Query" && <AiOutlineClose className="iconClose" onClick={()=>props.deactivatedProjected()}/>}
                    {props.deactivateProject ===  "Global Bank GDP Query" && <BiLinkExternal className="iconLink" />}
                    <p aria-label="5">Global Bank GDP Query </p>
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