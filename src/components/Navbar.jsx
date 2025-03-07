import React from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center p-4 bg-white dark:bg-gray-900 shadow-md fixed top-0">
      {/* Left: Name */}
      <div className="text-2xl font-bold">
        <Link to="/" className="text-turquoise hover:scale-105 transition-transform duration-300 ease-in-out drop-shadow-lg">
          Ruan Bekker
        </Link>
      </div>

      {/* Right-Aligned Menu Items */}
      <div className="flex space-x-6 ml-auto mr-16">
        <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-turquoise transition duration-300 ease-in-out transform hover:scale-105">Home</Link>
        <Link to="/projects" className="text-gray-700 dark:text-gray-300 hover:text-turquoise transition duration-300 ease-in-out transform hover:scale-105">Projects</Link>
	<Link to="/resume" className="text-gray-700 dark:text-gray-300 hover:text-turquoise transition duration-300 ease-in-out transform hover:scale-105">Resume</Link>
        <Link to="/contact" className="text-gray-700 dark:text-gray-300 hover:text-turquoise transition duration-300 ease-in-out transform hover:scale-105">Contact</Link>
      </div>

      {/* Far Right: Dark Mode Toggle */}
      <div className="ml-4">
        <DarkModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;


