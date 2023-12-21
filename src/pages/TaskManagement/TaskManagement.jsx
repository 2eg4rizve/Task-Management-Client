import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const TaskManagement = () => {

    const { user, logOut } = useContext(AuthContext);



    return (
        <div className="">
            <Navbar></Navbar>


            <div className="flex flex-col lg:flex-row px-[20px]">

                <div className="w-full lg:w-64 min-h-screen bg-blue-300 mr-[20px] ">

                    <ul className="p-[10px] menu ">

                        <li><NavLink to="/taskManagement/newTask">New Task</NavLink> </li>
                        <li><NavLink to="/taskManagement/previousTask">previousTask</NavLink> </li>
                        <li><NavLink to="/taskManagement/toDoList">toDoList</NavLink> </li>
                        <li><NavLink to="/taskManagement/ongoingList">ongoingList</NavLink> </li>
                        <li><NavLink to="/taskManagement/completeList">completeList</NavLink> </li>

                    </ul>

                    <div className="divider"></div>

                    <div className="btn btn-ghost btn-circle avatar ml-[10px]">
                        <div className="w-10 rounded-full">
                            <img src={user.photoURL} />
                        </div>
                    </div>

                    <p></p>


                    <button className="btn btn-sm  btn-ghost">{user.displayName}</button>
                    <button className="btn btn-sm  btn-ghost">{user.email}</button>


                    <button
                        onClick={logOut}
                        className="btn btn-sm btn-primary bg-[#F4E869] text-black ml-[10px]">
                        Logout
                    </button>



                </div>

                <div className="flex-1">
                    <Outlet></Outlet>
                </div>

            </div>






        </div>
    );
};

export default TaskManagement;