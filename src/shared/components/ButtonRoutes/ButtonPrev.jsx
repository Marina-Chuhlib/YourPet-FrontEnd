import React from 'react';
// import { unstable_HistoryRouter } from 'react-router-dom';
import css from './buttonRoutes.module.css';

import ArrowLeftIcon from 'icons/ArrowLeftIcon';

const ButtonPrev = ({ textButton, handlePrevStep }) => {
  // const history = unstable_HistoryRouter();
  // const handleGoBack = () => {
  //   history.goBack()
  // console.log(textButton)
  // }

  return (
    <button
      className={css.buttonPrev} type="button"
      onClick={handlePrevStep}
    >
      <ArrowLeftIcon className={css.arrowIcon} color="#54ADFF" />
      {textButton}
    </button>
  );
};

export default ButtonPrev;
