
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BlogDetails = ({ blogs }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the blog with the matching id
  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return (
      <div className="text-center my-16">
        <h2 className="text-2xl font-bold text-red-600">Blog not found!</h2>
        <button
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
          onClick={() => navigate('/')}
        >
          Go Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto my-16 px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{blog.title}</h1>
        <p className="text-sm text-gray-500 mb-6">
          Published on: {blog.date} at {blog.time}
        </p>
        {blog.image && (
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-auto rounded-md mb-6"
          />
        )}
        <div
          className="text-gray-700 text-lg leading-relaxed"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
        <button
          className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
          onClick={() => navigate('/')}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default BlogDetails;
