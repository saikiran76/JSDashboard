import React from 'react';

const LatestDocuments = ({ documents }) => (
  <div className="flex-1 bg-white shadow-md p-4 mr-2">
    <h3 className="text-lg font-bold mb-4">Latest Documents</h3>
    <ul>
      {documents.map((doc, index) => (
        <li key={index} className="mb-2">
          <p className="font-semibold">{doc.title}</p>
          <p>{doc.description}</p>
          <p className="text-sm text-gray-500">{doc.updated_at}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default LatestDocuments;

