import * as client from "./client"
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Navigate} from "react-router";
import {BsFillCheckCircleFill, BsPencil, BsPlusCircleFill, BsTrash3Fill} from "react-icons/bs";
function UserList() {
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const [user, setUser] = useState({ username: "", password: "", role: "USER" });

    const selectUser = async (user) => {
        try {
            const u = await client.findUserById(user._id);
            setUser(u);
        } catch (err) {
            console.log(err);
        }
    };

    const updateUser = async () => {
        try {
            const status = await client.updateUser(user._id, user);
            setUsers(users.map((u) => (u._id === user._id ? user : u)));
        } catch (err) {
            console.log(err);
        }
    };

    const deleteUser = async (user) => {
        try {
            await client.deleteUser(user._id);
            setUsers(users.filter((u) => u._id !== user._id));
        } catch (err) {
            console.log(err);
        }
    };



    const createUser = async () => {
        try {
            const newUser = await client.createUser(user);
            setUsers([newUser, ...users]);
        } catch (err) {
            console.log(err);
        }
    };


    const fetchUser = async () => {
        const user = await client.account();
        setCurrentUser(user);
    };
    const fetchUsers = async() => {
        const users = await client.findAllUsers();
        setUsers(users);
    }

    useEffect(() => {
        fetchUsers();
        fetchUser();
    }, []);

    return (
        <div>
            {currentUser && currentUser.role === "ADMIN" && (
                <>
                    <h2>Users</h2>

                    <table className="table">
                        <thead>
                        <tr>
                            <th>Username</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                        </tr>
                        <tr>
                            <td>
                                <input value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })}/>
                                <input value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })}/>

                            </td>
                            <td>
                                <input value={user.firstName} onChange={(e) => setUser({ ...user, firstName: e.target.value })}/>
                            </td>
                            <td>
                                <input value={user.lastName} onChange={(e) => setUser({ ...user, lastName: e.target.value })}/>
                            </td>
                            <td>
                                <select value={user.role} onChange={(e) => setUser({ ...user, role: e.target.value })}>
                                    <option value="USER">User</option>
                                    <option value="ADMIN">Admin</option>
                                    <option value="FACULTY">Faculty</option>
                                    <option value="STUDENT">Student</option>
                                </select>
                            </td>
                            <td className="text-nowrap">
                                <BsFillCheckCircleFill onClick={updateUser}
                                                       className="me-2 text-success fs-1 text" />
                                <BsPlusCircleFill onClick={createUser}/>
                            </td>
                        </tr>
                        </thead>
                        <tbody>
                        {users.map((user) => (
                            <tr key={user._id}>
                                <td>
                                    <Link to={`/project/account/${user._id}`}>
                                        {user.username}
                                    </Link>
                                </td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <button className="btn btn-warning me-2">
                                    <BsPencil onClick={() => selectUser(user)} />
                                </button>
                                <button className="btn btn-danger me-2" >
                                    <BsTrash3Fill onClick={() => deleteUser(user)}/>
                                </button>
                            </tr>))}
                        </tbody>
                    </table>


                    {/*<div className="list-group">*/}
                    {/*    {users.map((user) => (*/}
                    {/*        <Link*/}
                    {/*            key={user._id}*/}
                    {/*            to={`/project/users/${user._id}`}*/}
                    {/*            className="list-group-item"*/}
                    {/*        >*/}
                    {/*            {user.username}*/}
                    {/*        </Link>*/}
                    {/*    ))}*/}
                    {/*</div>*/}
                </>
            )}
            {currentUser && currentUser.role !== "ADMIN" && (
                <Navigate to="/project/signin" />
            )}
        </div>
    );
}
export default UserList;