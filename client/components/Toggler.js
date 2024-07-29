import React from 'react';
import { RiShipFill } from 'react-icons/ri';
import { CiPlane } from 'react-icons/ci';
import { MdOutlineFireTruck } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { revertFilter, toggleFilter } from '../util/toggleSlice';

const Toggler = () => {
  const dispatch = useDispatch();

  return (
    <div className="mt-4 flex justify-center gap-8 text-sm text-gray-500">
      <div
        onClick={() => dispatch(revertFilter())}
        className="flex cursor-pointer items-center gap-2 border-red-600 pb-2 duration-100 hover:border-b-2 hover:text-red-600"
      >
        <RiShipFill />
        <p>Sea</p>
      </div>
      <div
        onClick={() => dispatch(toggleFilter())}
        className="flex cursor-pointer items-center gap-2 border-red-600 pb-2 duration-100 hover:border-b-2 hover:text-red-600"
      >
        <CiPlane />
        <p>Air</p>
      </div>
      <div
        onClick={() => dispatch(toggleFilter())}
        className="flex cursor-pointer items-center gap-2 border-red-600 pb-2 duration-100 hover:border-b-2 hover:text-red-600"
      >
        <MdOutlineFireTruck />
        <p>Land</p>
      </div>
    </div>
  );
};

export default Toggler;
