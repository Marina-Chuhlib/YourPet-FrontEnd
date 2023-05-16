import { useSelector } from 'react-redux';
import { selectAllNews } from 'redux/news/newsSelectors';
import NewsItem from '../NewsItem/NewsItem';

import css from '../NewsList/NewsList.module.css';

const NewsList = () => {
  const allNews = useSelector(selectAllNews);

    // console.log('page', allNews);

  return (
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
  );
};
export default NewsList;
