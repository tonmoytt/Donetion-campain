 
import { Outlet } from "react-router-dom";
import Navbar from "./nav/Navbar";
import Saerchbar from "../Saerchbar/Saerchbar";

 

const Header = () => {
    return (
        <div>
        
        <div className="flex justify-between m-10 items-center shadow-md">
          {/* <img src="I" alt="" /> */}
          <p>hl</p>
             <Navbar></Navbar>
             <Outlet></Outlet>
             </div>
            
             <Saerchbar></Saerchbar>
           
             
        </div>
       
    );
};

export default Header;