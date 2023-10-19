import ModuleList from "../Modules/ModuleList";
import {AiFillCheckCircle} from "react-icons/ai";
import {BsFillCalendarWeekFill, BsThreeDotsVertical} from "react-icons/bs";
import CourseStatus from "../CourseStatus";

function Home() {
    return (
        <div className="container">

            <div className="row">
                <div className="col-8">
                    <div className="d-flex justify-content-end" >
                        <button type="button" className="btn btn-secondary me-1" >Collapse All</button>
                        <button type="button" className="btn btn-secondary me-1" >View Progress</button>

                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle me-1" type="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                <AiFillCheckCircle color="green" size="1.5em"/>
                                Published All
                            </button>

                            <ul className="dropdown-menu">
                                <li>
                                    <button className="dropdown-item" type="button">Action</button></li>
                                <li>
                                    <button className="dropdown-item" type="button">Another action</button></li>
                                <li>
                                    <button className="dropdown-item" type="button">Something else here</button></li>
                            </ul>
                        </div>

                        <button type="button" className="btn btn-danger me-1">Module</button>
                        <button type="button" className="btn btn-secondary me-1" ><BsThreeDotsVertical/></button>
                    </div>


                    <h2>Home</h2>
                    <ModuleList />
                </div>

                <div className="col-4">
                    <h5>Course Status</h5>
                    <button className='btn btn-secondary' style={{marginLeft:'20px', marginBottom:'20px'}}>Unpublish</button>
                    <button className='btn btn-success' style={{marginLeft:'10px', marginBottom:'20px'}}>Published</button>
                    <CourseStatus />

                    <div className="row" style={{marginTop:'30px'}}>
                        <div className="col-4" style={{marginLeft:'20px'}}><p>Coming Up</p></div>

                        <div className="col-4 justify-content-end" style={{color:'red'}}>
                            <p><BsFillCalendarWeekFill style={{color:'red', marginRight:'2px'}}/>View Calendar</p></div>
                    </div>

                    <div className="row">
                        <div className="col-8" style={{marginLeft:'20px'}}>
                            <hr />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-2" style={{marginLeft:'20px'}}>
                            <BsFillCalendarWeekFill style={{color:'red', marginRight:'2px'}}/>
                        </div>

                        <div className="col-8">
                            <span style={{color:'red'}}>Lecture</span>
                            <p>CS4550.12631.202410 Sep 7 at 11:45am</p>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-2" style={{marginLeft:'20px'}}>
                            <BsFillCalendarWeekFill style={{color:'red', marginRight:'2px'}}/>
                        </div>

                        <div className="col-8">
                            <span style={{color:'red'}}>Lecture</span>
                            <p>CS5610.11744.202310 Sep 9 at 11:45am</p>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    );
}
export default Home;
