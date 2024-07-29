import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const Header = ({ path }) => {
  let title = '';

  switch (path) {
    case '/home':
      title = 'Dashboard';
      break;
    case '/analytics':
      title = 'Analytics';
      break;
    default:
      title = 'Dashboard';
  }

  return (
    <div className="flex w-full flex-row bg-white p-4 shadow-md">
      <div className="flex flex-1 items-center">
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>
      <div className="flex items-center">
        <span className="mr-4">Edward William</span>
        <FaUserCircle />
      </div>
    </div>
  );
};

export default Header;
