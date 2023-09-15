import { Placeholder } from "reactstrap";
import { ContentDiv } from "../styles/styledComponents";
import { connect } from "react-redux";

function Content(props) {
    return (
        <div style={{ position: "relative", width: "100%" }}>
            <ContentDiv visible = {props.menuVisibility}>
                <main className="words">
                    <span className="material-symbols-outlined circle">
                        circle
                    </span>
                    <span id="circle2" className="material-symbols-outlined">
                        circle
                    </span>
                    <section className="word">
                        <div>{"<>"}H</div>
                        <div>e</div>
                        <div>l</div>
                        <div>l</div>
                        <div style={{ paddingRight: "1rem" }}>o,</div>
                        <div style={{ paddingRight: "1rem" }}>I</div>
                        <div>a</div>
                        <div style={{ paddingRight: "1rem" }}>m</div>
                        <div className="type">{"<"}J</div>
                        <div className="type">a</div>
                        <div className="type">c</div>
                        <div className="type">o</div>
                        <div className="type">b {"/>"}</div>
                    </section>
                    <section className="word" id="second">
                        <div style={{ paddingRight: ".5rem" }}>I</div>
                        <div>a</div>
                        <div style={{ paddingRight: ".5rem" }}>m</div>
                        <div style={{ paddingRight: ".5rem" }}>a</div>
                        <div>s</div>
                        <div>o</div>
                        <div>f</div>
                        <div>t</div>
                        <div>w</div>
                        <div>a</div>
                        <div>r</div>
                        <div style={{ paddingRight: ".5rem" }}>e</div>
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
                                <div id="nine">r {"</>"}</div>
                            </span>
                        </span>
                    </section>
                    <section className="word routes">
                        <span className="material-symbols-outlined line line1">
                        horizontal_rule
                        </span>
                        <div id="about"><span className="material-symbols-outlined">
                            info
                        </span>About Me</div>
                        <span className="material-symbols-outlined line line2">
                            horizontal_rule
                        </span>
                        <div id="skills"><span className="material-symbols-outlined">
                            terminal
                        </span>Stack</div>
                        <span className="material-symbols-outlined line line3">
                            horizontal_rule
                        </span>
                        <div id="cv"><span className="material-symbols-outlined">
                            work
                        </span>CV</div>
                        <span className="material-symbols-outlined line line4">
                            horizontal_rule
                        </span>
                        <div id="contact"><span className="material-symbols-outlined">
                            link
                        </span>Contact</div>
                        <span className="material-symbols-outlined line line5">
                            horizontal_rule
                        </span>
                        <div id="projects"><span className="material-symbols-outlined">
                            stack
                        </span>Projects</div>

                    </section>
                </main>

            </ContentDiv >
        </div>
    )
}
const mapStateToProps = state => {
    return {
      menuVisibility : state.headerState,
    }
  }
  export default connect(mapStateToProps,{})(Content);