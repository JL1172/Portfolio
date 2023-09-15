import { Circles } from "react-loader-spinner";

export default function Animation() {
    return (
        <div id="animation">
            <div>
                <Circles
                    height="80"
                    width="80"
                    color="royalblue"
                    ariaLabel="circles-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            </div>
        </div>
    )
}