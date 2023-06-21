import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { ThemeContext } from 'shared/hooks/context/ThemeProvider';
import { useTranslation } from 'react-i18next';
import css from '../NewsItem/NewsItem.module.css';

const NewsItem = ({ _id, text, imgUrl, title, url, date }) => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const formattedDate = useMemo(() => {
    const originalDate = new Date(date);
    const day = originalDate.getDate();
    const month = originalDate.getMonth() + 1;
    const year = originalDate.getFullYear();
    return `${day}/${month < 10 ? '0' + month : month}/${year}`;
  }, [date]);

  return (
    <li
      key={_id}
      className={`${css.item} ${theme === 'light' ? css.light : css.dark}`}
    >
      <img src={imgUrl} alt={title} className={css.img} />
      <div className={css.textBox}>
        <h3 className={css.title}>{title}</h3>
        <p className={css.text}>{text}</p>
        <div className={css.dateBox}>
          <p className={css.date}>{formattedDate}</p>
          <a
            className={css.link}
            href={url}
            target="_blank"
            rel="noreferrer noopener"
          >
            {t('Read more')}
          </a>
        </div>
      </div>
    </li>
  );
};

NewsItem.propTypes = {
  _id: PropTypes.objectOf(PropTypes.string.isRequired),
  text: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default NewsItem;
