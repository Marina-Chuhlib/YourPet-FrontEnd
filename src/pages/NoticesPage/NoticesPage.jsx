import NavNoticesCategory from 'modules/Notices/NavNoticesCategory/NavNoticesCategory';
import Notices from 'modules/Notices/Notices';
// import { Outlet } from 'react-router-dom';

const NoticesPage = () => {
  return (
    <>
      <Notices />
      <NavNoticesCategory/>
      {/* <Outlet /> */}
    </>
  );
};

export default NoticesPage;
