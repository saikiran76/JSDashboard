import React from 'react';
import Link from 'next/link';
import { MdDashboard } from 'react-icons/md';
import { SiGoogleanalytics } from 'react-icons/si';

const Sidebar = () => {
  return (
    <div className="h-screen w-[17%] rounded-r-[2rem] bg-[#6B120A]">
      <ul className="m-5 mt-10 list-none text-white">
        <li className="flex cursor-pointer items-center gap-2 rounded p-3 hover:bg-[#7D2F28]">
          <Link href="/home">
            <div className="flex items-center gap-2">
              <MdDashboard />
              Dashboard
            </div>
          </Link>
        </li>
        <li className="flex cursor-pointer items-center gap-2 rounded p-3 hover:bg-[#7D2F28]">
          <Link href="/analytics">
            <div className="flex items-center gap-2">
              <SiGoogleanalytics />
              Analytics
            </div>
          </Link>
        </li>
        <li className="flex cursor-pointer items-center gap-2 rounded p-3 hover:bg-[#7D2F28]">
          <SiGoogleanalytics />
          Rate Request
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
