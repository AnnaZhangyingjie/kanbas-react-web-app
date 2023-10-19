import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import {BiDotsVerticalRounded} from "react-icons/bi";
import {PiDotsSixVerticalBold} from "react-icons/pi";
import {GiNotebook} from "react-icons/gi";
import {AiFillCheckCircle} from "react-icons/ai";


function Assignments() {
    const { courseId } = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <div>
            <h2>Assignments for course {courseId}</h2>

            <div className="row">
                <div className="col-md-9 d-flex justify-content-between align-items-center" >
                    <div className="d-flex">
                        <input value='Search for Assignment'
                               className="form-control mb-2" />
                    </div>
                    <div className="d-flex">
                        <button type="button" className="btn btn-secondary me-1" >Group</button>
                        <button type="button" className="btn btn-danger me-1">Assignment</button>
                        <button type="button" className="btn btn-secondary me-1" ><BiDotsVerticalRounded /></button>
                    </div>
                </div>

                <div className="list-group col-9">
                    {courseAssignments.map((assignment) => (


                        <Link
                            key={assignment._id}
                            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                            className="list-group-item d-flex justify-content-between align-items-center"
                        >
                            <div className="d-flex align-items-center">
                                <PiDotsSixVerticalBold />
                                <GiNotebook style={{color:'green'}}/>
                                {assignment.title}
                            </div>
                            <div className="d-flex align-items-center">
                                <AiFillCheckCircle style={{color:'green'}}/>
                                <PiDotsSixVerticalBold />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
            );
}
export default Assignments;