import { RiShipFill } from "react-icons/ri";
import { CiPlane } from "react-icons/ci";
import { MdOutlineFireTruck } from "react-icons/md";
import MilestonesChart from "../components/MileStone";
import DelayChart from "../components/DelayChart";


const Analytics = ()=>{
    const dummy = ['op1', 'op2', 'op3']

    return(
        <div className="bg-gray-100">
            <div className="flex gap-8 justify-center mt-4 text-gray-500 text-sm ">
                <div className="flex gap-2 items-center cursor-pointer pb-2 border-red-600 hover:text-red-600 hover:border-b-2 duration-200"><RiShipFill/><p>Sea</p></div>
                <div className="flex gap-2 items-center cursor-pointer pb-2 border-red-600 hover:text-red-600 hover:border-b-2 duration-200"><CiPlane/><p>Air</p></div>
                <div className="flex gap-2 items-center cursor-pointer pb-2 border-red-600 hover:text-red-600 hover:border-b-2 duration-200"><MdOutlineFireTruck/><p>Land</p></div>
            </div>

            <div className="bg-white shadow-md p-2 flex gap-4 justify-center text-sm w-fit mx-auto mt-4 rounded-md">
                <p className="rounded-md p-2 hover:text-[#856562] hover:bg-[#E7E0E0] cursor-pointer">Shipments</p>
                <p className="rounded-md p-2 hover:text-[#856562] hover:bg-[#E7E0E0] cursor-pointer">Containers</p>
            </div>

            <div className="bg-white shadow-md p-3 flex gap-3 items-center m-3  text-[0.880rem]">
                <div className="flex gap-3 items-center font-bold ml-3">
                    <p>Type</p>
                    <div className="">
                            <select
                            // value={selectedMilestone}
                            // onChange={handleMilestoneChange}
                            className="p-[0.6rem] border-gray-300 border-[1px] text-sm rounded-[1.25rem] bg-white w-[10rem] font-semibold"
                            >
                            <option value="">Select</option>
                            {/* {milestones.map((milestone, index) => (
                                <option key={index} value={milestone}>
                                {milestone}
                                </option>
                            ))} */}
                            {
                                dummy.map((item, index)=>(
                                    <option key={index}>{item}</option>
                                ))
                            }
                            </select>
                    </div>
                </div>

                <div className="flex gap-3 items-center font-bold ml-5">
                    <p>Type</p>
                    <div className="">
                            <select
                            // value={selectedMilestone}
                            // onChange={handleMilestoneChange}
                            className="p-[0.6rem] border-gray-300 border-[1px] text-sm rounded-[1.25rem] bg-white w-[10rem] font-semibold"
                            >
                            <option value="">Select</option>
                            {/* {milestones.map((milestone, index) => (
                                <option key={index} value={milestone}>
                                {milestone}
                                </option>
                            ))} */}
                            {
                                dummy.map((item, index)=>(
                                    <option key={index}>{item}</option>
                                ))
                            }
                            </select>
                    </div>
                </div>

                <div className="flex gap-3 items-center font-bold ml-5">
                    <p>Type</p>
                    <div className="">
                            <select
                            // value={selectedMilestone}
                            // onChange={handleMilestoneChange}
                            className="p-[0.6rem] border-gray-300 border-[1px] text-sm rounded-[1.25rem] bg-white w-[10rem] font-semibold"
                            >
                            <option value="">Select</option>
                            {/* {milestones.map((milestone, index) => (
                                <option key={index} value={milestone}>
                                {milestone}
                                </option>
                            ))} */}
                            {
                                dummy.map((item, index)=>(
                                    <option key={index}>{item}</option>
                                ))
                            }
                            </select>
                    </div>
                </div>

                <div className="flex gap-3 ml-4">
                    <button className="p-2 pr-5 pl-5 text-sm rounded-[2rem] border-red-900 border-[1.5px] text-red-900 font-semibold">Cancel</button>
                    <button className="p-2 pr-5 pl-5 text-sm rounded-[2rem] bg-red-900 text-white font-semibold">Go</button>
                </div>
            </div>
            <div className="flex gap-4">
                <div className="bg-white shadow-md rounded-lg w-[50%] p-3 ml-3 relative">
                    <div className="p-2 pr-4 pl-4 rounded-md border-gray-200 text-gray-500 border-[1.5px] absolute right-4 top-6 text-sm">IN-TRANSIT (463)</div>
                    <MilestonesChart/>
                </div>

                <div className="bg-white shadow-md rounded-lg w-[46%] p-3 ml-3 relative">
                    <DelayChart/>
                </div>
            </div>
        </div>

    )
}

export default Analytics;