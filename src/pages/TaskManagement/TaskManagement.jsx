import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";


const TaskManagement = () => {
    return (
        <div className="">
            <Navbar></Navbar>


            <div className="flex flex-col lg:flex-row px-[20px]">

                <div className="w-full lg:w-64 min-h-screen bg-blue-300 mr-[20px] space-y-10">

                    <ul className="p-[10px] menu ">

                        <li><NavLink to="/taskManagement/newTask">New Task</NavLink> </li>
                        <li><NavLink to="/taskManagement/previousTask">previousTask</NavLink> </li>
                        <li><NavLink to="/taskManagement/toDoList">toDoList</NavLink> </li>
                        <li><NavLink to="/taskManagement/ongoingList">ongoingList</NavLink> </li>
                        <li><NavLink to="/taskManagement/completeList">completeList</NavLink> </li>

                    </ul>

                </div>

                <div className="flex-1">
                    <Outlet></Outlet>
                </div>

            </div>






        </div>
    );
};

export default TaskManagement;