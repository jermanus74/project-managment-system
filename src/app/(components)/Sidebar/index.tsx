"use client";

import Image from "next/image";

// import React, { useState } from "react";

const Sidebar = () => {
  //   const [showProject, setShowProject] = useState(true);
  //   const [showPriority, setShowPriority] = useState(true);
  const sidebarClasses = `flex fixed flex-col justify-between h-[100%] shadow-xl
  transition-all duration-300 ease-in-out h-full z-40 overflow-y-auto bg-white  
  w-64 `;
  return (
    <div className={sidebarClasses}>
      <div className="flex h-[100%] w-full flex-col justify-start">
        {/* TOP LOGO */}
        <div className="z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-3 dark:bg-black">
          <div className="text-xl font-bold text-gray-800 dark:text-white">
            PMS
          </div>
        </div>
        {/* TEAM */}
        <div className="flex items-center gap-5 border-y-[1.5px] border-gray-200 px-8 py-3 dark:border-gray-700">
          <Image height={40} width={40} src="/img/logo.jpeg" alt="logo" />
          <div>
            <h3 className="text-md font-bold tracking-wide dark:text-gray-200">
              Heros Team
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
