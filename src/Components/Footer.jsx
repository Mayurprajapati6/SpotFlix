import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // import icons from react-icons

function Footer() {
  const currentYear = new Date().getFullYear(); // Get current year

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Mayurprajapati6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/mayurprajapati068/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <FaLinkedin className="text-2xl" />
            </a>
          </div>

          <div className="text-sm text-gray-600 dark:text-gray-400">
            &copy; {currentYear} SpotFlix. All Rights Reserved.
          </div>

          <div className="text-sm text-gray-600 dark:text-gray-400">
            Made with ❤️ by Mayur Prajapati
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
