import db from "../Database";
import { Link } from "react-router-dom";
import { React, useState } from "react";


function Dashboard({ courses, course, setCourse, addNewCourse, deleteCourse, updateCourse }
) {

    return (

        <div className="container">
            <h1>Dashboard</h1>
            <hr />
            <h2>Published Courses ({courses.length})</h2>

            <h5>Course</h5>
            <div className="row d-flex">
                <div className="col-6">
                    <input value={course.name} className="form-control"
                           onChange={(e) => setCourse({ ...course, name: e.target.value }) }/>
                </div>

                <div className="col-6">
                    <input value={course.number} className="form-control"
                           onChange={(e) => setCourse({ ...course, number: e.target.value }) }/>
                </div>

            </div>

            <div className="row d-flex">
                <div className="col-6">
                    <input value={course.startDate} className="form-control" type="date"
                           onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
                </div>

                <div className="col-6">
                    <input value={course.endDate} className="form-control" type="date"
                           onChange={(e) => setCourse({ ...course, endDate: e.target.value }) }/>
                </div>

            </div>

            <div className="d-flex justify-content-end" style={{marginTop: '10px', marginBottom:'10px'}}>

                    <button onClick={addNewCourse} className = "btn btn-success" style={{marginRight:'10px'}}>
                        Add
                    </button>


                    <button onClick={(event) => {
                        event.preventDefault();
                        updateCourse(course);
                    }} className="btn btn-primary">
                        Update
                    </button>

            </div>




            <div className="list-group" style={{marginLeft: '10px'}}>
                {courses.map((course) => (

                    <div className="row d-flex justify-content-between">
                        <Link key={course._id}
                            to={`/Kanbas/Courses/${course._id.$oid}`}
                            className="list-group-item">
                            <div className="d-flex justify-content-between align-items-center">
                                {course.name}

                                    <div>
                                        <button className="btn btn-warning" style={{marginRight: '10px'}}
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    setCourse(course);
                                                }}>
                                            Edit
                                        </button>

                                        <button className="btn btn-danger"
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    deleteCourse(course);
                                                }}>
                                            Delete
                                        </button>
                                    </div>


                            </div>
                        </Link>
                    </div>
                ))}
            </div>

            {/*<div className="row">*/}
            {/*    {courses.map((course, index) => (*/}
            {/*        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3" key={course._id}>*/}
            {/*            <div className="card">*/}
            {/*                <img src="/vendors/blue-background-088FDC-8ecd0503.jpg" className="card-img-top" alt="..." />*/}
            {/*                <div className="card-body">*/}
            {/*                    <h5 className="card-title">{course.name}</h5>*/}
            {/*                    <Link to={`/Kanbas/Courses/${course._id}`} className="btn btn-primary">*/}
            {/*                        {course.name}*/}
            {/*                    </Link>*/}
            {/*                    <p className="card-text">*/}
            {/*                        This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.*/}
            {/*                    </p>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    ))}*/}
            {/*</div>*/}
        </div>

    );
}
export default Dashboard;