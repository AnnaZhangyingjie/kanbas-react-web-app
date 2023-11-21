import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import { AiFillCheckCircle } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";

function AssignmentEditor() {
    const { assignmentId, courseId } = useParams();
    const [assignmentData, setAssignmentData] = useState(null);
    const navigate = useNavigate();

    const API_BASE = process.env.REACT_APP_API_BASE;
    const URL = `${API_BASE}/assignments`;


    useEffect(() => {
        const fetchAssignment = async () => {
            try {
                const response = await axios.get(`${URL}/${courseId}/${assignmentId}`);
                setAssignmentData(response.data); // Use setAssignmentData
            } catch (error) {
                console.error('Error fetching assignment data', error);
            }
        };

        fetchAssignment();
    }, [assignmentId, courseId]);

    const handleSave = async () => {
        try {
            await axios.put(`${URL}/${courseId}/${assignmentId}`, assignmentData);
            navigate(`/Kanbas/Courses/${courseId}/Assignments`);
        } catch (error) {
            console.error("Error updating assignment:", error);
        }
    };

    const handleChange = (e) => {
        setAssignmentData({ ...assignmentData, title: e.target.value });
    };

    if (!assignmentData) {
        return <div>Loading...</div>;
    }

    return (
        <div className='col-8'>
            <div className='d-flex justify-content-end align-items-center'>
                <AiFillCheckCircle style={{color:"green", marginRight:'5px'}}/>
                <span style={{color:"green", marginRight:'5px'}}>Published</span>
                <button className='btn btn-secondary'><BiDotsVerticalRounded/></button>
            </div>

            <h2>Assignment Name</h2>
            <input
                value={assignmentData.title || ''}
                onChange={handleChange}
                className="form-control mb-2" />

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