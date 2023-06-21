import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { selectAllNews, selectIsLoadingNews } from 'redux/news/newsSelectors';
import NewsItem from '../NewsItem/NewsItem';



import Loader from 'shared/components/Loader/Loader';

import css from '../NewsList/NewsList.module.css';

const NewsList = () => {
  const allNews = useSelector(selectAllNews);
  const isLoading = useSelector(selectIsLoadingNews);
 const { t } = useTranslation();


  return (
    <>
      {isLoading && <Loader />}
        {allNews.length === 0 && !isLoading ? (
          <p className={css.helperText}>
            {t('There are no results matching your search.')}
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
          </>
        )}
    </>
  );
};

export default NewsList;
