import css from './buttonRoutes.module.css';

import ArrowLeftIcon from 'icons/ArrowLeftIcon';

const ButtonPrev = ({ textButton }) => {
  return (
    
      <button
        className={css.buttonPrev}
        SVGComponent={() => <ArrowLeftIcon className={css.arrowIcon} />}
      >
        {textButton}
      </button>

  );
};

export default ButtonPrev;
