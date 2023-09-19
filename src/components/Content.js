import { Placeholder } from "reactstrap";
import { ContentDiv } from "../styles/styledComponents";
import { connect } from "react-redux";
import About from "./About";
import { fetchDataSuccess, rootAboutVisible, toggleCVVisibility, toggleContactVisibility, toggleProjectVisibility, toggleStackVisibility } from "./actions/aboutMeAction";
import Stack from "./Stack";
import ContactForm from "./ContactForm";
import CV from "./CV";
import Projects from "./Projects";

function Content(props) {
    return (
        <div style={{ position: "relative", width: "100%" }}>
            <ContentDiv contactRootVisible = {props.contactRootVisible} cvRootVisible = {props.cvRootVisible} projectsRootVisible = {props.projectsRootVisible}
            visible={props.menuVisibility} aboutVisible={props.aboutIsVisible} stackVisible = {props.stackRootVisible}>
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
                        <div onClick={() => props.fetchDataSuccess()} id="about"><span className="material-symbols-outlined">
                            info
                        </span>About Me</div>
                        <span className="material-symbols-outlined line line2">
                            horizontal_rule
                        </span>
                        <div  onClick={()=> props.toggleStackVisibility()} id="skills"><span className="material-symbols-outlined">
                            terminal
                        </span>Stack</div>
                        <span className="material-symbols-outlined line line3">
                            horizontal_rule
                        </span>
                        <div onClick={()=> props.toggleCVVisibility()} id="cv"><span className="material-symbols-outlined">
                            work
                        </span>CV</div>
                        <span className="material-symbols-outlined line line4">
                            horizontal_rule
                        </span>
                        <div id="contact" onClick={()=> props.toggleContactVisibility()}><span className="material-symbols-outlined">
                            link
                        </span>Contact</div>

                        <span className="material-symbols-outlined line line56">
                            horizontal_rule
                        </span>
                        <div onClick={()=>props.toggleProjectVisibility()} id="projects"><span className="material-symbols-outlined">
                            stack
                        </span>Projects</div>

                        <span className="material-symbols-outlined move-x">
                            circle
                        </span><span className="material-symbols-outlined move-y">
                            circle
                        </span>
                        <span  className="material-symbols-outlined move-x2">
                            circle
                        </span><span className="material-symbols-outlined move-y2">
                            circle
                        </span>
                        <span  className="material-symbols-outlined move-x3">
                            circle
                        </span><span className="material-symbols-outlined move-y3">
                            circle
                        </span>
                        <span  className="material-symbols-outlined move-x4">
                            circle
                        </span><span className="material-symbols-outlined move-y4">
                            circle
                        </span>
                        <span className="firstRoute"></span>
                        <span className="secondRoute"></span>
                        <span className="thirdRoute"></span>
                        <span className="fourthRoute"></span>
                        <span className="fifthRoute"></span>
                        <span className="sixthRoute"></span>
                        <span className="seventhRoute"></span>
                        <span className="eigthRoute"></span>
                    </section>
                    <span id="circle3" className="material-symbols-outlined">
                        circle
                    </span>
                </main>
            </ContentDiv  >
            {props.aboutIsVisible && <About />}
            {props.stackRootVisible && <Stack/>}
            {props.contactRootVisible && <ContactForm />}
            {props.cvRootVisible && <CV/>}
            {props.projectsRootVisible && <Projects />}
        </div>
    )
}
const mapStateToProps = state => {
    return {
        menuVisibility: state.headerState,
        aboutIsVisible: state.aboutMeState.rootVisible,
        stackRootVisible : state.aboutMeState.stackRootVisible,
        contactRootVisible : state.aboutMeState.contactRootVisible,
        cvRootVisible : state.aboutMeState.cvRootVisible,
        projectsRootVisible : state.aboutMeState.projectsRootVisible,
    }
}
export default connect(mapStateToProps, { fetchDataSuccess, toggleStackVisibility, toggleContactVisibility, toggleCVVisibility, toggleProjectVisibility })(Content);