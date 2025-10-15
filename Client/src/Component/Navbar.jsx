import React, { useState } from "react";
import logo from "../assets/Nitinjcb.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-yellow-100 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src={logo}
            alt="EarthMovers Logo"
            className="h-12 w-12 object-cover rounded-full border-2 border-yellow-600"
          />
          <h1 className="text-2xl font-bold text-yellow-700">
            Shri ChandikaMata <span className="text-gray-800">EarthMovers</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li>
            <Link to="/" className="hover:text-yellow-700 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-yellow-700 transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/team" className="hover:text-yellow-700 transition">
              Team
            </Link>
          </li>
          <li>
            <Link to="/machinery" className="hover:text-yellow-700 transition">
              Machinery
            </Link>
          </li>
          <li>
            <Link to="/reviews" className="hover:text-yellow-700 transition">
              Reviews
            </Link>
          </li>
          <li>
            <Link to="/location" className="hover:text-yellow-700 transition">
              Location
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-yellow-100 px-6 pb-4 space-y-2 text-gray-700 font-medium transition-all">
          <li>
            <Link to="/" className="block hover:text-yellow-700 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="block hover:text-yellow-700 transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/team" className="block hover:text-yellow-700 transition">
              Team
            </Link>
          </li>
          <li>
            <Link to="/machinery" className="block hover:text-yellow-700 transition">
              Machinery
            </Link>
          </li>
          <li>
            <Link to="/reviews" className="block hover:text-yellow-700 transition">
              Reviews
            </Link>
          </li>
          <li>
            <Link to="/location" className="block hover:text-yellow-700 transition">
              Location
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
