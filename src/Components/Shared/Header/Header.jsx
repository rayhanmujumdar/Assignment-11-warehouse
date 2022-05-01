import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase/firebase.init";
import NavLink from "../NavLink/NavLink";
import "./Header.css";
const Header = () => {
  const [open, setOpen] = useState(false);
  const [user,loading,error] = useAuthState(auth)
  const handleNavIcon = (open) => {
    setOpen(open);
  };
  const handleSingOut = () => {
    signOut(auth)
  }
  return (
    <div>
      <nav className="relative w-full flex flex-wrap items-center justify-between py-3 bg-[#2C5364] text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light">
        <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
          <button
            onClick={() => handleNavIcon(!open)}
            className="navbar-toggler duration-500 text-gray-200 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent1"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {open ? (
              <i
                className={`fa-solid fa-x text-3xl duration-200 rotate-180`}
              ></i>
            ) : (
              <i className="fa fa-navicon text-3xl" aria-hidden="true"></i>
            )}
          </button>
          <div
            className="collapse navbar-collapse flex-grow items-center"
            id="navbarSupportedContent1"
          >
            <Link
              to="/"
              className="text-xl text-white pr-2 font-semibold"
              href="#"
            >
              <span className="text-amber-400">M</span>y
              <span className="text-2xl text-orange-600">C</span>hoose
              <span className="text-blue-500 text-2xl">H</span>ouse
            </Link>
            {/* Left links */}
            <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
              <li className="nav-item p-2">
                <NavLink to="home">Home</NavLink>
              </li>
            </ul>
            {/* Left links */}
          </div>
          {/* Collapsible wrapper */}
          {/* Right elements */}
          <div className={`flex items-center relative ${open && 'w-full justify-center my-3'}`}>
            <div className="flex items-center border px-2 py-1">
            <div>
            <i className="fa-solid fa-truck text-3xl mr-2"></i>
            </div>
              <div className="text-xs text-left">
                <p className="uppercase">free delivery</p>
                <p className="uppercase">from $ 250</p>
              </div>
            </div>
            {user ? <button
            onClick={handleSingOut}
              className="mx-3 px-4 py-2.5 border hover:bg-[#0F2027] hover:rounded-md duration-200 hover:border-0"
            >
              Sign out
            </button> : <Link
              to="login"
              className="mx-3 px-4 py-2.5 border hover:bg-[#0F2027] hover:rounded-md duration-200 hover:border-0"
            >
              Login
            </Link>}
            {/* Icon */}
            <div className="dropdown relative">
              <Link
                to="/profile"
                className="dropdown-toggle flex items-center hidden-arrow"
                href="#"
                id="dropdownMenuButton2"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                  className="rounded-full"
                  style={{ height: "40px", width: "40px" }}
                  alt=""
                  loading="lazy"
                />
              </Link>
            </div>
          </div>
          {/* Right elements */}
        </div>
      </nav>
    </div>
  );
};

export default Header;
