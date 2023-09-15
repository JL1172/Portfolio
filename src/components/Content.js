import { Placeholder } from "reactstrap";
import { ContentDiv } from "../styles/styledComponents";

export default function Content() {
    return (
        <div style={{ position: "relative", width: "100%" }}>
            <ContentDiv>
                <main className="words">
                    <section className="word">
                        <div><span className="material-symbols-outlined">
                            code
                        </span>H</div>
                        <div>e</div>
                        <div>l</div>
                        <div>l</div>
                        <div style={{ paddingRight: "1rem" }}>o,</div>
                        <div style={{ paddingRight: "1rem" }}>I</div>
                        <div>a</div>
                        <div style={{ paddingRight: "1rem" }}>m</div>
                        <div className="type"><span className="material-symbols-outlined">
                            arrow_back_ios
                        </span>J</div>
                        <div className="type">a</div>
                        <div className="type">c</div>
                        <div className="type">o</div>
                        <div className="type">b /<span className="material-symbols-outlined">
                            arrow_forward_ios
                        </span>,</div>
                    </section>
                    <section className="word" id="second">
                        <div style={{ paddingRight: "1rem" }}>I</div>
                        <div>a</div>
                        <div style={{ paddingRight: "1rem" }}>m</div>
                        <div style={{ paddingRight: "1rem" }}>a</div>
                        <div>s</div>
                        <div>o</div>
                        <div>f</div>
                        <div>t</div>
                        <div>w</div>
                        <div>a</div>
                        <div>r</div>
                        <div style={{ paddingRight: "1rem" }}>e</div>
                        <span id="relative">
                            <span id="span" style={{ display: "flex" }}>
                                <div id="one">d</div>
                                <div id="two">e</div>
                                <div id="three">v</div>
                                <div id="four">e</div>
                                <div id="five">l</div>
                                <div id="six">o</div>
                                <div id="seven">p</div>
                                <div id="eight">e</div>
                                <div id="nine">r<span className="material-symbols-outlined">
                                    code
                                </span></div>
                            </span>
                        </span>
                    </section>
                    <section className="word routes">

                        <div id="about"><span className="material-symbols-outlined">
                            info
                        </span>About Me</div>
                        <div id="skills"><span class="material-symbols-outlined">
                            terminal
                        </span>Skills</div>
                        <div id="cv"><span className="material-symbols-outlined">
                            work
                        </span>CV</div>
                        <div id="contact"><span className="material-symbols-outlined">
                            link
                        </span>Contact</div>
                        <div id="projects"><span className="material-symbols-outlined">
                            stack
                        </span>Projects</div>

                    </section>
                </main>

            </ContentDiv >
        </div>
    )
}