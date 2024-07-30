import React, { useState } from 'react';
import Link from 'next/link';
import { MdDashboard } from 'react-icons/md';
import { SiGoogleanalytics } from 'react-icons/si';
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSquareChevLeft } from "react-icons/ci";

const Sidebar = () => {
  const [onMob, setMob] = useState(false)
  return (
    <div>
      <div
        className="md:hidden fixed top-0 left-0 p-4 cursor-pointer"
        onClick={() => setMob(!onMob)}
      >
        <RxHamburgerMenu />
      </div>

      <div
        className={`fixed top-0 left-0 h-screen w-[37%] md:w-[15.75%] rounded-r-[2rem] bg-[#6B120A] transition-transform ${
          onMob ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        <ul className="m-3 md:m-5 mt-10 list-none text-white">
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

          <div onClick={()=>setMob(!onMob)} className='md:hidden text-red-200 cursor-pointer hover:text-red-400 mt-4 ml-[1rem] text-center text-[1.75rem]'>
            <CiSquareChevLeft/>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
