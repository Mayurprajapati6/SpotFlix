import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // import icons from react-icons

function Footer() {
  const currentYear = new Date().getFullYear(); // Get current year

  return (
    <div className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        
        {/* Links */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/Mayurprajapati6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-400 transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/mayurprajapati068/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-400 transition duration-300"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-300">
          &copy; {currentYear} Mayur Prajapati. All Rights Reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
