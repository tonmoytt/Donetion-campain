import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav>
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
            </nav>
        </div>
    );
};

export default Navbar;