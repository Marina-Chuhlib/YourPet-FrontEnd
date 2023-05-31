import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from 'shared/hooks/context/ThemeProvider';
import css from './statusIndicator.module.css';

const StatusIndicator = ({ currentStatus }) => {
  const { theme } = useContext(ThemeContext);
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
          Choose option
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
          Personal details
        </li>
        <li
          className={`${
            currentStatus === 3 ? css.textStatusCurrent : css.textStatus
          }`}
        >
          More info
        </li>
      </ul>
    </div>
  );
};

export default StatusIndicator;
