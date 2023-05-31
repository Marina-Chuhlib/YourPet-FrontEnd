import { useContext } from 'react';
import { ThemeContext } from 'shared/hooks/context/ThemeProvider';

import css from './formContainer.module.css';

const FormContainerThird = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`${css.myСomponent} ${
        theme === 'light' ? css.light : css.dark
      }`}
    >
      <div className={css.formContainerThird}>{children}</div>
    </div>
  );
};

export default FormContainerThird;
