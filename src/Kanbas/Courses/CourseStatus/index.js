import {Link, useLocation, useParams} from "react-router-dom";
import './status.css';
import {FaFileImport} from "react-icons/fa";
import {BiSolidBarChartAlt2, BiSolidFileImport} from "react-icons/bi";
import {GrAnnounce, GrEmptyCircle} from "react-icons/gr";
import {BsBarChartFill, BsFillBellFill} from "react-icons/bs";

function CourseStatus() {
    const buttons = ["ImportContent", "ImportCommons", "ChooseHomePage", "ViewCourseStream",
        "ViewAnnouncement", "NewAnalytics", "ViewNotification"];
    const { pathname } = useLocation();
    const { courseId } = useParams();
    const linkToTitleMap = {
        "ImportContent": "Import Existing Content",
        "ImportCommons": "Import From Commons",
        "ChooseHomePage": "Choose Home Page",
        "ViewCourseStream": "View Course Stream",
        "ViewAnnouncement" : "View Announcement",
        "NewAnalytics" : "New Analytics",
        "ViewNotification" : "View Course Notifications"
    }

    const linkToIconMap = {
        "ImportContent": <FaFileImport />,
        "ImportCommons": <BiSolidFileImport />,
        "ChooseHomePage": <GrEmptyCircle/>,
        "ViewCourseStream": <BsBarChartFill/>,
        "ViewAnnouncement" : <GrAnnounce />,
        "NewAnalytics" : <BiSolidBarChartAlt2 />,
        "ViewNotification" : <BsFillBellFill />
    }

    return (
        <div >
            {buttons.map((button, index) => (
                <div className=' wd-status-button'>
                    <Link
                        key={index}
                        to={`/Kanbas/Courses/${courseId}/${button}`}
                        className={`wd-status-button wd-status-icon ${pathname.includes(button)}`}
                    >
                        {linkToIconMap[button]}

                        {linkToTitleMap[button]}
                    </Link>
                </div>

            ))}
        </div>
    );

}
export default CourseStatus;