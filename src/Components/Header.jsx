import React from 'react';
import { FaPlayCircle } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';
import man from "./Images/MyImage-removebg-preview.png";

const Header = () => {
  return (
    <header id='home' className="bg-sky-950 flex flex-col lg:flex-row items-center justify-between p-8 lg:p-16">
      {/* Left Section */}
      <div className="lg:w-1/2 text-center lg:text-left space-y-4 order-2 lg:order-1">
        <h3 className="text-4xl lg:text-6xl font-bold text-white">I am a Web Developer</h3>
        <h2 className="text-2xl lg:text-3xl font-semibold text-yellow-600">Bilal Ahmad</h2>
        <p className="text-white max-w-md">
          Passionate about creating responsive and dynamic web applications. I specialize in crafting beautiful user experiences and writing clean, maintainable code. Let's build something amazing together.
        </p>
        <div className="flex gap-2 justify-center lg:justify-start">
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg flex items-center hover:bg-indigo-700">
            <MdWork className="mr-2" /> Hire Me
          </button>
          <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg flex items-center hover:bg-gray-300">
            <FaPlayCircle className="mr-2" /> Play Video
          </button>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="lg:w-1/2 mb-8 lg:mb-0 order-1 lg:order-2  flex justify-center lg:justify-end">
        <img
          src={man}
          alt="Profile"
          className="w-2/3 md:w-1/2 lg:w-3/4 h-auto object-cover rounded-lg"
        />
      </div>
    </header>
  );
};

export default Header;
