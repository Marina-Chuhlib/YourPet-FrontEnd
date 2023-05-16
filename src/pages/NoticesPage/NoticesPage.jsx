import NoticesSearch from 'modules/Notices/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from 'modules/Notices/NoticesCategoriesNav/NoticesCategoriesNav';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchNoticesByCategory } from '../../redux/notices/noticesOperations';
import { Outlet } from 'react-router-dom';

import css from '../NoticesPage/NoticesPage.module.css';

const NoticesPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNoticesByCategory({categoryName:"sell", query:""}));
  },[dispatch]);
  return (
    <>
      <h2 className={css.title}>Find your favorite pet</h2>
      <NoticesSearch />
      <NoticesCategoriesNav />
      <Outlet />
    </>
  );
};

export default NoticesPage;
