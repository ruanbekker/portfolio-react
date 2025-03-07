import React from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center p-4 bg-white dark:bg-gray-900 shadow-md fixed top-0">
      {/* Left: Name */}
      <div className="text-xl font-bold">
        <Link to="/" className="text-turquoise">Ruan Bekker</Link>
      </div>

      {/* Right-Aligned Menu Items */}
      <div className="flex space-x-6 ml-auto mr-16">
        <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-turquoise">Home</Link>
        <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-turquoise">Projects</a>
        <Link to="/resume" className="text-gray-700 dark:text-gray-300 hover:text-turquoise">Resume</Link>
        <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-turquoise">Contact</a>
      </div>

      {/* Far Right: Dark Mode Toggle */}
      <div className="ml-4">
        <DarkModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;


