import { connect } from "react-redux"
import { StyledProjects } from "../styles/StyledProjects"
import { activateProject, deactivateProject, deactivatedProjected, maximizeOrMinimize, minimize } from "./actions/aboutMeAction"
import {AiOutlineClose} from "react-icons/ai";
import {BiExpand, BiLinkExternal, BiLogoReact, BiLogoRedux} from "react-icons/bi";
import {TbArrowsMinimize, TbBrandRedux} from "react-icons/tb";
import {SiStyledcomponents} from "react-icons/si";
import {BsFillBootstrapFill} from "react-icons/bs";
import {DiJsBadge} from "react-icons/di";
import { descriptionsProject } from "./data/descriptions";


const Projects = (props) => {
    console.log(props.maxOrMin)
    return (
        <StyledProjects id = "aProj" projectsRootVisible={props.projectsRootVisible} maxOrMin = {props.maxOrMin}>
            <h1>Projects</h1>
            <div id="outerDiv">
                <div onClick={(e) => props.activateProject(e.target.outerText)} id="1"
                    className={props.activeProject === "Spotify Login Mock" ? "projectDivs activatedProject" : "projectDivs"}>
                    {props.deactivateProject === "Spotify Login Mock" && <AiOutlineClose className="iconClose" onClick={()=>props.deactivatedProjected()}/>}
                    {props.deactivateProject === "Spotify Login Mock" &&  !props.min ? <BiExpand className="max" onClick={(e)=>props.maximizeOrMinimize(e)}/> : props.min && <TbArrowsMinimize className="max" onClick={(e=> props.minimize(e))} />}
                    {props.deactivateProject === "Spotify Login Mock" && <a onClick={(e)=> e.stopPropagation()} className="iconLink" href = "https://github.com/JL1172/SpotifyLogin" target="_blank"><BiLinkExternal style = {{width : "1.5rem", height : "1.5rem", color : "rgb(157, 43, 233)"}}  /></a>}
                    <span className="headings" aria-label="1" >Spotify Login Mock<DiJsBadge /> </span>
                    <div className = "tightened" >
                    {props.deactivateProject === "Spotify Login Mock" && <div style = {{position : "relative"}}>
                         <p>{descriptionsProject.spotify}</p> 
                         <DiJsBadge className="tech"/>
                         <TbBrandRedux className="tech2"/>
                         <BiLogoReact className = "tech3" />
                         <SiStyledcomponents className="tech4" />
                         <BsFillBootstrapFill className="tech5"/>
                         </div>}
                    </div>
                </div>
                <div onClick={(e) => props.activateProject(e.target.outerText)} id="2"
                    className={props.activeProject === "React Form Playground" ? "projectDivs activatedProject" : "projectDivs"}>
                    {props.deactivateProject === "React Form Playground" && <AiOutlineClose className="iconClose" onClick={()=>props.deactivatedProjected()}/>}
                    {props.deactivateProject === "React Form Playground" &&  !props.min ? <BiExpand className="max" onClick={(e)=>props.maximizeOrMinimize(e)}/> : props.min && <TbArrowsMinimize className="max" onClick={(e=> props.minimize(e))} />}
                    {props.deactivateProject === "React Form Playground" && <a  onClick={(e)=> e.stopPropagation()} className="iconLink" href = "https://github.com/JL1172/React-Form-Playground" target="_blank"><BiLinkExternal style = {{width : "1.5rem", height : "1.5rem", color : "rgb(157, 43, 233)"}}  /></a>}
                    <span className="headings" aria-label="2">React Form Playground<DiJsBadge /> </span>
                    <div className = "tightened">
                    {props.deactivateProject === "React Form Playground" && <div style = {{position : "relative"}}>
                        <p>{descriptionsProject.form}</p>
                        <DiJsBadge className="tech"/>
                        <TbBrandRedux className="tech2"/>
                        <BiLogoReact className = "tech3" />
                        <SiStyledcomponents className="tech4" />
                        <BsFillBootstrapFill className="tech5"/>
                        </div>}
                    </div>
                </div>
                <div onClick={(e) => props.activateProject(e.target.outerText)} id="3"
                    className={props.activeProject === "Stock Market Trading App" ? "projectDivs activatedProject" : "projectDivs"}>
                    {props.deactivateProject === "Stock Market Trading App" && <AiOutlineClose className="iconClose" onClick={()=>props.deactivatedProjected()}/>}
                    {props.deactivateProject === "Stock Market Trading App" && !props.min ? <BiExpand className="max" onClick={(e)=>props.maximizeOrMinimize(e)}/> : props.min && <TbArrowsMinimize className="max" onClick={(e=> props.minimize(e))} />}
                    {props.deactivateProject === "Stock Market Trading App" && <a  onClick={(e)=> e.stopPropagation()}  className="iconLink" href = "https://github.com/JL1172/Stock-Market-Trading-App" target="_blank"><BiLinkExternal style = {{width : "1.5rem", height : "1.5rem", color : "rgb(157, 43, 233)"}}  /></a>}
                    <span className="headings" aria-label="3">Stock Market Trading App<DiJsBadge /> </span>
                    <div className = "tightened">
                    {props.deactivateProject === "Stock Market Trading App" &&<div style = {{position : "relative"}}>
                        <p>{descriptionsProject.stock}</p>
                        <DiJsBadge className="tech"/>
                        <TbBrandRedux className="tech2"/>
                        <BiLogoReact className = "tech3" />
                        <SiStyledcomponents className="tech4" />
                        <BsFillBootstrapFill className="tech5"/>
                        </div>}
                    </div>
                </div>
                <div onClick={(e) => props.activateProject(e.target.outerText)} id="4"
                    className={props.activeProject === "Nasa Photo of The Day" ? "projectDivs activatedProject" : "projectDivs"}>
                    {props.deactivateProject === "Nasa Photo of The Day" && <AiOutlineClose className="iconClose" onClick={()=>props.deactivatedProjected()}/>}
                    {props.deactivateProject === "Nasa Photo of The Day" &&  !props.min ? <BiExpand className="max" onClick={(e)=>props.maximizeOrMinimize(e)}/> : props.min && <TbArrowsMinimize className="max" onClick={(e=> props.minimize(e))} />}
                    {props.deactivateProject === "Nasa Photo of The Day" && <a  onClick={(e)=> e.stopPropagation()}  className="iconLink" href = "https://github.com/JL1172/NasaPhotoOfDayFetcher" target="_blank"><BiLinkExternal style = {{width : "1.5rem", height : "1.5rem", color : "rgb(157, 43, 233)"}}  /></a>}
                    <span className="headings" aria-label="4">Nasa Photo of The Day<DiJsBadge /> </span>
                    <div className = "tightened">
                    {props.deactivateProject === "Nasa Photo of The Day" && <div style = {{position : "relative"}}><p>{descriptionsProject.nasa}</p>
                    <DiJsBadge className="tech"/>
                    <TbBrandRedux className="tech2"/>
                    <BiLogoReact className = "tech3" />
                    <SiStyledcomponents className="tech4" />
                    <BsFillBootstrapFill className="tech5"/>
                    </div>}
                    </div>
                </div>
                <div onClick={(e) => props.activateProject(e.target.outerText)} id="5"
                    className={props.activeProject === "Global Bank GDP Query" ? "projectDivs activatedProject" : "projectDivs"}>
                    {props.deactivateProject ===  "Global Bank GDP Query" && <AiOutlineClose className="iconClose" onClick={()=>props.deactivatedProjected()}/>}
                    {props.deactivateProject === "Global Bank GDP Query" &&  !props.min ? <BiExpand className="max" onClick={(e)=>props.maximizeOrMinimize(e)}/> : props.min && <TbArrowsMinimize className="max" onClick={(e=> props.minimize(e))} />}
                    {props.deactivateProject ===  "Global Bank GDP Query" && <a  onClick={(e)=> e.stopPropagation()}  className="iconLink" href = "https://github.com/JL1172/GlobalBankGDPQuery" target="_blank"><BiLinkExternal style = {{width : "1.5rem", height : "1.5rem", color : "rgb(157, 43, 233)"}}  /></a>}
                    <span className="headings" aria-label="5">Global Bank GDP Query<DiJsBadge /> </span>
                    <div className = "tightened">
                    {props.deactivateProject ===  "Global Bank GDP Query" && <div style={{position : "relative"}}><p>{descriptionsProject.gdp}</p>
                    <DiJsBadge className="tech"/>
                    <TbBrandRedux className="tech2"/>
                    <BiLogoReact className = "tech3" />
                    <SiStyledcomponents className="tech4" />
                    <BsFillBootstrapFill className="tech5"/>
                    </div>}
                    </div>
                </div>
            </div>
            <p className = "logo2">Projects powered by...</p>
            <BiLogoReact className="logo" />
        </StyledProjects>
    )
}

const mapStateToProps = state => {
    return {
        projectsRootVisible: state.aboutMeState.projectsRootVisible,
        activeProject: state.aboutMeState.activeProject,
        deactivateProject : state.aboutMeState.deactivateProject,
        maxOrMin : state.aboutMeState.maxOrmin,
        min : state.aboutMeState.min,
    }
}

export default connect(mapStateToProps, { activateProject,  deactivatedProjected, maximizeOrMinimize, minimize })(Projects);