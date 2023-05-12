import { RotatingLines } from 'react-loader-spinner';

const Loader = () => {
  return (
    <RotatingLines
      strokeColor="#54ADFF"
      strokeWidth="5"
      animationDuration="0.75"
      width="150"
      visible={true}
    />
  );
};

export default Loader;
