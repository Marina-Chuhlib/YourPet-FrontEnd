import React from 'react';
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchAllNews } from 'redux/news/newsOperation';
// import {
//   selectAllNewsTotalPages,
//   selectAllNewsPage,
// } from 'redux/news/newsSelectors';

// import NewsList from 'modules/News/NewsList/NewsList';
import NewsSearch from 'modules/News/NewsSearch/NewsSearch';
// import PaginationLine from 'shared/components/Pagination/Pagination';

import css from '../NewsPage/NewsPage.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoadingNews } from 'redux/news/newsSelectors';
import Loader from 'shared/components/Loader/Loader';
import ScrollButton from 'shared/components/ScrollButton/ScrollButton';


const NewsPage = () => {
  const isLoading = useSelector(selectIsLoadingNews)
  // const dispatch = useDispatch();
  // const [currentPage, setCurrentPage] = useState(1);
  // const totalPages = useSelector(selectAllNewsTotalPages);

  // useEffect(() => {
  //   dispatch(fetchAllNews(currentPage));
  // }, [currentPage, dispatch]);

  // const handlePageChange = newPage => {
  //   setCurrentPage(newPage);
  // };

  return (
    <div className="container">
      <h2 className={css.title}>News</h2>
      {isLoading && <Loader/>}
      <NewsSearch />
      {/* <NewsList />
      <PaginationLine
        totalPages={totalPages}
        currentPage={currentPage}
        onChange={handlePageChange}
      /> */}
      <ScrollButton/>
    </div>
  );
};

export default NewsPage;
