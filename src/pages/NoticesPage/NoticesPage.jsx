import NoticesSearch from 'modules/Notices/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from 'modules/Notices/NoticesCategoriesNav/NoticesCategoriesNav';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { fetchNoticesByCategory } from 'redux/notices/noticesOperations';

// import { Outlet } from 'react-router-dom';

import css from "../NoticesPage/NoticesPage.module.css"

const NoticesPage = () => {
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(fetchNoticesByCategory("sell"))
  // })
  return (
    <>
      <h2 className={css.title}>Find your favorite pet</h2>
      <NoticesSearch />
      <NoticesCategoriesNav />
      {/* <Outlet /> */}
    </>
  );
};

export default NoticesPage;
