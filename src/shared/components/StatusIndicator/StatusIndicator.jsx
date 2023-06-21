import React from 'react';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from 'shared/hooks/context/ThemeProvider';
import css from './statusIndicator.module.css';

const StatusIndicator = ({ currentStatus }) => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();
  return (
    <div
      className={`${css.myСomponent} ${
        theme === 'light' ? css.light : css.dark
      }`}
    >
      <ul className={css.statusContainer}>
        <li
          className={`${
            currentStatus === 1 ? css.textStatusCurrent : css.textStatusDone
          }`}
        >
          {t("Choose option")}
        </li>
        <li
          className={`${
            currentStatus === 2
              ? css.textStatusCurrent
              : css.textStatus && currentStatus === 3
              ? css.textStatusDone
              : css.textStatus
          }`}
        >
          {t("Personal details")}
        </li>
        <li
          className={`${
            currentStatus === 3 ? css.textStatusCurrent : css.textStatus
          }`}
        >
          {t("More info")}
        </li>
      </ul>
    </div>
  );
};

export default StatusIndicator;
