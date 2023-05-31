import { useContext } from 'react';
import { ThemeContext } from 'shared/hooks/context/ThemeProvider';

import css from './TitleModal.module.css';

const TitleModal = ({ titleForm }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`${css.myСomponent} ${
        theme === 'light' ? css.light : css.dark
      }`}
    >
      <h2 className={css.title}>{titleForm}</h2>
    </div>
  );
};

export default TitleModal;
