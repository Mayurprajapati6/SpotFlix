import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaHeart, FaInfoCircle, FaTimes } from 'react-icons/fa';

function Menu({ onClose }) {
  const location = useLocation();
  const menuItems = [
    { path: '/', icon: <FaHome />, label: 'Home' },
    { path: '/favorites', icon: <FaHeart />, label: 'Favorites' },
    { path: '/about', icon: <FaInfoCircle />, label: 'About' }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      
      <div className="fixed top-16 right-4 w-64 bg-white dark:bg-gray-800 shadow-xl rounded-lg transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col">
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Quick Menu</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <FaTimes className="w-4 h-4" />
            </button>
          </div>

          <div className="p-2">
            <nav className="space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={onClose}
                  className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                    location.pathname === item.path
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <span className="mr-3 text-lg">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
