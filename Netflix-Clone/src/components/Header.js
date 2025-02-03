import React from 'react';
import { IoIosArrowDropdown } from "react-icons/io";

function Header() {
  return (
    <div className='absolute z-10 flex w-full justify-between items-center p-5 bg-gradient-to-b from-black to-transparent'>
      {/* Left: Netflix Logo */}
      <img className='w-56' src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo" />

      {/* Right: User Info, Logout, Search */}
      <div className='flex items-center space-x-2'>
        <h1 className='text-lg font-medium text-white'>Pankaj Ahirrao</h1>
        <IoIosArrowDropdown className='text-white text-2xl' />
        <button className='bg-red-600 text-white px-4 py-1 rounded-md'>Logout</button>
        <button className='bg-red-600 text-white px-4 py-1 rounded-md'>Search Movie</button>
        <h1>Hello</h1>
      </div>
    </div>
  );
}

export default Header;
