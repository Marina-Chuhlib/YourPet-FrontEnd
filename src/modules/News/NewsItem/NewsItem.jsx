import css from '../NewsItem/NewsItem.module.css';

const NewsItem = ({ _id, text, imgUrl, title, url, date }) => {
    
  const originalDate = new Date(date);
  const day = originalDate.getDate();
  const month = originalDate.getMonth() + 1; 
  const year = originalDate.getFullYear();
  const formattedDate = `${day}/${month < 10 ? '0' + month : month}/${year}`;

  return (
    <li key={_id} className={css.item}>
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
            Read more
          </a>
        </div>
      </div>
    </li>
  );
};

export default NewsItem;

