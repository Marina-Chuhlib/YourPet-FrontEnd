import NoticesSearch from 'modules/Notices/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from 'modules/Notices/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesCategoriesList from 'modules/Notices/NoticesCategoriesList/NoticesCategoriesList';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchNoticesByCategory } from '../../redux/notices/noticesOperations';
// import { Outlet } from 'react-router-dom';

import css from '../NoticesPage/NoticesPage.module.css';

const NoticesPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNoticesByCategory());
    console.log('Cпрацював useEffect з dispatch');
  });
  return (
    <>
      <h2 className={css.title}>Find your favorite pet</h2>
      <NoticesSearch />
      <NoticesCategoriesNav />
      <NoticesCategoriesList />
      {/* <Outlet /> */}
    </>
  );
};

export default NoticesPage;
