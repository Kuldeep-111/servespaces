import React from 'react';
import Header from '../components/header/Header';
import LeftSidebar from '../components/header/LeftSidebar';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
     const handleLogout = () => {
    localStorage.removeItem('adminToken'); // or your token key
    window.location.href = '/login'; // redirect to login
  };
  return (
    <>
      {/* Sidebar */}
      <Header onLogout={handleLogout}/>
      <LeftSidebar/>

      {/* Main Content */}
      <main className='ml-[80px] px-[50px]'>
        <Outlet /> 
      </main>
    </>
  );
};

export default AdminLayout;
