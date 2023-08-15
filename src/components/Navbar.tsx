import React from "react";
import { AiFillCar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='bg-gray-100'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex justify-center'>
          <div className='flex space-x-4'>
            <div>
              <Link
                to='/'
                className='flex items-center py-5 px-2 text-gray-700 hover:text-gray-900'
              >
                <AiFillCar />
                <span className='font-bold px-2'>Car challenge</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
