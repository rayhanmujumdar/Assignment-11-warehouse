import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import './NavLink.css'

const NavLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <div>
      <Link
      className="relative z-10 duration-500"
        to={to}
        {...props}
      >
        {children}
      {match && <div className={`w-full absolute duration-200 h-1 bg-red-600 left-2/4 translate-x-[-50%]`}></div>}
      </Link>
    </div>
  );
};

export default NavLink;
