import React from "react";
import {Navigate, Route, Routes, useParams, useLocation} from "react-router-dom";
import db from "../Database"
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import {MdOutlineStorage} from "react-icons/md";


function Courses() {

    const{courseId} = useParams();
    const{pathname} = useLocation();
    const [qwe, kanbas, courses, id, screen] = pathname.split("/")

    const course = db.courses.find((course) => course._id === courseId)
    return (
        <div>
            <h5 style={{color:'red', marginLeft:'10px'}}>
                <MdOutlineStorage style={{marginRight:'10px'}} />
                Courses{course.name} / {screen}
            </h5>
            <CourseNavigation />
            <div>
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
                        <Route path="Grades" element={<h1>Grades</h1>} />
                    </Routes>
                </div>
            </div>

        </div>
    );

}
export default Courses;