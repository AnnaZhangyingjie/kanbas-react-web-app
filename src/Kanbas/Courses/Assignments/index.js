import React, {useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
// import db from "../../Database";
import {BiDotsVerticalRounded} from "react-icons/bi";
import {PiDotsSixVerticalBold} from "react-icons/pi";
import {GiNotebook} from "react-icons/gi";
import {AiFillCheckCircle, AiOutlinePlus} from "react-icons/ai";
import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;
const ASSIGNMENTS_URL = `${API_BASE}/assignments`;


function Assignments() {
    const URL =  `${API_BASE}/assignments`
    // const URL = "http://localhost:4000/api/assignments";
    const { courseId } = useParams();
    const {assignmentId} = useParams();
    // const assignments = db.assignments;
    const [courseAssignments, setCourseAssignments] = useState([]);
    const [newAssignmentName, setNewAssignmentName] = useState('');

    const handleNewAssignmentChange = (e) => {
        setNewAssignmentName(e.target.value);
    };

    const handleAddAssignment = async () => {
        try {
            const newAssignment = { title: newAssignmentName, course: courseId };
            const response = await axios.post(`${ASSIGNMENTS_URL}/${courseId}`, newAssignment);
            setCourseAssignments([...courseAssignments, response.data]);
            setNewAssignmentName('');
        } catch (error) {
            console.error('Error adding new assignment:', error);
        }
    };


    const findAssignmentById = async (courseId) => {
        const response = await axios.get(
            `${URL}/${courseId}`
        );
        setCourseAssignments(response.data);
    };

    const deleteAssignment = async (courseId, assignmentId) => {
        const response = await axios
            .delete(`${ASSIGNMENTS_URL}/${courseId}/${assignmentId}`);
        const updatedAssignments = courseAssignments.filter(assignment => assignment._id !== assignmentId);
        setCourseAssignments(updatedAssignments);
    };

    useEffect(() => {
        findAssignmentById(courseId);
    }, [courseId]);

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





                        <button type="button" className="btn btn-secondary me-1" ><BiDotsVerticalRounded /></button>
                    </div>

                    <input
                        type="text"
                        value={newAssignmentName}
                        onChange={handleNewAssignmentChange}
                        className="form-control"
                        placeholder="Enter new assignment name"
                    />

                    <button type="button" className="btn btn-danger me-1" onClick={handleAddAssignment}>
                        <AiOutlinePlus />
                        Assignment</button>

                </div>

                <div className="list-group col-9">
                    {courseAssignments.map((assignment) => (
                        <div key={assignment._id} className="d-flex justify-content-between align-items-center list-group-item">
                            <div className="d-flex align-items-center">
                                <PiDotsSixVerticalBold />
                                <GiNotebook style={{color:'green'}}/>
                                <Link
                                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                                    style={{ color: 'black', textDecoration: 'none' }}>
                                    {assignment.title}
                                </Link>
                            </div>
                            <div className="d-flex align-items-center">
                                <Link
                                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                                    className="btn btn-warning"
                                    style={{ marginRight: '10px', color: 'black', textDecoration: 'none' }}>
                                    Edit
                                </Link>
                                <button className="btn btn-danger"
                                        onClick={() => deleteAssignment(courseId, assignment._id)}>
                                    Delete
                                </button>
                                <AiFillCheckCircle style={{color:'green'}}/>
                                <PiDotsSixVerticalBold />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Assignments;