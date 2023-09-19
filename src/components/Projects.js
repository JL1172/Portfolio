import { connect } from "react-redux"
import { StyledProjects } from "../styles/StyledProjects"
import { activateProject } from "./actions/aboutMeAction"

const Projects = (props) => {
    console.log(props.activeProject)
    return (
        <StyledProjects projectsRootVisible = {props.projectsRootVisible}>
            <h1>Projects</h1>
            <span>Tap on one for the details</span>
            <div id = "outerDiv">
                    <div onClick={(e)=> props.activateProject(e.target.id)} id = "1" className={props.activeProject === "1" ? "projectDivs activatedProject" : "projectDivs"}> 
                        Project 1
                    </div>
                    <div onClick={(e)=> props.activateProject(e.target.id)} id = "2" className={props.activeProject === "2" ? "projectDivs activatedProject" : "projectDivs"}> 
                        Project 2
                    </div>
                    <div onClick={(e)=> props.activateProject(e.target.id)} id = "3" className={props.activeProject === "3" ? "projectDivs activatedProject" : "projectDivs"}> 
                        Project 3
                    </div>
                    <div onClick={(e)=> props.activateProject(e.target.id)} id ="4" className={props.activeProject === "4" ? "projectDivs activatedProject" : "projectDivs"}> 
                        Project 4 
                    </div>
                    <div onClick={(e)=> props.activateProject(e.target.id)} id = "5" className={props.activeProject === "5" ? "projectDivs activatedProject" : "projectDivs"}> 
                        Project 5 
                    </div>
            </div>
        </StyledProjects>
    )
}

const mapStateToProps = state => {
    return {
        projectsRootVisible : state.aboutMeState.projectsRootVisible,
        activeProject : state.aboutMeState.activeProject
    }
}

export default connect(mapStateToProps,{ activateProject})(Projects);