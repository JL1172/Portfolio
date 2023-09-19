import { useState } from "react";
import { HeaderDiv, ToggleBar } from "../styles/styledComponents";

import { connect } from "react-redux";

import { fetchDataSuccess, toggleCVVisibility, toggleContactVisibility, toggleProjectVisibility, toggleStackVisibility, toggleTheMenu } from "./actions/aboutMeAction";

function Header(props) {
    return (
        <HeaderDiv menuVisible={props.menuIsVisible}>
            <div id="menu" ><span onClick={() => props.toggleTheMenu()} id="menuIcon" className="material-symbols-outlined">
                {props.menuIsVisible ? "close" : "menu"}
            </span>
            <span id ="myHeaderName">{"<JacobLang>"}</span>
                <ToggleBar menuVisible={props.menuIsVisible}>
                    <div className="toggledDiv">
                        <a href = "#aAbout2"><div onClick={() => props.fetchDataSuccess()} id="a1"><span className="material-symbols-outlined">
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
        menuIsVisible : state.aboutMeState.menuIsVisible,
        aboutIsVisible: state.aboutMeState.rootVisible,
        stackRootVisible: state.aboutMeState.stackRootVisible,
        contactRootVisible: state.aboutMeState.contactRootVisible,
        cvRootVisible: state.aboutMeState.cvRootVisible,
        projectsRootVisible: state.aboutMeState.projectsRootVisible,
    }
}

export default connect(mapStateToProps, { toggleTheMenu, fetchDataSuccess, toggleStackVisibility, toggleContactVisibility, toggleCVVisibility, toggleProjectVisibility })(Header);
