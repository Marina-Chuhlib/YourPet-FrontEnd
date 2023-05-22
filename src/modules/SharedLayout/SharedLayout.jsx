import { Outlet } from 'react-router-dom';
import Header from 'modules/Header/Header';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from 'modules/Footer/Footer';

const SharedLayout = () => {
  return (
    <>
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
    </>
  );
};
export default SharedLayout;
