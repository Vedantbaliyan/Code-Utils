import React, { useState } from "react";
import { NavLink } from "react-router";
import { FiMenu, FiX } from "react-icons/fi"; // Correct Import

function MainHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-700 p-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-white text-3xl md:text-4xl font-bold">CodeUtils</h1>

        {/* Mobile Menu Button */}
        <button
          className="text-white text-3xl md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-7 text-xl text-cyan-200">
          <li className="hover:scale-105">
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "text-white" : "text-cyan-200"}`
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="hover:scale-105">
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "text-white" : "text-cyan-200"}`
              }
              to="/password"
            >
              Password Generator
            </NavLink>
          </li>
          <li className="hover:scale-105">
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "text-white" : "text-cyan-200"}`
              }
              to="/currency"
            >
              Currency Converter
            </NavLink>
          </li>
        </ul>

        {/* About Us Button (Desktop) */}
        <NavLink to="/about">
          <button className="hidden md:block p-3 text-xl text-white bg-cyan-900 rounded-2xl hover:scale-110">
            About Us
          </button>
        </NavLink>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="flex flex-col md:hidden gap-3 mt-3 text-xl text-cyan-200">
          <li>
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "text-white" : "text-cyan-200"}`
              }
              to="/"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "text-white" : "text-cyan-200"}`
              }
              to="/password"
              onClick={() => setIsMenuOpen(false)}
            >
              Password Generator
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "text-white" : "text-cyan-200"}`
              }
              to="/currency"
              onClick={() => setIsMenuOpen(false)}
            >
              Currency Converter
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>
              <button className="p-3 text-xl text-white bg-cyan-900 rounded-2xl w-full">
                About Us
              </button>
            </NavLink>
          </li>
        </ul>
      )}
    </header>
  );
}

export default MainHeader;
