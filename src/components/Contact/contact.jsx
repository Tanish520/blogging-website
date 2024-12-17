

import React from 'react';

export default function Contact() {
    return (
        <div className="relative flex items-top justify-center min-h-[700px] bg-slate-400 sm:items-center dark:bg-slate-700 sm:pt-0">
            <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                <div className="mt-8 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 mr-2 bg-gray-100 dark:bg-slate-300 sm:rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                            <h1 className="text-4xl text-gray-800 font-extrabold tracking-tight">
                                Get in touch:
                            </h1>
                            <p className="text-lg font-medium text-gray-600 mt-2">
                                Fill in the form to start a conversation
                            </p>

                            <div className="flex items-center mt-8 text-gray-600 animate-pulse">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500 transition transform duration-200 hover:scale-125"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    Acme Inc, Street, State, Postal Code
                                </div>
                            </div>

                            <div className="flex items-center mt-4 text-gray-600 animate-pulse">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500 transition transform duration-200 hover:scale-125"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    +91 1234567890
                                </div>
                            </div>

                            <div className="flex items-center mt-2 text-gray-600 animate-pulse">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500 transition transform duration-200 hover:scale-125"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    abcd@gmail.com
                                </div>
                            </div>
                        </div>

                        <form className="p-6 flex flex-col justify-center space-y-4 shadow-lg rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                            <div className="flex flex-col">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Full Name"
                                    className="mt-2 py-3 px-3 rounded-lg bg-white dark:bg-slate-300 border border-gray-400 text-gray-800 font-semibold focus:border-blue-500 focus:outline-none transform transition duration-300 hover:shadow-lg hover:scale-105"
                                />
                            </div>

                            <div className="flex flex-col">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    className="mt-2 py-3 px-3 rounded-lg bg-white dark:bg-slate-300 border border-gray-400 text-gray-800 font-semibold focus:border-blue-500 focus:outline-none transform transition duration-300 hover:shadow-lg hover:scale-105"
                                />
                            </div>

                            <div className="flex flex-col">
                                <input
                                    type="tel"
                                    name="tel"
                                    id="tel"
                                    placeholder="Telephone Number"
                                    className="mt-2 py-3 px-3 rounded-lg bg-white dark:bg-slate-300 border border-gray-400 text-gray-800 font-semibold focus:border-blue-500 focus:outline-none transform transition duration-300 hover:shadow-lg hover:scale-105"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full md:w-32 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg mt-3 transform transition duration-300 hover:scale-105 focus:outline-none focus:shadow-outline"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
