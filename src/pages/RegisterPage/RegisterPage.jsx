import { useContext } from 'react';
import { ThemeContext } from '../../shared/hooks/context/ThemeProvider';

import RegisterForm from 'modules/RegisterForm/RegisterForm';
import css from './RegisterPage.module.css';

const RegisterPage = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`${css.myСomponent} ${
        theme === 'light' ? css.light : css.dark
      }`}
    >
      <section className={css.sectionMain}>
        <div className="container">
          <RegisterForm />
        </div>
      </section>
    </div>
  );
};

export default RegisterPage;
