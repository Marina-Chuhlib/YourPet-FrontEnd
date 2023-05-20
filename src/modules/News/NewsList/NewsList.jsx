import { useSelector } from 'react-redux';
import { selectAllNews } from 'redux/news/newsSelectors';
import NewsItem from '../NewsItem/NewsItem';

import css from '../NewsList/NewsList.module.css';

const NewsList = () => {
  const allNews = useSelector(selectAllNews);

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
        </>
      )}
    </>
  );
};

export default NewsList;
