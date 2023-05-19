// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'modules/Header/Header';

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
        </div>
      </main>
    </>
  );
};
export default SharedLayout;
