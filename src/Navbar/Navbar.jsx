import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className="font-workSans navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/listed">Listed Books</NavLink>
                            <NavLink to="/pageToRead">Pages to Read</NavLink>
                            
                        </ul>
                    </div>
                    <Link to="/" className="text-3xl font-semibold">Boi Poka</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu text-lg menu-horizontal px-1 navCont">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/listed">Listed Books</NavLink>
                        <NavLink to="/pageBar">Pages to Read</NavLink>
                        
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link  to="/forms" className="btn bg-primary hover:bg-primaryHover  text-white">Sign Up</Link>
                    <Link to="/forms" className="btn bg-secendary hover:bg-secendaryHover text-white">Log In</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;