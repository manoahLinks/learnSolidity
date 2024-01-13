import { Outlet } from "react-router-dom";
import { Navbar, Sidebar } from "../components";

const Main = () => {
    return ( 
        <div className="flex flex-col h-screen w-full">
            <Navbar/>
            <div className="grid grid-cols-5 flex-1">
                <div>
                    <Sidebar/>
                </div>
                <div className="flex flex-1 bg-[#F5F5F5] col-span-4">
                    <Outlet/>
                </div>
            </div>
        </div>
     );
}
 
export default Main;