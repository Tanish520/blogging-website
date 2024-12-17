import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import BlogDetails from './components/BlogDetails/BlogDetails.jsx';
import About from './components/About/About.jsx';
import LoginRegister from './components/LoginRegister/LoginRegister.jsx';
import Contact from './components/Contact/Contact.jsx';
import CreateBlog from './components/CreateBlogs/CreateBlogs.jsx';
import MyBlogs from './components/MyBlogs/MyBlogs.jsx';
import Header from './components/Header/Header.jsx';

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [editBlog, setEditBlog] = useState(null); 

  const deleteBlog = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  const openModal = (id) => {
    // This is for confirmation
    if (window.confirm('Are you sure you want to delete this blog?')) {
      deleteBlog(id);
    }
  };

  return (
    <Router>
      <Header />
      <Routes>
        {/* Home Page */}
        <Route exact path="/" element={<Home blogs={blogs} />} />

        {/* Blog Details Page */}
        <Route path="/blog/:id" element={<BlogDetails blogs={blogs} />} />

        {/* About Page */}
        <Route path="/about" element={<About />} />

        {/* Contact Page */}
        <Route path="/contact" element={<Contact />} />

        {/* Login/Register Page */}
        <Route path="/login-register" element={<LoginRegister />} />

        {/* Create Blog Page */}
        <Route
          path="/create"
          element={<CreateBlog blogs={blogs} setBlogs={setBlogs} editBlog={editBlog} setEditBlog={setEditBlog} />}
        />

        {/* My Blogs Page */}
        <Route
          path="/blogs"
          element={<MyBlogs blogs={blogs} setEditBlog={setEditBlog} openModal={openModal} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
