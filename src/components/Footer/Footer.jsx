
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-gray-800 shadow-2xl p-6 transform hover:scale-105 transition-transform duration-300 rounded-2xl">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 text-white">
                <div className="md:flex md:justify-between items-center">
                    <div className="mb-6 md:mb-0 flex items-center">
                        <Link to="/" className="flex items-center transform hover:scale-110 transition-transform duration-300">
                            <img
                                src='https://neuform.in/static/media/logo_2.9f742ff68d0d47773a5d.png'
                                className="mr-3 h-16 drop-shadow-lg"
                                alt="Company Logo"
                            />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase transform translate-y-1 hover:translate-y-0 transition-all duration-300">Resources</h2>
                            <ul className="text-gray-300 font-medium">
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline hover:text-white">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:underline hover:text-white">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase transform translate-y-1 hover:translate-y-0 transition-all duration-300">Follow us</h2>
                            <ul className="text-gray-300 font-medium">
                                <li className="mb-4">
                                    <a
                                        href="https://github.com/hiteshchoudhary"
                                        className="hover:underline hover:text-white"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Github
                                    </a>
                                </li>
                                <li>
                                    <Link to="/" className="hover:underline hover:text-white">
                                        Discord
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase transform translate-y-1 hover:translate-y-0 transition-all duration-300">Legal</h2>
                            <ul className="text-gray-300 font-medium">
                                <li className="mb-4">
                                    <Link to="#" className="hover:underline hover:text-white">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:underline hover:text-white">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-600 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                        {['facebook', 'discord', 'twitter', 'github', 'dribbble'].map((icon, idx) => (
                            <Link
                                key={idx}
                                to="#"
                                className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300"
                            >
                                <svg
                                    className="w-6 h-6 shadow-lg"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    {/* Add paths for each icon here as you did before */}
                                </svg>
                                <span className="sr-only">{`${icon.charAt(0).toUpperCase() + icon.slice(1)} page`}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
