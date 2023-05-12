import { Outlet } from 'react-router-dom';
import Header from 'modules/Header/Header';

const Layout = () => {
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
export default Layout;
