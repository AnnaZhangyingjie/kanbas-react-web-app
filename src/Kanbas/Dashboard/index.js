import db from "../Database";
import { Link } from "react-router-dom";

function Dashboard() {

    const courses = db.courses;
    return (
        // <div>
        //     <h1>Dashboard</h1>
        //     <hr />
        //     <h2>Published Courses({courses.length})</h2>
        //
        //     <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
        //
        //             {courses.map((course, index) => (
        //                 <div className="card">
        //                     <img src="/vendors/blue-background-088FDC-8ecd0503.jpg" class="card-img-top" alt="..." />
        //                     <div className="card-body">
        //                         <h5 className="card-title">{course.name}</h5>
        //
        //                         <Link
        //                             key={course._id}
        //                             to={`/Kanbas/Courses/${course._id}`}
        //                             className="btn btn-primary"
        //                         >
        //                             {course.name}
        //                         </Link>
        //                         <p className="card-text">
        //                             This is a longer card with supporting text below as a natural
        //                             lead-in to additional content. This content is a little bit
        //                             longer.
        //                         </p>
        //                     </div>
        //                 </div>
        //             ))}
        //
        //     </div>
        //
        // </div>

        <div className="container">
            <h1>Dashboard</h1>
            <hr />
            <h2>Published Courses ({courses.length})</h2>
            <div className="row">
                {courses.map((course, index) => (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3" key={course._id}>
                        <div className="card">
                            <img src="/vendors/blue-background-088FDC-8ecd0503.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{course.name}</h5>
                                <Link to={`/Kanbas/Courses/${course._id}`} className="btn btn-primary">
                                    {course.name}
                                </Link>
                                <p className="card-text">
                                    This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
}
export default Dashboard;