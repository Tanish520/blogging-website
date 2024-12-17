
import React, { useState } from 'react';
import { FaRegUser, FaLock, FaEnvelope } from "react-icons/fa";
import loginImage from "/src/assets/loginImage.jpg";

function LoginRegister() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-center bg-cover" style={{ backgroundImage: `url(${loginImage})` }}>
      <div className={`relative w-96 ${isLogin ? 'h-[450px]' : 'h-[520px]'} bg-opacity-20 border border-gray-200 backdrop-blur-md rounded-lg shadow-lg text-white transition-all duration-200 ease-linear flex items-center justify-center`}>
        
        {/* Login Form .............................. */}
        {isLogin ? (
          <div className="w-full p-10 transform transition-transform duration-150">
            <form>
              <h1 className="text-3xl font-bold text-center mb-8">Login</h1>
              
              <div className="relative mb-8">
                <input type="text" placeholder="Username" required className="w-full py-3 px-4 bg-transparent border border-gray-200 rounded-full text-lg placeholder-white focus:outline-none" />
                <FaRegUser className="absolute top-1/2 right-5 transform -translate-y-1/2 text-lg text-white" />
              </div>

              <div className="relative mb-8">
                <input type="password" placeholder="Password" required className="w-full py-3 px-4 bg-transparent border border-gray-200 rounded-full text-lg placeholder-white focus:outline-none" />
                <FaLock className="absolute top-1/2 right-5 transform -translate-y-1/2 text-lg text-white" />
              </div>

              <div className="flex justify-between items-center text-sm mb-6">
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox text-white mr-2" />
                  Remember me
                </label>
                <a href="#" className="hover:underline">Forgot password?</a>
              </div>

              <button type="submit" className="w-full py-3 bg-white text-gray-800 font-semibold rounded-full shadow-md hover:bg-gray-100">Login</button>

              <div className="text-sm text-center mt-6">
                <p>Don't have an account? <a href="#" onClick={toggleForm} className="font-semibold hover:underline">Register</a></p>
              </div>
            </form>
          </div>
        ) : (

          <div className="w-full p-10 absolute inset-0 transform transition-transform duration-150">
            <form>
                <h1 className="text-3xl font-bold text-center mb-8">Registration</h1>
                
                <div className="relative mb-8">
                  <input type="text" placeholder="Username" required className="w-full py-3 px-4 bg-transparent border border-gray-200 rounded-full text-lg placeholder-white focus:outline-none" />
                  <FaRegUser className="absolute top-1/2 right-5 transform -translate-y-1/2 text-lg text-white" />
                </div>

                <div className="relative mb-8">
                  <input type="email" placeholder="Email" required className="w-full py-3 px-4 bg-transparent border border-gray-200 rounded-full text-lg placeholder-white focus:outline-none" />
                  <FaEnvelope className="absolute top-1/2 right-5 transform -translate-y-1/2 text-lg text-white" />
                </div>

                <div className="relative mb-8">
                  <input type="password" placeholder="Password" required className="w-full py-3 px-4 bg-transparent border border-gray-200 rounded-full text-lg placeholder-white focus:outline-none" />
                  <FaLock className="absolute top-1/2 right-5 transform -translate-y-1/2 text-lg text-white" />
                </div>

                <div className="flex justify-between items-center text-sm mb-6">
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox text-white mr-2" />
                    I agree to the terms & conditions
                  </label>
                </div>

                <button type="submit" className="w-full py-3 bg-white text-gray-800 font-semibold rounded-full shadow-md hover:bg-gray-100">Register</button>

                <div className="text-sm text-center mt-6">
                  <p>Already have an account? <a href="#" onClick={toggleForm} className="font-semibold hover:underline">Login</a></p>
                </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginRegister;
