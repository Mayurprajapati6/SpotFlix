import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaHome, FaSearch, FaHeart, FaInfoCircle } from 'react-icons/fa';

function Menu({ setIsMenuOpen }) {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { path: '/', icon: <FaHome />, label: 'Home' },
    { path: '/', icon: <FaSearch />, label: 'Search' },
    { path: '/favorites', icon: <FaHeart />, label: 'Favorites' },
    { path: '/about', icon: <FaInfoCircle />, label: 'About' }
  ];

  const handleClick = (path) => {
    setIsMenuOpen(false);
    navigate(path);
  };

  return (
    <div className="flex flex-col md:flex-row md:space-x-4">
      {menuItems.map((item) => (
        <button
          key={item.path}
          onClick={() => handleClick(item.path)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
            location.pathname === item.path
              ? 'bg-blue-600 text-white dark:bg-blue-500'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
          }`}
        >
          <span className="text-lg">{item.icon}</span>
          <span className="text-sm md:text-base">{item.label}</span>
        </button>
      ))}
    </div>
  );
}

export default Menu;
