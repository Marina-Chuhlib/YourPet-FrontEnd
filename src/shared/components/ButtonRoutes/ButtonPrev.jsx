import React from 'react';
import css from './buttonRoutes.module.css';

import ArrowLeftIcon from 'icons/ArrowLeftIcon';

const ButtonPrev = ({ textButton, handlePrevStep, formData }) => {
  return (
    <button
      className={css.buttonPrev}
      type="button"
      onClick={() => {
        handlePrevStep(formData);
      }}
    >
      <ArrowLeftIcon className={css.arrowIcon} color="#54ADFF" />
      {textButton}
    </button>
  );
};

export default ButtonPrev;
