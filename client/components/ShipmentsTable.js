import React, { useState, useEffect } from 'react';
import { CSVLink } from 'react-csv';

const ShipmentsTable = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentRows, setCurrentRows] = useState([]);

  useEffect(() => {
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    setCurrentRows(data.slice(indexOfFirstRow, indexOfLastRow));
  }, [currentPage, rowsPerPage, data]);

  const headers = [
    { label: "HBL#", key: "hbl_no" },
    { label: "MBL#", key: "mbl_no" },
    { label: "PO# / REF#", key: "po_ref_no" },
    { label: "Recipt", key: "recipt" },
    { label: "Loading", key: "loading" },
    { label: "Discharge", key: "discharge" },
    { label: "Delivery", key: "delivery" },
    { label: "Booking#", key: "booking_no" }
  ];

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(data.length / rowsPerPage);

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <CSVLink data={data} headers={headers} filename="shipments.csv" className="bg-red-500 text-white px-4 py-2 rounded">
          Download
        </CSVLink>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              {headers.map(header => (
                <th key={header.key} className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {header.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentRows.map((shipment, index) => (
              <tr key={index}>
                {headers.map(header => (
                  <td key={header.key} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {shipment[header.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div>
          <label>
            Rows per page:
            <select value={rowsPerPage} onChange={(e) => setRowsPerPage(Number(e.target.value))} className="ml-2">
              {[10, 25, 50, 100].map(size => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-gray-300 rounded mr-2"
          >
            Previous
          </button>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-gray-300 rounded"
          >
            Next
          </button>
        </div>
        <div>
          Page {currentPage} of {totalPages}
        </div>
      </div>
    </div>
  );
};

export default ShipmentsTable;
