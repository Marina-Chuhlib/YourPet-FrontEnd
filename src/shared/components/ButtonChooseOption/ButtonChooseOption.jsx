import React from 'react';
import { useTranslation } from 'react-i18next';
import css from './buttonChooseOption.module.css';

const ButtonChooseOption = ({ handleChooseChange }) => {
  const { t } = useTranslation();
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
          {t("your pet")}
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
          {t("sell")}
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
          {t("lost/found")}
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
          {t("in good hands")}
        </button>
      </li>
    </ul>
  );
};

export default ButtonChooseOption;
