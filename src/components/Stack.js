import { connect } from "react-redux";
import { StyledStack } from "../styles/styledRoutes";
import { toggleActive } from "./actions/aboutMeAction";
import { back, front, full } from "./data/pngs";
import { DiBootstrap, DiGit, DiGithubBadge, DiHtml5, DiJavascript1, DiReact } from "react-icons/di";
import { BsFiletypeCss } from "react-icons/bs"
import { SiCypress, SiExpress, SiJest, SiReactrouter, SiStyledcomponents, SiWebauthn } from "react-icons/si"
import { TbBrandRedux } from "react-icons/tb"
import { FiExternalLink } from "react-icons/fi"
import { Circles } from "react-loader-spinner";


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
            <div className="body1">
                {props.frontend &&
                    <div id="frontDiv">
                        <h3><img src={front} />{"<"}Front-end{"/>"}</h3>
                        <ul className="ul">
                            <div className="divUl">
                                <h4 title="click for examples">Application Libraries</h4>
                                <div className="relative">
                                    <li><DiReact style={{ color: "rgb(157, 43, 233)" }} /><a target="_blank" href="https://github.com/JL1172/Stock-Market-Trading-App">React <FiExternalLink /></a></li>
                                </div>
                            </div>
                            <div className="divUl">
                                <h4>Styling</h4>
                                <div className="relative">
                                    <li><DiBootstrap style={{ color: "rgb(157, 43, 233)" }} /><a target="_blank" href="https://github.com/JL1172/React-Form-Playground">Bootstrap <FiExternalLink /></a></li>
                                </div>
                                <div className="relative">
                                    <li><a target="_blank" href="https://github.com/JL1172/React-Form-Playground">Reactstrap <FiExternalLink /></a></li>
                                </div>
                                <div className="relative">
                                    <li className="case2"><SiStyledcomponents style={{ color: "rgb(157, 43, 233)" }} /><a target="_blank" href="https://github.com/JL1172/React-Form-Playground">Styled-Components <FiExternalLink /></a></li>
                                </div>
                            </div>
                            <div className="divUl">
                                <h4>Supplementary Libraries</h4>
                                <span className="relative">
                                    <li><SiReactrouter style={{ color: "rgb(157, 43, 233)" }} /><a target="_blank" href="https://github.com/JL1172/React-Form-Playground">React-Router <FiExternalLink /></a></li>
                                </span>
                                <span className="relative">
                                    <li><TbBrandRedux style={{ color: "rgb(157, 43, 233)" }} /><a target="_blank" href="https://github.com/JL1172/Stock-Market-Trading-App">Redux <FiExternalLink /></a></li>
                                </span>
                                <span className="relative">
                                    <li>Middleware</li>
                                </span>
                            </div>
                            <div className="divUl">
                                <h4>Testing</h4>
                                <span className="relative">
                                    <li><SiCypress style={{ color: "rgb(157, 43, 233)" }} /><a target="_blank" href="https://github.com/JL1172/Tests-Cypress--using-Cypress.io">Cypress.io <FiExternalLink /></a></li>
                                </span>
                                <span className="relative">
                                    <li className="special"><SiJest style={{ color: "rgb(157, 43, 233)" }} />Jest & React Testing Library</li>
                                </span>
                            </div>
                            <div className="divUl">
                                <h4>Other</h4>
                                <span className="relative">
                                    <li> <DiJavascript1 style={{ color: "rgb(157, 43, 233)" }} /><a target="_blank" href="https://github.com/JL1172/Calculator">JavaScript <FiExternalLink /></a></li>
                                </span>
                                <span className="relative">
                                    <li><BsFiletypeCss style={{ color: "rgb(157, 43, 233)" }} /><a target="_blank" href="https://github.com/JL1172/SpotifyLogin">CSS <FiExternalLink /></a></li>
                                </span>
                                <span className="relative">
                                    <li><DiHtml5 style={{ color: "rgb(157, 43, 233)" }} /><a target="_blank" href="https://github.com/JL1172/SpotifyLogin">HTML <FiExternalLink /></a></li>
                                </span>
                                <span className="relative">
                                    <li><DiGithubBadge style={{ color: "rgb(157, 43, 233)" }} /><a target="_blank" href="https://github.com/JL1172">Git/Github <FiExternalLink /></a></li>
                                </span>
                                <span className="relative">
                                    <li className="special case"><SiWebauthn style={{ color: "rgb(157, 43, 233)" }} /><a target="_blank" href="https://github.com/JL1172/Authentication-Practice">Authentication and Authorization <FiExternalLink /></a></li>
                                </span>
                            </div>
                        </ul>
                    </div>
                }
                {props.backend &&
                    <div className="backendDiv">
                        <h3><img src={back} />Back-end</h3>
                            <div className="backDiv">
                                <Circles
                                    height="80"
                                    width="80"
                                    color="#4fa94d"
                                    ariaLabel="circles-loading"
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                    visible={true}
                                />
                                <p>RESTful apis coming soon...</p>
                            </div>
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