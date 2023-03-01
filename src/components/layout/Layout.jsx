import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <>
      {/* component */}
      <div className="flex gap-4 bg-[#F7F6F9] flex-row min-h-screen  ">
        {/* Sidebar */}
        <div className="">
          <Sidebar />
        </div>
        <main className="main flex flex-col flex-grow  md:ml-0 transition-all duration-150 ease-in">
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
