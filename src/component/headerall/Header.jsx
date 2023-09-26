import { Outlet } from "react-router-dom";
import Navbar from "./nav/Navbar";

import '../searchbar/Color.css'
 
const Header = () => {
    return (
        <div className="Box">

            <div>
                <Navbar></Navbar>
            </div>

            <Outlet></Outlet>
            
        </div>

    );
};

export default Header;