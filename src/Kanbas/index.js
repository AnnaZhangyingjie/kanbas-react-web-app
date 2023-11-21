import {Route, Routes, Navigate} from "react-router";
import KanbasNavigation from "./KanbasNavigation";
import Courses from "./Courses"
import Account from "./Account"
import Dashboard from "./Dashboard";
import Calendar from "./Calendar";
import { useEffect,useState } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";

function Kanbas() {
    const [courses, setCourses] = useState([]);
    const API_BASE = process.env.REACT_APP_API_BASE;
    const URL =  `${API_BASE}/courses`;
    // const URL = "http://localhost:4000/api/courses";
    const findAllCourses = async () => {
        const response = await axios.get(URL);
        setCourses(response.data);
    };

    const addCourse = async () => {
        const response = await axios.post(URL, course);
        setCourses([response.data, ...courses]);
    };

    const deleteCourse = async(course) => {
        console.log(course);
        const response = await axios.delete(
            `${URL}/${course._id.$oid}`);
        setCourses(courses.filter(
            (c) => c._id !== course._id));

    };

    const updateCourse = async(course) => {
        console.log(course)
        const response = await axios.put(
            `${URL}/${course._id.$oid}`,
            course
        );
        setCourses((prevCourses) =>
            prevCourses.map((c) => (c._id.$oid === course._id.$oid ? course : c))
        );
    };

    useEffect(() => {
        findAllCourses();
    }, []);

    const [course, setCourse] = useState({
        name: "New Course",      number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
    });


    return (
        <Provider store={store}>

            <div className="d-flex">
                <KanbasNavigation />

                <div>
                    <Routes>
                        <Route path='/' element = {<Navigate to = "Dashboard"/>} />
                        <Route path='Account' element = {<Account/>} />
                        <Route path='Dashboard' element = {<Dashboard
                            courses={courses}
                            course={course}
                            setCourse={setCourse}
                            addNewCourse={addCourse}
                            deleteCourse={deleteCourse}
                            updateCourse={updateCourse}/>
                        } />
                        <Route path='Courses/:courseId/*' element = {<Courses/>} />
                        <Route path='Calendar' element = {<Calendar/>} />
                    </Routes>

                </div>
            </div>
        </Provider>
    );
}
export default Kanbas;