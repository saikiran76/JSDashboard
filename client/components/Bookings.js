import Image from 'next/image';
import f1 from '../assets/f1.png';
import f2 from '../assets/f2.png';
import f3 from '../assets/f3.png';
import f4 from '../assets/f4.png';

const Bookings = ({ bookings }) => {
  // const bookIter = [
  //   {id:1, metric: "Total Bookings", total: bookings.total}

  // ]
  return (
    <div className="grid-container">
      <div className="card">
        <div className="card-content">
          <div className="text-block">
            <h2 className="title">Total Bookings</h2>
            <p className="value">{bookings.total} Bookings</p>
          </div>
          <Image alt='i4' src={f1} width={50} height={50} />
        </div>
      </div>
      <div className="card">
        <div className="card-content">
          <div className="text-block">
            <h2 className="title">Bookings Utilized</h2>
            <p className="value">{bookings.utilized} Bookings</p>
          </div>
          <Image alt='i3' src={f2} width={50} height={50} />
        </div>
      </div>
      <div className="card">
        <div className="card-content">
          <div className="text-block">
            <h2 className="title">Booking Cancelled</h2>
            <p className="value">{bookings.cancelled} Bookings</p>
          </div>
          <Image alt='i1' src={f3} width={50} height={50} />
        </div>
      </div>
      <div className="card">
        <div className="card-content">
          <div className="text-block">
            <h2 className="title">Utilization</h2>
            <p className="value">{bookings.utilization}%</p>
          </div>
          <Image alt='i2' src={f4} width={50} height={50} />
        </div>
      </div>
    </div>
  );
  
};

export default Bookings;
