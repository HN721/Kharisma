import React, { useState } from 'react';
import { FiUser, FiSettings, FiLogOut } from 'react-icons/fi'; // Import icons from react-icons
import Toggle from './ThemeToggle'; // Assuming Toggle component is implemented in ThemeToggle.js

const Navbar = ({ mobileMenu, setMobileMenu }) => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  return (
    <nav className='bg-white border-gray-200 mx-0.5 px-2 py-2.5 rounded dark:bg-gray-800'>
      <div className='container mx-auto flex justify-between items-center'>
        
        {/* Left section */}
        <div className='flex items-center justify-center flex-grow'>
          <span className='text-xl font-medium whitespace-nowrap dark:text-white'>
            Welcome Hosea 🖐️
          </span>
        </div>

        {/* Right section */}
        <div className='flex items-center space-x-4'>
          {/* Dark mode toggle */}
          <Toggle />

          {/* Profile icon */}
          <div className='relative'>
            <button
              className='text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200 focus:outline-none'
              onClick={toggleSubMenu}
            >
              <FiUser className='w-6 h-6' />
            </button>

            {/* Submenu */}
            {showSubMenu && (
              <div className='absolute right-0 mt-2 w-48 bg-white border dark:bg-gray-800 dark:border-gray-700 rounded-lg shadow-lg py-1'>
                <a
                  href='#'
                  className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                >
                  <FiSettings className='inline-block w-4 h-4 mr-2' />
                  Settings
                </a>
                <a
                  href='#'
                  className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                >
                  <FiLogOut className='inline-block w-4 h-4 mr-2' />
                  Logout
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
