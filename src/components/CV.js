import { connect } from "react-redux"
import { StyledCV } from "../styles/styledCV"
import {BiLinkExternal} from "react-icons/bi";

const CV = (props) => {
    return (
        <StyledCV id = "aWork" cvRootVisible={props.cvRootVisible}>
            <h1>My CV<a title = "complete CV" href = "https://onedrive.live.com/embed?resid=968B4C77C495090B%211051242&authkey=!ALghyN_Cedg1NWo&em=2" target = "_blank"><BiLinkExternal /></a></h1>
            <div id="bodyDiv">
                <div id ="topHeading">
                    <h1 id='myName' class='title name'>Jacob Lang</h1>
                    <h4 class='header-top heading'>Wilmington, DE 19807</h4>
                    <h4 class='header-top heading'>302-377-2097</h4>
                    <h4 class='header-top heading'>jacoblang127@gmail.com</h4>
                    <p>Note : The link above is a link to the full CV</p>
                </div>
                <div className = "mainContent" >
                 
                    <h3 >{"<"}Education{">"}</h3>
                    
                    <div>
                    <div  className="h5h55For">
                    <h5 className="h5h5">Grand Canyon University, <span class='noBoldness'>Phoenix, AZ</span></h5>
                    </div>
                    <h5>Accounting with an Emphasis in Public Accounting</h5>
                    <div  className="h5h55For">
                    <h5 className="h5h55" >Bloom Institute of Technology</h5>
                    </div>
                    <h5>Full-Stack Web Development<span class='noBoldness'> Computer Science and Programming</span></h5>
                    </div>
                </div>
                <div className="mainContent">
                <h3 class ='h4'>{"<"}Work History{">"}</h3>
                <div id='electrical'>
                    <h4 className="h5h56" style = {{margin : "0"}}>In-House Electrician</h4>
                    <p>02/2023 - 04/2023</p>
                    <h5 >Church For The Nations, Phoenix, Arizona</h5>
                    <ul>
                        <li>Repaired electrical wiring
                            equipment along with 
                            other necessary maintenance.</li>
                        <li>Preventative maintenance on service panels, wired service panels and circuit breakers.</li>
                        <li>Created electrical plan layout and executed installation of electrical wiring following best practices and in
                            compliance with NEC (National Electric Code).</li>
                    </ul>

                </div>
                <div id="delivery">
                    <h4 class = 'h5h57'>Furniture Restorer</h4>
                    <p>06/2022 to 12/2022</p>
                    <h4>Thomas Furniture Restoration, Kennet Square, PA</h4>
                    <ul>
                        <li>Completed on time deliveries while also delivering antique and luxury furniture pieces.</li>
                        <li>Furniture restoration.</li>
                    </ul>
                </div>
                </div>
    
          {/*
                <h3 class ='h4'>Work History</h3>
                <div id='electrical'>
                    <h4 class = 'h4'>In-house Electrician</h4>
                    <p>02/2023 - 04/2023</p>
                    <h4>CFTN, Phoenix, Arizona</h4>
                    <ul>
                        <li>Worked from ladders, scaffold, and lifts to install, maintain, or repair electrical wiring
                            equipment along with 
                            other necessary maintenance.</li>
                        <li>PM on service panels, wired service panels and circuit breakers.</li>
                        <li>Planned layout and installation of electrical wiring following best practices and in
                            compliance with NEC.</li>
                    </ul>

                </div>
                <div id="delivery">
                    <h4 class = 'h4'>Furniture Restorer</h4>
                    <p>06/2022 to 12/2022</p>
                    <h4>Thomas Furniture Restoration, Kennet Square, PA</h4>
                    <ul>
                        <li>Completed on time deliveries while also delivering antique and luxury furniture pieces.</li>
                        <li>Aided shop personnel with furniture restoration.</li>
                    </ul>
                </div>
   }*/}</div>
        </StyledCV>
    )
}

const mapStateToProps = state => {
    return {
        cvRootVisible: state.aboutMeState.cvRootVisible,
    }
}

export default connect(mapStateToProps, {})(CV);