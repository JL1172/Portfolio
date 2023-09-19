import { connect } from "react-redux";
import { StyledForm } from "../styles/styledForm";
import { initialState, initialStateForStatus, useForm } from "./customHooks/useForm";
import { Circles } from "react-loader-spinner";
import { AiFillGithub, AiOutlineClose, AiOutlineLinkedin } from "react-icons/ai";

function ContactForm(props) {
    const [data, changeHandler, submissionHandler,
        status, showMessage, closeShowMessage, errorData, disabled] = useForm(initialState, initialStateForStatus, "_form_data_")

    return (
        <StyledForm id = "aContact" contactRootVisible={props.contactRootVisible}>
            <h1>Contact Form</h1>
            {showMessage ? <div id = "successMessage">
                    <AiOutlineClose style = {{marginBottom : "2rem", width : "3rem",height : "3rem"}} color="aquamarine" onClick={() => closeShowMessage()} />
                    <p>{status.info.msg}</p>
                </div> : 
            status.submitting ?
            <Circles /> :
            <>
                <form onSubmit={(e) => submissionHandler(e)}>
                    <div id="social">
                        <h3>Connect on Social</h3>
                        <div className="linksSocial">
                            <a href="https://www.linkedin.com/in/jacob-lang1172/" target="_blank"><AiOutlineLinkedin style={{ width: "5rem", height: "5rem", color: "royalblue" }} /></a>
                            <a href="https://github.com/JL1172" target="_blank"><AiFillGithub style={{ width: "5rem", height: "5rem", color: "royalblue" }} /></a>
                        </div>
                    </div>
                    <div>
                        <div className="rows">
                            <input type="text" className={errorData.fname && "incorrect"} placeholder="first name" name="fname" id="fname" value={data.fname} onChange={(e) => changeHandler(e.target.name, e.target.value)} />
                            {errorData.fname && <p className="incorrect">{errorData.fname}</p>}
                        </div>
                        <div className="rows">
                            <input type="text" className={errorData.lname && "incorrect"} name="lname" id="lname" placeholder="last name" value={data.lname} onChange={(e) => changeHandler(e.target.name, e.target.value)} />
                            {errorData.lname && <p className="incorrect">{errorData.lname}</p>}
                        </div>
                        <div className="rows">
                            <input type="email" className={errorData.email && "incorrect"} id="email" name="email" placeholder="email@email.com" value={data.email} onChange={(e) => changeHandler(e.target.name, e.target.value)} />
                            {errorData.email && <p className="incorrect">{errorData.email}</p>}
                        </div>
                        <div className="msg">
                            <label htmlFor="message">Message</label>
                            <textarea className={errorData.message && "incorrect"} name="message" id="message" value={data.message} onChange={(e) => changeHandler(e.target.name, e.target.value)} />
                            {errorData.message && <p className="incorrect">{errorData.message}</p>}
                        </div>
                        <input type="submit" disabled={disabled} /></div>
                </form></>}
        </StyledForm>
    )
}

const mapStateToProps = state => {
    return {
        contactRootVisible: state.aboutMeState.contactRootVisible,
    }
}

export default connect(mapStateToProps, {})(ContactForm)