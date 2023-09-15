import { AboutMe } from "../styles/styledComponents";
import FetchingData from "./fetchingData/FetchingData";

export default function About(props) {
    return (
        <AboutMe>
            <div>
                <h1>About Me</h1>
            </div>
            <FetchingData />
        </AboutMe>
    )
}