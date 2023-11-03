import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import {AiFillCheckCircle} from "react-icons/ai";
import {BiDotsVerticalRounded} from "react-icons/bi";
import {setModule} from "../../Modules/modulesReducer";


function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = db.assignments.find(
        (assignment) => assignment._id === assignmentId);


    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    return (
        <div className='col-8'>
            <div className='d-flex justify-content-end align-items-center'>
                <AiFillCheckCircle style={{color:"green", marginRight:'5px'}}/>
                <span style={{color:"green", marginRight:'5px'}}>Published</span>
                <button className='btn btn-secondary'><BiDotsVerticalRounded/></button>
            </div>


            <h2>Assignment Name</h2>
            <input value={assignment.title}
                   className="form-control mb-2" />
            {/*<textarea value={assignment.description}*/}
            {/*          onChange={(e) => setModule({*/}
            {/*              ...assignment, description: e.target.value })}*/}
            {/*/>*/}

            {/*<label>Points</label>*/}
            {/*<input value={assignment.points}*/}
            {/*       className="form-control mb-2" />*/}
            
            <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                  className="btn btn-danger">
                Cancel
            </Link>
            <button onClick={handleSave} className="btn btn-success me-2">
                Save
            </button>
        </div>
    );
}


export default AssignmentEditor;