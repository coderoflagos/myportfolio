import React from 'react';
import Toggle from '../components/toggle';


const Navbar = () => {
  return (
    <header>
     <div className='text-black flex justify-between mb-5 items-center max-w-[1240px] mx-auto px-4'>
        <h1 className="w-full text-3xl font-bold text-black dark:text-white">my portfolio 👋  </h1>          
        <div className="p-4 flex">
          <Toggle />
        </div>

      </div>
    </header>
  );
};

export default Navbar;
