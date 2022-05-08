import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase/firebase.init";
import NavLink from "../NavLink/NavLink";
import emptyImg from "../../../image/empty-img.jpg";
import "./Header.css";
import useNav from "../../../hooks/useNav";
import Loading from "../Loading/Loading";
const Header = () => {
  const [open, setOpen] = useState(false);
  const [user] = useAuthState(auth);
  const [nav] = useNav();
  const handleNavIcon = (open) => {
    setOpen(open);
  };
  const handleSingOut = () => {
    signOut(auth);
  };
  return (
    <div
      className={`${nav ? "sticky z-10 top-0" : "top-[-80px]"} duration-500`}
    >
      <nav
        className={`relative w-full flex flex-wrap items-center justify-between py-3 bg-[#2C5364] text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light`}
      >
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
            <ul className="navbar-nav flex flex-col justify-center items-center md:mx-auto pl-0 list-style-none mr-auto">
              <li className="nav-item p-2">
                <NavLink to="home">Home</NavLink>
              </li>
              <li className="nav-item p-2">
                <NavLink to="items">Items</NavLink>
              </li>
              <li>
                <button
                  className="
        p-2
          dropdown-toggle
          text-white
          font-medium
          leading-tight
          transition
          duration-150
          ease-in-out
          flex
          items-center
          whitespace-nowrap
        "
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Inventory
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="caret-down"
                    className="w-2 ml-2"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path
                      fill="currentColor"
                      d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                    />
                  </svg>
                </button>
                <ul
                  className="
          dropdown-menu
          min-w-max
          absolute
          bg-white
          text-base
          z-50
          float-left
          py-2
          list-none
          text-left
          rounded-lg
          shadow-lg
          mt-1
          m-0
          bg-clip-padding
          border-none
          hidden
        "
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <NavLink
                      to="manage-items"
                      className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                    >
                      Manage items
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="add-item"
                      className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                    >
                      Add Item
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="my-items"
                      className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                      href="#"
                    >
                      My Items
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item p-2">
                <NavLink to="blogs">Blogs</NavLink>
              </li>
            </ul>
            {/* Left links */}
          </div>
          {/* Collapsible wrapper */}
          {/* Right elements */}
          <div
            className={`flex items-center relative ${
              open && "w-full justify-center my-3"
            }`}
          >
            <div className="flex items-center border px-2 py-1">
              <div>
                <i className="fa-solid fa-truck text-3xl mr-2"></i>
              </div>
              <div className="text-xs text-left">
                <p className="uppercase">free delivery</p>
                <p className="uppercase">from 15000 ৳</p>
              </div>
            </div>
            {user ? (
              <button
                onClick={handleSingOut}
                className="mx-3 px-4 py-2.5 border hover:bg-[#0F2027] hover:rounded-md duration-200 hover:border-0"
              >
                Sign out
              </button>
            ) : (
              <Link
                to="login"
                className="mx-3 px-4 py-2.5 border hover:bg-[#0F2027] hover:rounded-md duration-200 hover:border-0"
              >
                Login
              </Link>
            )}
            {/* Icon */}
            <div className="dropdown relative">
              <Link
                to="/profile"
                className="dropdown-toggle flex items-center hidden-arrow"
              >
                <img
                  src={user?.photoURL || emptyImg}
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
