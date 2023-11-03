import React, { useState }  from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
} from "./modulesReducer";


function ModuleList() {
    const { courseId } = useParams();
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();


    // const modules = db.modules;
    return (
        <ul className="list-group">
            <li className="list-group-item">

                <div className="row">
                    <div className="col">
                        <div className="row">
                            <input value={module.name}
                                   onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))

                                   }/>
                        </div>
                        <div className="row">
                             <textarea value={module.description}
                                       onChange={(e) => setModule({
                                           ...module, description: e.target.value })}
                             />
                        </div>


                    </div>
                    <div className="col text-end">
                        <button className="btn btn-success" style={{marginRight: '10px'}} onClick={() => dispatch(addModule({ ...module, course: courseId }))}>Add</button>
                        <button className="btn btn-primary" onClick={() => dispatch(updateModule(module))}>Update</button>
                    </div>

                </div>



            </li>

            {
                modules
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <li key={index} className="list-group-item">

                            <div className="row">
                                <div className="col-9">
                                    <h3>{module.name}</h3>
                                    <p>{module.description}</p>
                                </div>

                                <div className="col-3 text-end">
                                    <button className="btn btn-warning" style={{marginRight:'10px'}}
                                        onClick={() => dispatch(setModule(module))} >
                                        Edit
                                    </button>

                                    <button className="btn btn-danger"
                                        onClick={() => dispatch(deleteModule(module._id))}>
                                        Delete
                                    </button>
                                </div>
                            </div>



                        </li>
                    ))
            }
        </ul>
    );
}
export default ModuleList;