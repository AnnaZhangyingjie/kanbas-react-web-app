import { Link, useLocation } from "react-router-dom";
import {BiUserCircle} from "react-icons/bi"
import {RiDashboard3Fill} from "react-icons/ri"
import {FaBook, FaNetworkWired} from "react-icons/fa";
import {BsFillCalendar2WeekFill}from "react-icons/bs"
import "./index.css";
import {HiMiniInbox, HiMiniSquare3Stack3D} from "react-icons/hi2";
import {FaClockRotateLeft} from "react-icons/fa6";
import {AiFillQuestionCircle} from "react-icons/ai";

function KanbasNavigation() {
    const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];

    const linkToIconMap = {
        "Account": <BiUserCircle className='wd-icon'/>,
        "Dashboard": <RiDashboard3Fill className='wd-icon'/>,
        "Courses" : <FaBook className='wd-icon'/>,
        "Calendar" : <BsFillCalendar2WeekFill className='wd-icon'/>,
        "Inbox": <HiMiniInbox className='wd-icon'/>,
        "History": <FaClockRotateLeft className='wd-icon'/>,
        "Studio": <FaNetworkWired className='wd-icon'/>,
        "Commons": <HiMiniSquare3Stack3D className='wd-icon'/>,
        "Help": <AiFillQuestionCircle className='wd-icon'/>
    };

    const { pathname } = useLocation();
    return (
        <div className="list-group wd-kanbas-navigation" style={{ width: 150 }}>
            <img
                src="/vendors/NEU%20icon.png"
                style={{ width: '70px', height: '70px', marginLeft:'40px'}}
            />
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={`/Kanbas/${link}`}
                    className={`list-group-item ${pathname.includes(link) && "active"}`}>
                    {linkToIconMap[link]}
                    <br />
                    {link}
                </Link>
            ))}
        </div>
    );
}
export default KanbasNavigation;