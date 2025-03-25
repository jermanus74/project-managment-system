"use client";

import { LockIcon } from "lucide-react";
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
          <div className="text-xl font-bold text-gray-800 uppercase dark:text-white">
            PMS
          </div>
        </div>
        {/* TEAM */}
        <div className="flex items-center gap-5 border-y-[1.5px] border-gray-200 px-8 py-3 dark:border-gray-700">
          <Image height={40} width={40} src="/img/logo.jpeg" alt="logo" />
          <div>
            <h3 className="text-md font-bold tracking-wide capitalize dark:text-gray-200">
              Heros Team
            </h3>
            <div className="mt1 flex items-start gap-2">
              <LockIcon className="mt-[0.1rem] h-3 w-3 text-gray-500 dark:text-gray-400" />
              <p className="text-xs text-gray-500 capitalize">private</p>
            </div>
          </div>
        </div>
        {/* navbar links */}
        <div className=""></div>
      </div>
    </div>
  );
};

export default Sidebar;
