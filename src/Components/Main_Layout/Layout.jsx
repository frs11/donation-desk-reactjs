// import { createContext, useState } from "react";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

// export const CardContext = createContext();

const Layout = () => {

    const [open, setOpen] = useState(false)
  
    return (
      <div>

      <div className="w-10/12 mx-auto">
      <div className="bg-white mt-8">
        <div className="flex justify-between">
        <div>
              <img className="w-2/3 lg:w-10/12" src="https://i.ibb.co/mhxWFJR/Logo.png" />
          </div>
          <div>
            <div className="dropdown dropdown-end " onClick={() => setOpen(!open)}>
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul className={`menu menu-sm dropdown-content mt-3 z-[1] ${open ? "" : "hidden"} shadow bg-base-100 rounded-lg`}>
                  <li> <NavLink to="/" className={({ isActive, isPending }) =>
                          isPending ? "pending" : isActive ? "underline text-red-500 font-bold" : ""}>Home</NavLink> </li>
                  <li> <NavLink to="/donation" className={({ isActive, isPending }) =>
                          isPending ? "pending" : isActive ? "underline text-red-500 font-bold" : ""}>Donation</NavLink> </li>
                  <li> <NavLink to="/statistics" className={({ isActive, isPending }) =>
                          isPending ? "pending" : isActive ? "underline text-red-500 font-bold" : ""}>Statistics</NavLink> </li>
                          
              </ul>
            </div>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
            <li> <NavLink to="/" className={({ isActive, isPending }) =>
                          isPending ? "pending" : isActive ? "underline text-red-500 font-bold" : ""
                      }>Home</NavLink> </li>
                  <li> <NavLink to="/donation" className={({ isActive, isPending }) =>
                          isPending ? "pending" : isActive ? "underline text-red-500 font-bold" : ""}>Donation</NavLink> </li>
                  <li> <NavLink to="/statistics" className={({ isActive, isPending }) =>
                          isPending ? "pending" : isActive ? "underline text-red-500 font-bold" : ""}>Statistics</NavLink> </li>
            </ul>
          </div>
        </div>
        </div>
      </div>  
          
          <div>
            <Outlet></Outlet>
          </div>

      </div>
    );
  
};

export default Layout;