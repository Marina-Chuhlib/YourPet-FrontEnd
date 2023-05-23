import React from 'react';
import NewsSearch from 'modules/News/NewsSearch/NewsSearch';
import css from '../NewsPage/NewsPage.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoadingNews } from 'redux/news/newsSelectors';
import Loader from 'shared/components/Loader/Loader';
import ScrollButton from 'shared/components/ScrollButton/ScrollButton';

const NewsPage = () => {
  const isLoading = useSelector(selectIsLoadingNews);

  return (
    <div className="container">
      <h2 className={css.title}>News</h2>
      {isLoading && <Loader />}
      <NewsSearch />
      <ScrollButton />
    </div>
  );
};

export default NewsPage;
