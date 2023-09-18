import { connect } from "react-redux";
import { StyledStack } from "../styles/styledRoutes";
import { toggleActive } from "./actions/aboutMeAction";
import { back, front, full } from "./data/pngs";
import {DiBootstrap, DiGit, DiGithubBadge, DiHtml5, DiJavascript1, DiReact} from "react-icons/di";
import {BsFiletypeCss} from "react-icons/bs"
import {SiCypress, SiJest, SiReactrouter, SiStyledcomponents, SiWebauthn} from "react-icons/si"
import {TbBrandRedux} from "react-icons/tb"


function Stack(props) {
    return (
        <StyledStack stackRootVisible={props.stackRootVisible} >
            <div id="headingStack">
                <div>
                    <h1>myStack{"()"} {"{"}</h1>
                </div>
                <div id="subHeading">
                    <div onClick={() => props.toggleActive(true)} className={props.frontend ? "tabs active" : "tabs"} id="front">frontEnd.js</div>
                    <div onClick={() => props.toggleActive()} className={props.backend ? "tabs active " : "tabs"} id="back">backEnd.js</div>
                </div>
            </div>
            <div id="body1">
                    {props.frontend &&
                    <div id = "frontDiv">
                            <h3><img src={front} />{"<"}Front-end{"/>"}</h3>
                            <ul className="ul">
                                <div className="divUl">
                                    <h4 title = "click for examples">Application Libraries</h4>
                                    <li><DiReact  style = {{color : "rgb(157, 43, 233)"}}  />React</li>
                                </div>
                                <div className="divUl">
                                    <h4>Styling</h4>
                                    <li><DiBootstrap style = {{color : "rgb(157, 43, 233)"}} />Bootstrap</li>
                                    <li>Reactstrap</li>
                                    <li><SiStyledcomponents  style = {{color : "rgb(157, 43, 233)"}} />Styled-Components</li>
                                </div>
                                <div className="divUl">
                                    <h4>Supplementary Libraries</h4>
                                    <li><SiReactrouter style = {{color : "rgb(157, 43, 233)"}}/>React-Router</li>
                                    <li><TbBrandRedux style = {{color : "rgb(157, 43, 233)"}}/>Redux</li>
                                    <li>Middleware</li>
                                </div>
                                <div className="divUl">
                                    <h4>Testing</h4>
                                    <li><SiCypress style = {{color : "rgb(157, 43, 233)"}} />Cypress.io</li>
                                    <li><SiJest style = {{color : "rgb(157, 43, 233)"}}/>Jest & React Testing Library</li>
                                </div>
                                <div className="divUl">
                                <h4>Other</h4>
                                <li> <DiJavascript1 style = {{color : "rgb(157, 43, 233)"}}/> JavaScript</li>
                                <li><BsFiletypeCss  style = {{color : "rgb(157, 43, 233)"}} />CSS</li>
                                <li><DiHtml5 style = {{color : "rgb(157, 43, 233)"}} />HTML</li>
                                <li><DiGithubBadge style = {{color : "rgb(157, 43, 233)"}}/>Git/Github</li>
                                <li><SiWebauthn style = {{color : "rgb(157, 43, 233)"}}/>Authentication and Authorization</li>
                                </div>
                            </ul>
                    </div>
                      }
                    {props.backend &&
                        <div>
                            <h3><img src={back} />Back-end</h3>
                        </div>}
            </div>
        </StyledStack>
    )
}

const mapStateToProps = state => {
    return {
        stackRootVisible: state.aboutMeState.stackRootVisible,
        frontend: state.aboutMeState.frontEndVisible,
        backend: state.aboutMeState.backEndVisible,


    }
}
export default connect(mapStateToProps, { toggleActive })(Stack);