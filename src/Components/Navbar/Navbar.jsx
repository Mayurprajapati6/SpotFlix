// NavbarContainer.js

import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import { useNavigate } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';

function NavbarContainer() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModeClass = 'dark';
    const isDark = document.documentElement.classList.contains(darkModeClass);
    setIsDarkMode(isDark);
  }, []);

  const toggleDarkMode = () => {
    const darkModeClass = 'dark';
    document.documentElement.classList.toggle(darkModeClass);
    setIsDarkMode(!isDarkMode);
  };

  const navigate = useNavigate();

  return (
    <div className="flex-col h-max shadow-xl w-full px-4 sm:px-6 md:px-10 py-3 md:py-4 gap-4 flex fixed top-0 left-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between h-full w-full">
        <div className="flex items-center gap-2">
          <p
            onClick={() => navigate('/')}
            className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer hover:from-blue-700 hover:to-purple-700 dark:hover:from-blue-400 dark:hover:to-purple-400 transition-all duration-300"
          >
            SpotFlix
          </p>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            {isDarkMode ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
          </button>

          <div
            id="metaMenu"
            className="w-10 h-10 flex items-center justify-center text-gray-700 dark:text-gray-200 text-2xl md:hidden cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span
              className={`transform transition-transform duration-300 ${
                isMenuOpen ? 'rotate-45 scale-125' : 'rotate-0 scale-100'
              }`}
            >
              {isMenuOpen ? '×' : '☰'}
            </span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <Menu setIsMenuOpen={setIsMenuOpen} />
        </div>
      </div>

      {isMenuOpen && (
        <div className="flex flex-col md:hidden w-full gap-2 py-2">
          <Menu setIsMenuOpen={setIsMenuOpen} />
        </div>
      )}
    </div>
  );
}

export default NavbarContainer;
