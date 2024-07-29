import React from 'react';
import Link from 'next/link';
import { MdDashboard } from 'react-icons/md';
import { SiGoogleanalytics } from 'react-icons/si';

const Sidebar = () => {
  return (
    <div className='bg-[#6B120A] rounded-r-[2rem] w-[17%] h-screen'>
      <ul className='list-none text-white m-5 mt-10'>
        <li className='flex gap-2 items-center hover:bg-[#7D2F28] cursor-pointer rounded p-3'>
          <Link href="/home">
            <div className="flex gap-2 items-center">
              <MdDashboard />Dashboard
            </div>
          </Link>
        </li>
        <li className='flex gap-2 items-center hover:bg-[#7D2F28] cursor-pointer rounded p-3'>
          <Link href="/analytics">
            <div className="flex gap-2 items-center">
              <SiGoogleanalytics />Analytics
            </div>
          </Link>
        </li>
        <li className='flex gap-2 items-center hover:bg-[#7D2F28] cursor-pointer rounded p-3'>
          <SiGoogleanalytics />Rate Request
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
     