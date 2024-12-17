import React from 'react'
import aboutimg from "/src/assets/Aboutpageimage.png";

export default function About() {
  return (
      <div className="py-16 bg-white dark:bg-slate-700">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                        // src='https://neuform.in/static/media/abmission.bf6c84ebaa735c48ec83.png'
                        src={aboutimg}
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                      Neuform: Your Creative Hub
                      </h2>
                      <p className="mt-6 text-gray-600 dark:text-white">
                      At Neuform, we empower businesses to succeed by creating innovative, user-focused blogging platforms. Specializing in Full Stack Development and UI/UX Strategy, we craft custom blogging websites that not only engage users but also drive traffic and foster community growth. Our team is dedicated to building seamless, intuitive platforms that make sharing content effortless and enjoyable.</p>
                      <p className='mt-6 text-gray-600 dark:text-white'>
                      We understand the power of blogging to connect brands with their audience, and we’re here to help businesses create compelling, dynamic blogs that deliver results. By blending cutting-edge technology with user-centric design, Neuform ensures that your blogging platform stands out and supports long-term success.
                      </p>
                      <p className="mt-4 text-gray-700 dark:text-white">
                      Join us and let your stories inspire the world.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}



