import React from 'react';
import Image from 'next/image';
import mic from '../assets/mic.png'

const Announcements = () => (
  <div className="flex-1 bg-white p-4 ml-2 h-[10rem]">
    <h3 className="font-bold mb-4 text-sm">Announcements</h3>
    <p className='text-sm'>Soon you will see the latest announcements/new in this section.</p>
    <div className='ml-[35%] mt-[2.25rem]'><Image src={mic} height={130}/></div>
  </div>
);

export default Announcements;
