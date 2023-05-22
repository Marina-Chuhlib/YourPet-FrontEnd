import css from './buttonRoutes.module.css';

import PawPrintIcon from 'icons/PawPrintIcon';

const ButtonDone = ({ textButton, handleNextData }) => {
  return (
    <button className={css.buttonNext} onClick={handleNextData}>
      {textButton}
      <PawPrintIcon className={css.pawIcon} color="#FEF9F9" />
    </button>
  );
};

export default ButtonDone;
