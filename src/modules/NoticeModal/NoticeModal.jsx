import Contact from './Contact/Contact';
import AddToFavorite from './AddToFavorite/AddToFavorite';

import css from './notice-modal.module.css';

const NoticeModal = ({
  _id,
  file,
  category,
  name,
  location,
  date,
  breed,
  sex,
  price,
  email,
  phone,
  comments = 'There is no comments',
  title,
}) => {
  return (
    <>
      <div className={css.contentWrapper}>
        <div className={css.tabletBox}>
          <div className={css.imgThumb}>
            <p className={css.categoryInfo}>{category}</p>
            <img className={css.photo} src={file} alt={title} width="280" />
          </div>
          <table>
            <caption className={css.title}>{ title}</caption>
            <tbody>
              <tr>
                <td className={css.infoTitle}>Name:</td>
                <td className={css.info}>{name}</td>
              </tr>
              <tr>
                <td className={css.infoTitle}>Birthday:</td>
                <td className={css.info}>{date}</td>
              </tr>
              <tr>
                <td className={css.infoTitle}>Breed:</td>
                <td className={css.info}>{breed}</td>
              </tr>
              <tr>
                <td className={css.infoTitle}>Place:</td>
                <td className={css.info}>{location}</td>
              </tr>
              <tr>
                <td className={css.infoTitle}>The sex:</td>
                <td className={css.info}>{sex}</td>
              </tr>
              {price && (
                <tr>
                  <td className={css.infoTitle}>Price:</td>
                  <td className={css.info}>{price}</td>
                </tr>
              )}
              <tr>
                <td className={css.infoTitle}>Email:</td>
                <td>
                  <a href={`mailto:${email}`} className={css.contacts}>
                    {email}
                  </a>
                </td>
              </tr>
              <tr>
                <td className={css.infoTitle}>Phone:</td>
                <td>
                  <a href={`tel:${phone}`} className={css.contacts}>
                    {phone}
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className={css.commentsInfo}>
          <span className={css.commentsTitle}>Comments: </span>
          {comments}
        </p>
        <div className={css.btnWrapper}>
          <Contact phone={phone} />
          <AddToFavorite />
        </div>
      </div>
    </>
  );
};
export default NoticeModal;
