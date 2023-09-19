import { useState } from "react";
import { HeaderDiv, ToggleBar } from "../styles/styledComponents";
import { useMenu } from "./customHooks/useMenu";
import { connect } from "react-redux";
import { toggleTheMenu } from "./actions/headerActions";
import { fetchDataSuccess, toggleCVVisibility, toggleContactVisibility, toggleProjectVisibility, toggleStackVisibility } from "./actions/aboutMeAction";

function Header(props) {
    return (
        <HeaderDiv>
            <div id="menu" ><span onClick={() => props.toggleTheMenu()} id="menuIcon" className="material-symbols-outlined">
                {props.menuVisibility ? "close" : "menu"}
            </span>
            <span id ="myHeaderName">{"<JacobLang>"}</span>
                <ToggleBar menuVisible={props.menuVisibility}>
                    <div className="toggledDiv">
                        <a href = "#aAbout"><div onClick={() => props.fetchDataSuccess()} id="a1"><span className="material-symbols-outlined">
                            info
                        </span>About Me</div></a>

                        <a href = "#aStack"><div onClick={() => props.toggleStackVisibility()} id="a2"><span className="material-symbols-outlined">
                            terminal
                        </span>Stack</div></a>
                        <a href = "#aWork"><div onClick={()=> props.toggleCVVisibility()} id="a3"><span className="material-symbols-outlined">
                            work
                        </span>CV</div></a>
                        <a href = "#aContact"><div id="a4" onClick={()=> props.toggleContactVisibility()}><span className="material-symbols-outlined">
                            link
                        </span>Contact</div></a>
                        <a href = "#aProj"><div onClick={()=>props.toggleProjectVisibility()} id="a5"><span className="material-symbols-outlined">
                            stack
                        </span>Projects</div></a>
                    </div>
                </ToggleBar>
            </div>
        </HeaderDiv>
    )
}

const mapStateToProps = state => {
    return {
        menuVisibility: state.headerState,
        aboutIsVisible: state.aboutMeState.rootVisible,
        stackRootVisible: state.aboutMeState.stackRootVisible,
        contactRootVisible: state.aboutMeState.contactRootVisible,
        cvRootVisible: state.aboutMeState.cvRootVisible,
        projectsRootVisible: state.aboutMeState.projectsRootVisible,
    }
}

export default connect(mapStateToProps, { toggleTheMenu, fetchDataSuccess, toggleStackVisibility, toggleContactVisibility, toggleCVVisibility, toggleProjectVisibility })(Header);
