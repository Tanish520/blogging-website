
import React from 'react';
import { useNavigate } from 'react-router-dom';

const MyBlogs = ({ blogs, setEditBlog, openModal }) => {
  const navigate = useNavigate();

  const handleEdit = (blog) => {
    setEditBlog(blog); 
    navigate('/create'); 
  };

  const handleDelete = (id) => {
    openModal(id); 
  };

  return (
    <div className="my-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-4xl font-bold text-gray-900 dark:text-white mb-8">My Blogs</h2>
      {blogs.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center mt-12">
          <p className="text-xl font-medium text-gray-600">You haven't created any blogs yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-slate-300  rounded-lg shadow-md overflow-hidden hover:shadow-lg transform transition duration-300 hover:scale-105"
            >
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
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{blog.title}</h3>
                <p className="text-sm text-gray-500 mb-4">
                  <span>Date: {blog.date}</span> | <span>Time: {blog.time}</span>
                </p>
                <div
                  className="text-gray-700 text-sm max-h-24 overflow-hidden mb-4"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />
                {/* Edit and Delete Buttons */}
                <div className="flex justify-between mt-4">
                  <button
                    onClick={() => handleEdit(blog)}
                    className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded shadow-md hover:bg-blue-600 transition duration-300"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(blog.id)}
                    className="px-4 py-2 bg-red-500 text-white text-sm font-medium rounded shadow-md hover:bg-red-600 transition duration-300"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBlogs;
