import { useState } from "react";
import { HeaderDiv, ToggleBar } from "../styles/styledComponents";
import { useMenu } from "./customHooks/useMenu";

export default function Header() {
    const [menuVisible, toggleMenu] = useMenu(false);
    return (
        <HeaderDiv>
            <div id="menu" ><span onClick={toggleMenu} id="menuIcon" className="material-symbols-outlined">
                {menuVisible ? "close" : "menu"}
            </span>
                <ToggleBar menuVisible = {menuVisible}>

                </ToggleBar>
            </div>
        </HeaderDiv>
    )
}