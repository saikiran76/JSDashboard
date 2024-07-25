import React from 'react';
import { formatDateTime } from '../utils/helper';
import Image from 'next/image';
import pdf from '../assets/Pdf.png'

const LatestDocuments = ({ docs }) => (
  <div className="flex-1 bg-white shadow-md p-4 mr-2 overflow-y-auto h-[15rem] text-xs">
    <ul>
      {docs.map((doc, index) => (
        <li key={index} className="mb-2 mt-1 p-2 className='border-gray-600 border-b-[1px] pb-4">
          <div className='flex justify-between'>
            <div className='flex gap-3'>
              <Image src={pdf}/>
              <div>
                <p className="font-bold">{doc.title}</p>
                <p>{doc.description}</p>
              </div>
            </div>
            <p>{formatDateTime(doc.created_at)}</p>
            
          </div>
          
          {/* <p className="text-sm text-gray-500">{doc.updated_at}</p> */}
        </li>
      ))}
    </ul>
  </div>
);

export default LatestDocuments;

