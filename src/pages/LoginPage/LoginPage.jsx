import { useContext } from 'react';
import { ThemeContext } from '../../shared/hooks/context/ThemeProvider';

import LoginForm from 'modules/LoginForm/LoginForm';
import css from './LoginPage.module.css';

const LoginPage = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`${css.myСomponent} ${
        theme === 'light' ? css.light : css.dark
      }`}
    >
      <section className={css.sectionMain}>
        <div className="container">
          <LoginForm />
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
