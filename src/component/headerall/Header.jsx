import { Outlet } from "react-router-dom";
import Navbar from "./nav/Navbar";
import Saerchbar from "../searchbar/Searchbar";
import Jsonfile from "../../Json/Jsonfile/Jsonfile";
// import '../searchbar/'
 
const Header = () => {
    return (
        <div className="Box">

            <div>
                <Navbar></Navbar>
            </div>

            {/* <Outlet></Outlet> */}
            <Saerchbar></Saerchbar>
            <Jsonfile></Jsonfile>

        </div>

    );
};

export default Header;