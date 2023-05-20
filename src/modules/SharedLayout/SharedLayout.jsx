// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'modules/Header/Header';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import { current } from 'redux/auth/auth-operations';

const SharedLayout = () => {
  //   const dispatch = useDispatch()

  //   useEffect(() => {
  //   dispatch(current());
  // }, [dispatch]);

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <div>
          <Outlet />
          <ToastContainer
            autoClose={1700}
            position="top-right"
          />
        </div>
      </main>
    </>
  );
};
export default SharedLayout;
