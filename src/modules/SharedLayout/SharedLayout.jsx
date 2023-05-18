import { Outlet } from 'react-router-dom';
import Header from 'modules/Header/Header';


const SharedLayout = () => {

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
