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
                        <div>d</div>
                        <div>e</div>
                        <div>v</div>
                        <div>e</div>
                        <div>l</div>
                        <div>o</div>
                        <div>p</div>
                        <div>e</div>
                        <div>r<span className="material-symbols-outlined">
                            code
                        </span></div>
                    </section>
                </main>

            </ContentDiv >
        </div>
    )
}