
import React, { useState, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useNavigate } from 'react-router-dom';

export default function CreateBlog({ blogs, setBlogs, editBlog, setEditBlog }) {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Load existing blog data when editing
  useEffect(() => {
    if (editBlog) {
      setTitle(editBlog.title || '');
      setImage(editBlog.image || null);
      setContent(editBlog.content || '');
    } else {
      resetForm();
    }
  }, [editBlog]);

  // Handle image upload
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = () => {
    if (image) URL.revokeObjectURL(image);
    setImage(null);
  };

  // Handle editor content change
  const handleEditorChange = (newContent) => {
    setContent(newContent);
    setWordCount(newContent.trim().split(/\s+/).filter(Boolean).length);
  };

  // Validate form data
  const validateForm = () => {
    if (!title.trim()) {
      setError('Please provide a title for the blog.');
      return false;
    }
    if (!content.trim()) {
      setError('Please add content to your blog.');
      return false;
    }
    setError('');
    return true;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);

    setTimeout(() => {
      const currentDate = new Date();
      const newPost = {
        id: editBlog ? editBlog.id : Date.now(),
        title: title.trim(),
        image,
        content,
        date: currentDate.toLocaleDateString(),
        time: currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      if (editBlog) {
        setBlogs(blogs.map((blog) => (blog.id === editBlog.id ? newPost : blog)));
        setEditBlog(null);
      } else {
        setBlogs([...blogs, newPost]);
      }

      setSuccessMessage(editBlog ? 'Blog updated successfully!' : 'Blog created successfully!');
      resetForm();
      setIsLoading(false);

      setTimeout(() => setSuccessMessage(''), 3000);

      // Redirect to My Blogs after saving
      navigate('/blogs');
    }, 1000);
  };

  // Reset form fields
  const resetForm = () => {
    setTitle('');
    setImage(null);
    setContent('');
    setWordCount(0);
    setError('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-slate-300 dark:bg-slate-900 text-black dark:text-gray-300">
      <div className="w-full max-w-3xl p-8 rounded-lg shadow-2xl transition-transform transform hover:scale-104 bg-slate-200 dark:bg-slate-600">
        <h2 className="text-4xl font-bold text-center mb-6">
          {editBlog ? 'Edit Blog' : 'Create a New Blog'}
        </h2>

        {/* Error Message */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {/* Title Input */}
        <div className="mb-6">
          <label htmlFor="title" className="block text-lg font-semibold mb-2">
            Blog Title:
          </label>
          <input
            type="text"
            id="title"
            placeholder="Enter blog title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 bg-slate-400 border-black"
          />
        </div>

        {/* Image Upload */}
        <div className="mb-6">
          <label htmlFor="image" className="block text-lg font-semibold mb-2">
            Upload Image:
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 bg-slate-400 border-black"
          />
          {image && (
            <div className="mt-4 relative">
              <img
                src={image}
                alt="Uploaded preview"
                className="w-full max-h-64 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
              />
              <button
                onClick={handleRemoveImage}
                className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-700 transform hover:scale-110 transition-all duration-300"
                aria-label="Remove image"
              >
                ✕
              </button>
            </div>
          )}
        </div>

        {/* Content Editor */}
        <div className="mb-6 border-black rounded-3xl">
          <Editor
            apiKey="vv2cve698hfjcwob1xqwplyn8shch92rukqvef5srkuoro8b"
            init={{
              plugins: ['anchor autolink lists link table emoticons', 'wordcount'],
              toolbar:
                'undo redo | bold italic underline | alignleft aligncenter alignright | bullist numlist | link | emoticons',
              content_style: `
                body {
                  background-color: #ffffff;
                  color: #2d3748;
                  font-family: Arial, sans-serif;
                }
                @media (prefers-color-scheme: dark) {
                  body {
                    background-color: #94A3B8;
                    color: #000000; /* Ensure text remains black in dark mode */
                  }
                }
              `,
            }}
            value={content}
            onEditorChange={handleEditorChange}
            className="border-2 border-black rounded-lg p-4"
          />
          <p className="text-sm mt-2">Word count: {wordCount}</p>
        </div>

        {/* Success Message */}
        {successMessage && (
          <p className="text-green-500 text-center mb-4">{successMessage}</p>
        )}

        {/* Submit and Cancel Buttons */}
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className={`px-6 py-3 rounded-full text-lg font-semibold shadow-lg transform hover:scale-110 transition-all duration-300 ${
              isLoading
                ? 'opacity-50 cursor-not-allowed'
                : 'bg-gray-600 hover:bg-gray-500 text-black border-black'
            }`}
          >
            {isLoading ? 'Saving...' : editBlog ? 'Update Blog' : 'Submit Blog'}
          </button>
          <button
            onClick={() => {
              setEditBlog(null);
              navigate('/blogs');
            }}
            className="px-6 py-3 rounded-full text-lg font-semibold shadow-lg transform hover:scale-110 transition-all duration-300 bg-gray-500 hover:bg-gray-400 text-black border-black"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

