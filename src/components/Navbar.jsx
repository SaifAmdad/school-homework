import React from "react";
import { NavLink } from "react-router";

function Navbar() {
  const navlinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navlinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Farhana</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navlinks}</ul>
        </div>
        <div className="navbar-end">
          <img
            className="h-7 w-7 rounded-full border border-amber-300"
            src="https://scontent.ffjr1-1.fna.fbcdn.net/v/t39.30808-6/242201080_1176807096141369_1112973897326928690_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Umv_L_mQdmYQ7kNvwFAUL2I&_nc_oc=AdqY5DVoC_ZC3iCSbwb-MKffdjQD6tmNArDYmgaN1TczHqhTrSEVtYr5s-GvlxWcb0I&_nc_zt=23&_nc_ht=scontent.ffjr1-1.fna&_nc_gid=2I4SjWn30KwNs6_dsV5WBQ&_nc_ss=7b289&oh=00_Af7phDAFZzjmrbXXr4WXu59ibyAl-AIYsxoNPqjo7cDNRA&oe=6A0D5C46"
            alt="img"
            srcSet=""
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
