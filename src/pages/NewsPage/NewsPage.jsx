import NewsList from 'modules/News/NewsList/NewsList';
import NewsSearch from 'modules/News/NewsSearch/NewsSearch';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllNews } from 'redux/news/newsOperation';

import css from "../NewsPage/NewsPage.module.css"

const NewsPage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllNews())
})

  return (
    <>
      <h2 className={css.title}>News</h2>
      <NewsSearch />
      <NewsList/>
    </>
  );
};
export default NewsPage;
