import Image from 'next/image';
import f1 from '../assets/f1.png';
import f2 from '../assets/f2.png';
import f3 from '../assets/f3.png';
import f4 from '../assets/f4.png';

const Bookings = ({ bookings }) => {
  return (
    <div className="flex flex-row gap-3 p-4">
      <div className="flex w-[25.25%] flex-col rounded-lg p-4 shadow-md hover:bg-gray-200">
        <div className="flex gap-[3rem]">
          <div>
            <h2 className="text-base">Total Bookings</h2>
            <p className="text-lg font-bold">{bookings.total} Bookings</p>
          </div>
          <Image alt='i4' src={f1} width={50} />
        </div>
      </div>
      <div className="flex w-[25.25%] flex-col rounded-lg p-4 shadow-md hover:bg-gray-200">
        <div className="flex gap-[3rem]">
          <div>
            <h2 className="text-sm">Bookings Utilized</h2>
            <p className="text-lg font-bold">{bookings.utilized} Bookings</p>
          </div>
          <Image alt='i3' src={f2} height={50} />
        </div>
      </div>
      <div className="flex w-[25.1%] flex-col rounded-lg p-4 shadow-md hover:bg-gray-200">
        <div className="flex gap-[3.5rem]">
          <div>
            <h2 className="text-xs">Booking Cancelled</h2>
            <p className="text-lg font-bold">{bookings.cancelled} Bookings</p>
          </div>
          <Image alt='i1' src={f3} height={50} />
        </div>
      </div>
      <div className="flex w-[24.5%] flex-col rounded-lg p-4 shadow-md hover:bg-gray-200">
        <div className="flex gap-[6rem]">
          <div>
            <h2 className="text-base">Utilization</h2>
            <p className="text-lg font-bold">{bookings.utilization}%</p>
          </div>
          <Image alt='i2' src={f4} height={50} />
        </div>
      </div>
    </div>
  );
};

export default Bookings;
