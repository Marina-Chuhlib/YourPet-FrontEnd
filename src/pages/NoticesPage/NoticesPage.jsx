import NoticesSearch from 'modules/Notices/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from 'modules/Notices/NoticesCategoriesNav/NoticesCategoriesNav';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { fetchNoticesByCategory } from 'redux/notices/noticesOperations';

// import { Outlet } from 'react-router-dom';

const NoticesPage = () => {
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(fetchNoticesByCategory("sell"))
  // })
  return (
    <>
      <NoticesSearch />
      <NoticesCategoriesNav />
      {/* <Outlet /> */}
    </>
  );
};

export default NoticesPage;
