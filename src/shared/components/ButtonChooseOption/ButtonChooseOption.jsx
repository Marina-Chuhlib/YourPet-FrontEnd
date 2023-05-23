

import css from './buttonChooseOption.module.css';
import React from 'react';

const ButtonChooseOption = ({ handleChooseChange }) => {

  return (
    <ul className={css.buttonContainer}>
      <li>
        <button
          type="button"
          className={css.buttonChoose}
          onClick={() => {
            handleChooseChange('your pet', 1);
          }}
        >
          your pet
        </button>
      </li>
      <li>
        <button
          type="button"
          className={css.buttonChoose}
          onClick={() => {
            handleChooseChange('sell', 2);
          }}
        >
          sell
        </button>
      </li>
      <li>
        <button
          type="button"
          className={css.buttonChoose}
          onClick={() => {
            handleChooseChange('lost-found', 3);
          }}
        >
          lost/found
        </button>
      </li>
      <li>
        <button
          type="button"
          className={css.buttonChoose}
          onClick={() => {
            handleChooseChange('for-free', 4);
          }}
        >
          in good hands
        </button>
      </li>
    </ul>
  );
};

export default ButtonChooseOption;
