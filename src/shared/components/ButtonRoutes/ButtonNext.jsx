import css from './buttonRoutes.module.css';

import PawPrintIcon from 'icons/PawPrintIcon';

const ButtonNext = ({ textButton }) => {
  return (
    <button
      className={css.buttonNext}
      SVGComponent={() => <PawPrintIcon className={css.pawIcon} />}
    >
      {textButton}
    </button>
  );
};

export default ButtonNext;
