import { useEffect } from 'react';
import RegisterForm from 'modules/RegisterForm/RegisterForm';
import css from './RegisterPage.module.css';

const RegisterPage = () => {
  useEffect(() => {
    const body = document.querySelector('body');
    body.classList.add(css.bodyBg);

    return () => {
      body.classList.remove(css.bodyBg);
    };
  }, []);

  return (
    <>
      <RegisterForm />
    </>
  );
};

export default RegisterPage;
