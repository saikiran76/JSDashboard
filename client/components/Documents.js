import React from 'react';
import { formatDateTime } from '../utils/helper';
import Image from 'next/image';
import pdf from '../assets/Pdf.png';

const LatestDocuments = ({ docs }) => (
  <div className="mr-2 h-[15rem] flex-1 overflow-y-auto bg-white p-4 text-xs shadow-md">
    <ul>
      {docs.map((doc, index) => (
        <li key={index} className="className='border-gray-600 mb-2 mt-1 border-b-[1px] p-2 pb-4">
          <div className="flex justify-between">
            <div className="flex gap-3">
              <div className='hidden md:block'>
                <Image alt='pdf' src={pdf} />
              </div>
              <div>
                <p className="font-bold">{doc.title}</p>
                <p>{doc.description}</p>
              </div>
            </div>
            <p>{formatDateTime(doc.created_at)}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default LatestDocuments;
