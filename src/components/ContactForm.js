import { connect } from "react-redux";
import { StyledForm } from "../styles/styledForm";

function ContactForm(props) {
    
    return (
        <StyledForm contactRootVisible = {props.contactRootVisible}>
            <h1>Contact Form</h1>
            <div id = "contactProgress"></div>
            <form onSubmit={(e)=> e.preventDefault()} action = "https://formspree.io/f/mleylajq" method = "post">
                <div className="rows">
                <label htmlFor="fname">First Name</label>
                <input type = "text" name = "fname" id = "fname" />
                </div>
                <input type = "text" name = "lname" />
                <textarea name = "message"/>
                <input type = "submit" />
                <input type="hidden" value="//site.io/thanks.html" />
            </form>
        </StyledForm>
    )
}

const mapStateToProps = state => {
    return {
                contactRootVisible : state.aboutMeState.contactRootVisible,
    }
}

export default connect(mapStateToProps,{})(ContactForm)