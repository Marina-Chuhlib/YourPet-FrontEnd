import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from 'shared/hooks/context/ThemeProvider';
import NewsSearch from 'modules/News/NewsSearch/NewsSearch';
import css from '../NewsPage/NewsPage.module.css';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { selectIsLoadingNews } from 'redux/news/newsSelectors';
import Loader from 'shared/components/Loader/Loader';
import ScrollButton from 'shared/components/ScrollButton/ScrollButton';

const NewsPage = () => {
  const isLoading = useSelector(selectIsLoadingNews);
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();
  
  return (
    <div className="container">
      <h2
        className={`${css.title} ${theme === 'light' ? css.light : css.dark}`}
      >
        {t("News")}
      </h2>
      {isLoading && <Loader />}
      <NewsSearch />
      <ScrollButton />
    </div>
  );
};

export default NewsPage;
