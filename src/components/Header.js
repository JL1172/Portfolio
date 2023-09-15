import { useState } from "react";
import { HeaderDiv, ToggleBar } from "../styles/styledComponents";
import { useMenu } from "./customHooks/useMenu";
import { connect } from "react-redux";
import { toggleTheMenu } from "./actions/headerActions";

 function Header(props) {
    return (
        <HeaderDiv>
            <div id="menu" ><span onClick={()=>props.toggleTheMenu()} id="menuIcon" className="material-symbols-outlined">
                {props.menuVisibility ? "close" : "menu"}
            </span>
                <ToggleBar menuVisible = {props.menuVisibility}>

                </ToggleBar>
            </div>
        </HeaderDiv>
    )
}

const mapStateToProps = state => {
    return {
        menuVisibility : state.headerState,
    }
}

export default connect(mapStateToProps,{toggleTheMenu})(Header);
