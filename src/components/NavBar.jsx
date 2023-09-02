import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../contexts/ThemeContext";

const NavBar = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const { isMenuOpen, setIsMenuOpen } = useStateContext();
  const location = useLocation(); // Get the current location

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Function to determine if a link is active based on the current location
  const isActiveLink = (pathname) => {
    return location.pathname === pathname
      ? `${darkMode ? "text-slate-300" : "text-blue-800"} `
      : "";
  };

  return (
    <header
      className="h-14 z-10 relative w-full 
    "
    >
      <nav className="flex items-center justify-between mx-4  md:mx-20">
        {/* Logo */}
        <Link to="/">
          <span
            style={{ fontFamily: "Caveat, cursive" }}
            className="text-25 mt-3 cursor-pointer"
          >
            Tomiwa Kukoyi
          </span>
        </Link>

        {/* Nav Items */}
        <div className="md:flex  md:ml-0 mt-3">
          {/*  menu items */}
          <div
            className={`${
              isMenuOpen
                ? "absolute mt-8 flex flex-col shadow-md border-t-0  border-white shadow-black left-1.5"
                : "hidden"
            } ${
              darkMode ? "bg-slate-900" : "bg-white"
            }  w-full md:flex md:relative md:flex-row  md:w-full md:space-x-1  font-normal  md:h-10 mt-3 md:mt-2 rounded-b-2xl md:rounded-2xl md:shadow md:shadow-black`}
          >
            <Link
              to="/"
              className={`px-5 py-4  flex items-center justify-center ${isActiveLink(
                "/"
              )}`}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="/portfolio"
              className={`px-5 py-4  flex items-center justify-center ${isActiveLink(
                "/portfolio"
              )}`}
              onClick={closeMenu}
            >
              Portfolio
            </Link>
            <Link
              to="/experience"
              className={`px-5 py-4  flex items-center justify-center ${isActiveLink(
                "/experience"
              )}`}
              onClick={closeMenu}
            >
              Experience
            </Link>
            <Link
              to="/contact"
              className={`px-5 py-4  flex items-center justify-center ${isActiveLink(
                "/contact"
              )}`}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </div>
        </div>

        <div className=" flex gap-3">
          {/* dropdown button */}
          <button
            onClick={toggleMenu}
            className={`${
              darkMode
                ? "  font-normal text-white"
                : "text-slate-900 font-semibold"
            } md:hidden mt-2 text-sm shadow-md shadow-black w-20 h-10 rounded-2xl p-2`}
          >
            Menu
          </button>
          {/* Theme toggler */}
          <div
            className={`${
              darkMode ? "shadow-sm " : ""
            } rounded-lg shadow-md shadow-black h-10 w-10 mt-2 flex items-center justify-center cursor-pointer`}
            onClick={toggleDarkMode}
          >
            <button onClick={toggleDarkMode}>
              {darkMode ? <FiSun /> : <FiMoon onClick={toggleDarkMode} />}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
