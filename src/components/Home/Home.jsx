
import { useState } from 'react';
import { Link } from 'react-router-dom';
import homeimg from "/src/assets/Homepageimage.png"
const Home = ({ blogs }) => {
  const [isDarkMode, setIsDarkMode] = useState(false); // State to track dark mode

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`mx-auto w-full max-w-7xl ${isDarkMode ? 'dark' : ''}`}>
      {/* Dark Mode Toggle Button */}
      <button
        onClick={toggleDarkMode}
        className="absolute top-4 right-4 px-4 py-2 bg-gray-700 text-white rounded-full shadow-md focus:outline-none"
      >
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>

      {/* Hero Section */}
      <aside className="relative overflow-hidden text-black dark:text-white rounded-lg sm:mx-16 mx-2 sm:py-16 bg-gradient-to-br from-purple-500 via-blue-500 to-indigo-600 dark:bg-gray-800 shadow-md hover:shadow-lg transform hover:scale-101 transition duration-300 ease-in-out">
        <div className="grid grid-cols-2 gap-4">
          <div className="relative inset-0 flex justify-center items-center">
            <img
              className="w-96 transform transition duration-500 ease-in-out hover:scale-110"
              // src="https://i.ibb.co/5BCcDYB/Remote2.png"
              src={homeimg}
              alt="Illustration of storytelling"
            />
          </div>
          <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
            <div className="max-w-xl sm:mt-1 mt-20 space-y-8 text-center sm:text-left sm:ml-auto">
              <h2 className="text-4xl font-extrabold text-white dark:text-yellow-300 sm:text-5xl leading-tight animate__animated animate__fadeInUp transition duration-500 ease-in-out">
                Share Your Story <br />
                <span className="text-yellow-300 hidden sm:block">Inspire the World</span>
              </h2>
              <Link
                className="inline-flex items-center px-6 py-3 text-lg font-semibold bg-orange-600 text-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-110 transition duration-300 ease-in-out"
                to="/create"
              >
                Create Your Blog
              </Link>
            </div>
          </div>
        </div>
      </aside>

      {/* Blogs Section */}
      <div className="my-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-4xl font-bold text-gray-900 dark:text-white mb-8">Latest Blogs</h2>
        {blogs.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center mt-12">
            <p className="text-xl font-medium text-gray-600 dark:text-gray-400">No blogs available now.</p>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Be the first to share your story with the world!</p>
            <Link
              to="/create"
              className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Create Your Blog
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <Link to={`/blog/${blog.id}`} key={blog.id}>
                <div className="bg-gray-300 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transform transition duration-300 hover:scale-105">
                  {/* Blog Image */}
                  {blog.image && (
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  {/* Blog Content */}
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{blog.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <span>Date: {blog.date}</span> | <span>Time: {blog.time}</span>
                    </p>
                    <div
                      className="text-gray-600 dark:text-gray-300 text-sm max-h-24 overflow-hidden"
                      dangerouslySetInnerHTML={{ __html: blog.content }}
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
