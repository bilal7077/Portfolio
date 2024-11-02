import React from 'react';
import { FaReact } from 'react-icons/fa';
import { FaPlayCircle } from 'react-icons/fa';

import { Link } from 'react-scroll';

const Services = () => {
  return (
    <div id='services' className="flex flex-wrap bg-sky-950 text-white">
      {/* Left side */}
      <div className="w-full md:w-1/2 p-12  ">
        <h1 className="text-4xl font-bold mb-6">My Services</h1>
        <p className="text-lg mb-4">I am a UI/UX and Web Developer offering high-quality services that focus on user experience, performance, and efficiency. With a passion for React, I create modern, responsive, and engaging websites.</p>
        <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-3xl flex items-center hover:bg-gray-300">
            <FaPlayCircle className="mr-2" /> Play Video
          </button>      
      
      </div>

      {/* Right side */}
      <div className="w-full md:w-1/2 grid grid-cols-2 gap-6 p-4 text-white">
        {/* Box 1 */}
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 ...  p-6 rounded-lg shadow-lg text-center">
          <FaReact className="text-blue-500 text-4xl mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold mb-2">UI/UX Design</h3>
          <p className="">Creating visually appealing and intuitive user interfaces that enhance user experience.</p>
        </div>

        {/* Box 2 */}
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 ... p-6 rounded-lg shadow-lg text-center">
          <FaReact className="text-blue-500 text-4xl mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold mb-2">Web Development</h3>
          <p className="text-white">Building responsive and high-performance websites with modern web technologies like React.</p>
        </div>

        {/* Box 3 */}
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 ... p-6 rounded-lg shadow-lg text-center">
          <FaReact className="text-blue-500 text-4xl mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold mb-2">React Apps</h3>
          <p className="text-white">Developing dynamic and fast single-page applications using React.js and its ecosystem.</p>
        </div>

        {/* Box 4 */}
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 ... p-6 rounded-lg shadow-lg text-center">
          <FaReact className="text-blue-500 text-4xl mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold mb-2">API Integration</h3>
          <p className="text-white">Seamlessly integrating third-party APIs and services to enhance application functionality.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
