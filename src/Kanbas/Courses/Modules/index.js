import ModuleList from "./ModuleList";
import {AiFillCheckCircle} from "react-icons/ai";
import {BsThreeDotsVertical} from "react-icons/bs";

function Modules() {
    return (
        <div className='col-8' >
            <h2>Modules</h2>
            <div className="d-flex justify-content-end" style={{marginBottom:'20px'}}>
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
            <ModuleList />
        </div>
    );
}
export default Modules;
