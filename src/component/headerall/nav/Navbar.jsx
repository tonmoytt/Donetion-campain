import { NavLink } from "react-router-dom";
import img from "../../../assets/img/Logo.png"

const Navbar = () => {
    return (
        <div>
        <div className="grid md:flexlg:flex justify-between items-center m-4 md:m-10 lg:m-10">
            <img className="h-12 w-44"  src={img} alt="" />h
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