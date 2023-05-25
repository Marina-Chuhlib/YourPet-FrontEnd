import { useEffect } from 'react';
import LoginForm from 'modules/LoginForm/LoginForm';
import css from './LoginPage.module.css';

const LoginPage = () => {
  useEffect(() => {
    const body = document.querySelector('body');
    body.classList.add(css.bodyBg);

    return () => {
      body.classList.remove(css.bodyBg);
    };
  }, []);

  return (
    <>
      <LoginForm />
    </>
  );
};

export default LoginPage;
