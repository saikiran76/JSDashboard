import { RotatingLines } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div className='text-center'>
      <RotatingLines
        strokeColor="red"
        strokeWidth="4"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  );
};
