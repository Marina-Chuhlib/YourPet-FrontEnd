import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import Header from 'modules/Header/Header';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from 'modules/Footer/Footer';

import { ThemeContext } from 'shared/hooks/context/ThemeProvider';


import css from '../../shared/components/ChooseTheme/ChooseTheme.module.css';

const SharedLayout = () => {
  const { theme } = useContext(ThemeContext);


  return (
    <div
      className={`${css.myСomponent} ${
        theme === 'light' ? css.light : css.dark
      }`}
    >
      <Header />
      <main>
        <div>
          <Outlet />
          <ToastContainer autoClose={1700} position="top-right" />
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};
export default SharedLayout;
