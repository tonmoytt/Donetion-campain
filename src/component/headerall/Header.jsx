import { Outlet } from "react-router-dom";
import Navbar from "./nav/Navbar";

import '../searchbar/Color.css'
 
const Header = () => {
    return (
       <div className="w-full" style={{ }}>
         <div className="hero-overlay bg-opacity-60"></div>

            <div>
                <Navbar></Navbar>
            </div>

            <Outlet></Outlet>
            
        </div>

    );
};

export default Header;