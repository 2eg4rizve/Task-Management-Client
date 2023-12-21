import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";



const Root = () => {
    return (
        <div className="px-[40px]">

            <Navbar></Navbar>

            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;