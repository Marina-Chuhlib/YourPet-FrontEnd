import { useSelector } from 'react-redux';
import {
  selectAllNews,
  selectAllNewsTotalPages,
  selectAllNewsPage,
} from 'redux/news/newsSelectors';
import NewsItem from '../NewsItem/NewsItem';
import PaginationLine from 'shared/components/Pagination/Pagination';
import { useState, useEffect } from 'react';

import css from '../NewsList/NewsList.module.css';

const NewsList = () => {
  const allNews = useSelector(selectAllNews);

  // console.log('page', allNews);

  // const totalPages = useSelector(selectAllNewsTotalPages);
  // const page = useSelector(selectAllNewsPage);
  // console.log('totalPages', totalPages);
  // console.log('page', page);

  // onChange={(e, page) => setPage(page)}

  // const [page, setPage] = useState(1);

  // useEffect(() => {}, []);

  return (
    <>
      {allNews.length === 0 ? (
        <p className={css.helperText}>
          There are no results matching your search.
        </p>
      ) : (
        <>
          <ul className={css.list}>
            {allNews.map(({ _id, text, imgUrl, title, url, date }) => {
              return (
                <NewsItem
                  key={_id}
                  text={text}
                  imgUrl={imgUrl}
                  title={title}
                  url={url}
                  date={date}
                />
              );
            })}
          </ul>
          {/* <PaginationLine
            totalPages={totalPages}
            currentPage={currentPage}
            onChange={handlePageChange}
          /> */}
          {/* onChange={handlePageChange} */}
        </>
      )}
    </>
  );
};

export default NewsList;
