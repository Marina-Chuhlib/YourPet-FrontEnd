import { RotatingLines } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.wrapper}>
      <RotatingLines
        strokeColor="#54ADFF"
        strokeWidth="5"
        animationDuration="0.75"
        width="150"
        visible={true}
      />
    </div>
  );
};

export default Loader;
