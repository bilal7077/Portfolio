// Footer.jsx
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-bold text-white">Bilal Ahmad</h2>
        <p className="text-sm mb-4">Crafting quality web experiences</p>
        
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaLinkedin size={24} />
          </a>
          <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaTwitter size={24} />
          </a>
        </div>

        <p className="text-xs text-gray-500">© {new Date().getFullYear()} Bilal Ahmad. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
