import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <main>
        <div>
          <Outlet />
        </div>
      </main>
    </>
  );
};
export default Layout;
