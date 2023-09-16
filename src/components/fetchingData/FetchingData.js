import { useEffect } from "react"
import { connect } from "react-redux"
import { fetchDataSuccess } from "../actions/aboutMeAction"

const FetchingData = (props) => {
    useEffect(()=> {
        props.fetchDataSuccess();
    },[])
    return(<></>)
}

const mapStateToProps = state => {
    return {
        about : state.aboutMeState.rootVisible,
    }
}

export default connect(mapStateToProps,{fetchDataSuccess})(FetchingData);