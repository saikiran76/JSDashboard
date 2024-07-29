import React from 'react';
import Image from 'next/image';
import mic from '../assets/mic.png';

const Announcements = () => (
  <div className="ml-2 h-[16rem] md:h-[10rem] flex-1 bg-white p-4">
    <h3 className="mb-4 text-sm font-bold">Announcements</h3>
    <p className="text-sm">Soon you will see the latest announcements/new in this section.</p>
    <div className="ml-[35%] mt-[2.25rem]">
      <Image alt="announce" src={mic} height={130} />
    </div>
  </div>
);

export default Announcements;
