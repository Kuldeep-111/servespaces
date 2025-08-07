// components/Header.jsx
import React from 'react';

const Header = ({ onLogout }) => {
  return (
    <header className="flex justify-between items-center py-[25px] px-[50px] ml-[80px]">
      <div>
        <img src="/images/logo.webp" alt="logo" className="w-[100px] block" />
      </div>
      <div className="flex gap-[100px] items-center">
        <button className='flex gap-[5px] items-center text-[#fff]'>
          <img src="/icons/user.webp" alt="user" className="w-[20px] filter invert" />
          Admin
        </button>
        <button onClick={onLogout} className='flex gap-[5px] items-center text-[#fff]'>
          <img src="/icons/logout.webp" alt="logout" className="w-[20px] filter invert" />
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
