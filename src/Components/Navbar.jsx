import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="bg-sky-950 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Logo */}
          <div className="flex-shrink-0  text-2xl">
            <h1>Bilal Ahmad.</h1>
          </div>

          {/* Center - Menu items */}
          <div className="hidden md:flex text-white space-x-8">

          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="text-white cursor-pointer"
          >
            <a href="#about" className="text-white mt-[10px] hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </a>
          </Link>
            
          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="text-white cursor-pointer"
          >
            <a href="#about" className="text-white mt-[10px] hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Services
            </a>
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="text-white cursor-pointer"
          >
            <a href="#about" className="text-white mt-[10px] hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              About Me
            </a>
          </Link>
          <Link
            to="project"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="text-white cursor-pointer"
          >
            <a href="#about" className="text-white mt-[10px] hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Projects
            </a>
          </Link>
          </div>

          {/* Right side - Contact Me button */}
          <div className="flex items-center">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="text-white cursor-pointer"
          >
            <a href="#about" className="text-white mt-[10px] hover:text-blue-600 bg-blue-500 px-3 py-2 rounded-md text-sm font-medium">
              Contact Me
            </a>
          </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
