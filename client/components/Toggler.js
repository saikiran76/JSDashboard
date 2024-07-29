import React from 'react'
import { RiShipFill } from 'react-icons/ri'
import { CiPlane } from 'react-icons/ci'
import { MdOutlineFireTruck } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { revertFilter, toggleFilter } from '../util/toggleSlice'

const Toggler = () => {
    const dispatch = useDispatch();

    return (
        <div className="flex gap-8 justify-center mt-4 text-gray-500 text-sm ">
            <div onClick={()=> dispatch(revertFilter())} className="flex gap-2 items-center cursor-pointer pb-2 border-red-600 hover:text-red-600 hover:border-b-2 duration-100"><RiShipFill /><p>Sea</p></div>
            <div onClick={() => dispatch(toggleFilter())} className="flex gap-2 items-center cursor-pointer pb-2 border-red-600 hover:text-red-600 hover:border-b-2 duration-100"><CiPlane /><p>Air</p></div>
            <div onClick={() => dispatch(toggleFilter())} className="flex gap-2 items-center cursor-pointer pb-2 border-red-600 hover:text-red-600 hover:border-b-2 duration-100"><MdOutlineFireTruck /><p>Land</p></div>
        </div>
    )
}

export default Toggler
