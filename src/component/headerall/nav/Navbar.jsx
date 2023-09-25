import { NavLink } from "react-router-dom";
import img from "../../../assets/img/Logo.png"

const Navbar = () => {
    return (
        <div>
        <div className="flex justify-between items-center m-10">
            <img className="h-16 w-26"  src={img} alt="" />
            <div>
                <ul className="flex gap-6 text-xl">
                    <li>
                        <NavLink to="/home" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-yellow-500 underline" : ""
                        }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/donation" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-yellow-500 underline" : ""
                        }
                        >
                            Donation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Statistics" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-yellow-500 underline" : ""
                        }
                        >
                            Statistics
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    );
};

export default Navbar;