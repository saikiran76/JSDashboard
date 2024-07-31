import { RotatingLines } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center">
        <RotatingLines
          strokeColor="#FE4500"
          strokeWidth="2"
          animationDuration="2"
          width="100"
          visible={true}
        />
        <p className="mt-4 text-lg text-gray-700">Loading...</p>
      </div>
    </div>
  );
};
