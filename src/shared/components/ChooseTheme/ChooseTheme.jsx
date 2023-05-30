import { useContext } from 'react';
import { ThemeContext } from 'shared/hooks/context/ThemeProvider';

import css from './ChooseTheme.module.css';

const ChooseTheme = () => {
  const { theme } = useContext(ThemeContext);
  console.log(theme);

  return (
    <div
      className={`${css.myСomponent} ${
        theme === 'light' ? css.light : css.dark
      }`}
    >
      <p className={`${css.myСomponent}  ${theme}`}>{theme}</p>
    </div>
  );
};

export default ChooseTheme;
