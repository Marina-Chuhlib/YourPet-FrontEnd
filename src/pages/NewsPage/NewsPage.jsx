import NewsSearch from 'modules/News/NewsSearch/NewsSearch';

import css from "../NewsPage/NewsPage.module.css"

const NewsPage = () => {
  return (
    <>
      <h2 className={css.title}>News</h2>
      <NewsSearch />
    </>
  );
};
export default NewsPage;
