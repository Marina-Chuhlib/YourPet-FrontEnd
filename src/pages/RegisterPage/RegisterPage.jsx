// import { useEffect } from 'react';
import RegisterForm from 'modules/RegisterForm/RegisterForm';
import { useContext } from 'react';
import { ThemeContext } from '../../shared/hooks/context/ThemeProvider';

import css from './RegisterPage.module.css';

const RegisterPage = () => {
  const { theme } = useContext(ThemeContext);
  // useEffect(() => {
  //   const body = document.querySelector('body');
  //   body.classList.add(css.bodyBg);

  //   return () => {
  //     body.classList.remove(css.bodyBg);
  //   };
  // }, []);

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
