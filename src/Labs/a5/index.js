import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithArrays from "./WorkingWithArrays";
const API_LAB = process.env.REACT_APP_API_LAB;
const LAB_URL = `${API_LAB}/a5`;

function Assignment5() {
    return (
        <div>


            <h1>Assignment 5</h1>
            <div className="list-group">
                <a href={`${LAB_URL}/welcome`}
                   className="list-group-item">
                    Welcome
                </a>
                <EncodingParametersInURLs />
                <WorkingWithObjects />
                <WorkingWithArrays />
            </div>
            {/*<SimpleAPIExamples />*/}
        </div>
    );
}
export default Assignment5;