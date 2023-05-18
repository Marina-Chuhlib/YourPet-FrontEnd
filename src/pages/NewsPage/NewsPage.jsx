import NewsList from 'modules/News/NewsList/NewsList';
import NewsSearch from 'modules/News/NewsSearch/NewsSearch';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllNews } from 'redux/news/newsOperation';

import css from '../NewsPage/NewsPage.module.css';

import {
  selectAllNews,
  selectAllNewsTotalPages,
  selectAllNewsPage,
} from 'redux/news/newsSelectors';
import PaginationLine from 'shared/components/Pagination/Pagination';
import { useSelector } from 'react-redux';

const NewsPage = () => {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const page = useSelector(selectAllNewsPage);
  const totalPages = useSelector(selectAllNewsTotalPages);
  // console.log('page', page);
  // console.log('totalPages', totalPages);

  useEffect(() => {
    dispatch(fetchAllNews(currentPage));
  });

  const handlePageChange = () => {
    setCurrentPage(page);
  };

  return (
    <div className="container">
      <h2 className={css.title}>News</h2>
      <NewsSearch />
      <NewsList />
      <PaginationLine
        totalPages={totalPages}
        // currentPage={currentPage}
        onChange={handlePageChange}
      />
    </div>
  );
};
export default NewsPage;
