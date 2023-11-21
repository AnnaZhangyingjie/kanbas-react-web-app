import React, {useEffect, useState} from "react";
import {Navigate, Route, Routes, useParams, useLocation} from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import {MdOutlineStorage} from "react-icons/md";
import Grades from "./Grades";
import axios from "axios";


function Courses() {
    const API_BASE = process.env.REACT_APP_API_BASE;
    const URL =  `${API_BASE}/courses`
    // const URL = "http://localhost:4000/api/courses";

    const{courseId} = useParams();
    const [course, setCourse] = useState({});
    const findCourseById = async (courseId) => {
        const response = await axios.get(
            `${URL}/${courseId}`
        );
        setCourse(response.data);
    };

    useEffect(() => {
        findCourseById(courseId);
    }, [courseId]);


    const{pathname} = useLocation();
    const [screen] = pathname.split("/")

    return (
        <div className="container">
            <div className='row'>
                <h5 style={{color:'red', marginLeft:'10px'}}>
                    <MdOutlineStorage style={{marginRight:'10px'}} />
                    Courses{course.name} / {screen}
                </h5>
            </div>

            <div className='row'>
                <div className='col'>
                    <CourseNavigation />
                </div>

                <div className='col'>
                    <div
                        className="overflow-y-scroll position-fixed bottom-0 end-0"
                        style={{
                            left: "320px",
                            top: "50px",
                        }}
                    >

                        <Routes>
                            <Route path="/" element={<Navigate to="Home" />} />
                            <Route path="Home" element={<Home/>} />
                            <Route path="Modules" element={<Modules/>} />
                            <Route path="Assignments" element={<Assignments/>} />
                            <Route
                                path="Assignments/:assignmentId"
                                element={<AssignmentEditor/>}
                            />
                            <Route path="Grades" element={<Grades />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default Courses;