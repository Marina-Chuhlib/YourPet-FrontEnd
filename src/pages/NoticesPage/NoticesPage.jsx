import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  fetchNoticesByCategory,
  fetchNoticesByOwn,
  fetchAllFavoriteNotices,
} from '../../redux/notices/noticesOperations';
import {
  getAllNotices,
  selectNoticesLoading,
  selectNoticesTotalPages,
  // selectCategory,
  selectNoticesPage,
} from '../../redux/notices/noticesSelectors';
// import { getFavorite } from 'redux/auth/auth-selectors';

import NoticesSearch from 'modules/Notices/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from 'modules/Notices/NoticesCategoriesNav/NoticesCategoriesNav';
import PaginationNotices from 'shared/components/Pagination/PaginationNotices';

import css from '../NoticesPage/NoticesPage.module.css';
import Loader from 'shared/components/Loader/Loader';
import ScrollButton from 'shared/components/ScrollButton/ScrollButton';

const NoticesPage = () => {
  const dispatch = useDispatch();
  const notices = useSelector(getAllNotices);
  const loading = useSelector(selectNoticesLoading);
  const totalPages = useSelector(selectNoticesTotalPages);
  const currentPage = useSelector(selectNoticesPage);
  const location = useLocation();
  const currentCategory = location.pathname.split('/')[2];
  // const currentCategory = useSelector(selectCategory);

  const [ownCurrentPage, setOwnCurrentPage] = useState(1);
  const [favoriteCurrentPage, setFavoriteCurrentPage] = useState(1);
  // const favoriteNotice = useSelector(getFavorite);
  // console.log(favoriteNotice);
  // useEffect(() => {
  //   if (currentCategory === 'own') {
  //     dispatch(fetchNoticesByOwn({ query: '', page: 1 }));
  //     return;
  //   } else if (currentCategory === 'favorite') {
  //     dispatch(fetchAllFavoriteNotices({ query: '', page: 1 }));
  //     return;
  //   } else {
  //     dispatch(
  //       fetchNoticesByCategory({
  //         categoryName: currentCategory,
  //         query: '',
  //         page: 1,
  //       })
  //     );
  //   }
  // }, [dispatch, currentCategory]);

  useEffect(() => {
    if (currentCategory !== 'sell') {
      return;
    }
    if (currentCategory === 'sell') {
      dispatch(
        fetchNoticesByCategory({
          categoryName: 'sell',
          query: '',
          page: 1,
        })
      );
    }
  });

  const onPageChange = page => {
    if (currentCategory === 'own') {
      dispatch(fetchNoticesByOwn({ query: '', page }));
      return;
    } else if (currentCategory === 'favorite') {
      dispatch(fetchAllFavoriteNotices({ query: '', page }));
      return;
    } else {
      dispatch(
        fetchNoticesByCategory({
          categoryName: currentCategory,
          query: '',
          page,
        })
      );
    }
  };

  const handleCategoryClick = categoryName => {
    dispatch(
      fetchNoticesByCategory({
        categoryName,
        query: '',
        page: 1,
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
        handleCategoryClick={handleCategoryClick}
        onPageChange={onPageChange}
        onOwnClick={handleOwnClick}
        onFavoriteClick={handleFavoriteClick}
      />
      {loading && <Loader />}
      {notices && <Outlet />}

      <PaginationNotices
        currentPage={currentPage}
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
      <ScrollButton />
    </div>
  );
};

export default NoticesPage;
