import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchNoticesByCategory,
  fetchNoticesByOwn,
  fetchAllFavoriteNotices,
} from '../../redux/notices/noticesOperations';
import {
  selectNoticesTotalPages,
  // selectNoticesPage,
} from '../../redux/notices/noticesSelectors';
import NoticesSearch from 'modules/Notices/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from 'modules/Notices/NoticesCategoriesNav/NoticesCategoriesNav';
import PaginationNotices from 'shared/components/Pagination/PaginationNotices';


import css from '../NoticesPage/NoticesPage.module.css';


const NoticesPage = () => {
  const dispatch = useDispatch();
  const totalPages = useSelector(selectNoticesTotalPages);
  // const currentPage = useSelector(selectNoticesPage);
  const location = useLocation();
  const currentCategory = location.pathname.split('/')[2];

  const [ownCurrentPage, setOwnCurrentPage] = useState(1);
  const [favoriteCurrentPage, setFavoriteCurrentPage] = useState(1);

  useEffect(() => {
    if (currentCategory === 'sell') {
      dispatch(
        fetchNoticesByCategory({
          categoryName: currentCategory,
          query: '',
          page: 1,
        })
      );
    }
  }, [dispatch, currentCategory]);

  const onPageChange = page => {
    dispatch(
      fetchNoticesByCategory({
        categoryName: currentCategory,
        query: '',
        page: page,
      })
    );
  };

  const handleOwnClick = () => {
    dispatch(fetchNoticesByOwn({ query: '', page: ownCurrentPage }));
  };

  const handleFavoriteClick = () => {
    dispatch(fetchAllFavoriteNotices({ query: '', page: favoriteCurrentPage }));
  };

  const handleOwnPageChange = page => {
    setOwnCurrentPage(page);
    dispatch(fetchNoticesByOwn({ query: '', page }));
  };

  const handleFavoritePageChange = page => {
    setFavoriteCurrentPage(page);
    dispatch(fetchAllFavoriteNotices({ query: '', page }));
  };

  return (
    <div className="container">
      <h2 className={css.title}>Find your favorite pet</h2>
      <NoticesSearch />
      <NoticesCategoriesNav
        onPageChange={onPageChange}
        onOwnClick={handleOwnClick}
        onFavoriteClick={handleFavoriteClick}
      />
     
      <Outlet />
      <PaginationNotices
        totalPages={totalPages}
        currentCategory={currentCategory}
        ownCurrentPage={ownCurrentPage}
        favoriteCurrentPage={favoriteCurrentPage}
        onPageChange={page => {
          if (currentCategory === 'own') {
            handleOwnPageChange(page);
          } else if (currentCategory === 'favorite') {
            handleFavoritePageChange(page);
          } else {
            onPageChange(page);
          }
        }}
      />
    </div>
  );
};

export default NoticesPage;
