import { connect } from "react-redux";
import { StyledForm } from "../styles/styledForm";
import { initialState, initialStateForStatus, useForm } from "./customHooks/useForm";
import { Circles } from "react-loader-spinner";
import {AiOutlineClose} from "react-icons/ai";

function ContactForm(props) {
    const [data,changeHandler,submissionHandler,
        status,showMessage,closeShowMessage,errorData,disabled] = useForm(initialState,initialStateForStatus,"_form_data_")
    
    return (
        <StyledForm contactRootVisible = {props.contactRootVisible}>
            <h1>Contact Form</h1>
            {!showMessage && 
            status.submitting ? 
            <Circles /> :     
            <form onSubmit={(e)=> submissionHandler(e)}>
                <div className="rows">
                <label htmlFor="fname">First Name</label>
                <input type = "text" name = "fname" id = "fname" value = {data.fname} onChange={(e)=>changeHandler(e.target.name,e.target.value)} />
                {errorData.fname && <p>{errorData.fname}</p>}
                </div>
                <div className="rows">
                <label htmlFor="lname">Last Name</label>
                <input type = "text" name = "lname" id = "lname"  value = {data.lname} onChange={(e)=>changeHandler(e.target.name,e.target.value)}  />
                {errorData.lname && <p>{errorData.lname}</p>}
                </div>
                <div className="rows">
                    <label htmlFor="email">Email</label>
                    <input type = "email" id = "email" name = "email" value = {data.email} onChange={(e)=>changeHandler(e.target.name,e.target.value)}  />
                    {errorData.email && <p>{errorData.email}</p>}
                </div>
                <div className="rows">
                <label htmlFor="message">Message</label>
                <textarea name = "message" id ="message"  value = {data.message} onChange={(e)=>changeHandler(e.target.name,e.target.value)} />
                {errorData.message && <p>{errorData.message}</p>}
                </div>
                <input type = "submit" disabled = {disabled}/>
            </form>}
            {showMessage && <div>
                <AiOutlineClose  color = "aquamarine" onClick = {()=>closeShowMessage()}/>
                {status.info.msg}
                </div>}
        </StyledForm>
    )
}

const mapStateToProps = state => {
    return {
                contactRootVisible : state.aboutMeState.contactRootVisible,
    }
}

export default connect(mapStateToProps,{})(ContactForm)