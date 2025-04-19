// NavbarContainer.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import { FaSun, FaMoon } from 'react-icons/fa';

function Navbar({ theme, onThemeSwitch }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16'>
          <div className='flex items-center'>
            <Link to='/' className='flex items-center'>
              <span className='text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-600 transition-all duration-300'>
                SpotFlix
              </span>
            </Link>
          </div>

          <div className='flex items-center space-x-4'>
            <button
              onClick={onThemeSwitch}
              className='p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'
            >
              {theme === 'dark' ? <FaSun className='w-5 h-5' /> : <FaMoon className='w-5 h-5' />}
            </button>

            <button
              onClick={toggleMenu}
              className='p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && <Menu onClose={toggleMenu} />}
    </nav>
  );
}

export default Navbar;
