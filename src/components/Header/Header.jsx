
import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { MdLightMode, MdOutlineLightMode } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "/src/assets/logoneuform.png"

export default function Header() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle dark/light mode
    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    // Toggle dropdown menu
    const toggleMenu = () => {
        setIsMenuOpen((prevOpen) => !prevOpen);
    };

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [isDarkMode]);

    return (
        <header
            className={`sticky z-50 top-0 shadow-lg transition-all duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}
        >
            <nav
                className={`border-gray-200 px-4 lg:px-6 py-3 rounded-lg shadow-xl transition-colors duration-500 ${
                    isDarkMode ? 'bg-gray-800' : 'bg-gradient-to-r from-gray-100 to-gray-300'
                }`}
            >
                <div className="flex items-center justify-between mx-auto max-w-screen-xl relative">
                    {/* Logo Section */}
                    <Link
                        to="/"
                        className="flex items-center transform hover:scale-105 transition-transform duration-300 dark:bg-slate-400 dark:rounded-3xl"
                    >
                        <img
                            // src="https://neuform.in/static/media/logo_2.9f742ff68d0d47773a5d.png"
                            src={logo}
                            className="mr-3 h-12 rounded-full shadow-lg"
                            alt="Logo"
                        />
                    </Link>

                    {/* Center Navigation Links */}
                    <div className="hidden lg:flex flex-grow justify-center">
                        <ul className="flex space-x-8 font-medium">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'About', path: '/about' },
                                { name: 'Contact', path: '/contact' },
                                { name: 'Create', path: '/create' },
                                { name: 'MyBlogs', path: '/blogs' },
                            ].map((link) => (
                                <li key={link.name}>
                                    <NavLink
                                        to={link.path}
                                        className={({ isActive }) =>
                                            `py-2 px-3 rounded-lg transform hover:scale-105 transition-transform ${
                                                isActive
                                                    ? 'text-orange-500 font-semibold'
                                                    : isDarkMode
                                                    ? 'text-gray-300 hover:text-white'
                                                    : 'text-gray-800 hover:text-orange-600'
                                            }`
                                        }
                                    >
                                        {link.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Section - Login and Dark Mode */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <button
                            onClick={toggleTheme}
                            className={`flex items-center justify-center text-sm px-4 py-2.5 rounded-lg font-medium shadow-md transform hover:scale-105 transition-all duration-300 ${
                                isDarkMode ? 'text-white bg-gray-700 hover:bg-gray-600' : 'text-gray-900 bg-gray-100 hover:bg-gray-200'
                            }`}
                        >
                            {isDarkMode ? <MdLightMode size={24} /> : <MdOutlineLightMode size={24} />}
                        </button>

                        <Link
                            to="/Login-Register"
                            className={`text-sm px-4 py-2.5 rounded-lg font-medium shadow-md transform hover:scale-105 transition-all duration-300 ${
                                isDarkMode ? 'text-white bg-gray-700 hover:bg-gray-600' : 'text-gray-900 bg-gray-100 hover:bg-gray-200'
                            }`}
                        >
                            Login
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle Button */}
                    <button
                        onClick={toggleMenu}
                        className="lg:hidden text-gray-800 dark:text-gray-300 text-2xl focus:outline-none"
                    >
                        {isMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>

                    {/* Dropdown Menu for Mobile */}
                    <div
                        className={`${
                            isMenuOpen ? 'block' : 'hidden'
                        } absolute top-14 right-0 w-48 bg-gray-100 dark:bg-gray-800 lg:hidden shadow-lg rounded-lg z-50`}
                    >
                        <ul className="flex flex-col items-start p-4 space-y-4 font-medium">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'About', path: '/about' },
                                { name: 'Contact', path: '/contact' },
                                { name: 'Create', path: '/create' },
                                { name: 'MyBlogs', path: '/blogs' },
                            ].map((link) => (
                                <li key={link.name} className="w-full">
                                    <NavLink
                                        to={link.path}
                                        className={({ isActive }) =>
                                            `block py-2 px-3 rounded-lg transform hover:scale-105 transition-transform w-full ${
                                                isActive
                                                    ? 'text-orange-500 font-semibold'
                                                    : isDarkMode
                                                    ? 'text-gray-300 hover:text-white'
                                                    : 'text-gray-800 hover:text-orange-600'
                                            }`
                                        }
                                        onClick={() => setIsMenuOpen(false)} // Close menu on link click
                                    >
                                        {link.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>

                        {/* Mobile Buttons */}
                        <div className="flex flex-col items-start p-4 space-y-4 border-t border-gray-300 dark:border-gray-700">
                            <button
                                onClick={toggleTheme}
                                className={`flex items-center justify-center text-sm px-4 py-2.5 rounded-lg font-medium shadow-md transform hover:scale-105 transition-all duration-300 w-full ${
                                    isDarkMode ? 'text-white bg-gray-700 hover:bg-gray-600' : 'text-gray-900 bg-gray-100 hover:bg-gray-200'
                                }`}
                            >
                                {isDarkMode ? <MdLightMode size={24} /> : <MdOutlineLightMode size={24} />}
                            </button>

                            <Link
                                to="/Login-Register"
                                className={`text-sm px-4 py-2.5 rounded-lg font-medium shadow-md transform hover:scale-105 transition-all duration-300 w-full text-center ${
                                    isDarkMode ? 'text-white bg-gray-700 hover:bg-gray-600' : 'text-gray-900 bg-gray-100 hover:bg-gray-200'
                                }`}
                                onClick={() => setIsMenuOpen(false)} // Close menu on link click
                            >
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
