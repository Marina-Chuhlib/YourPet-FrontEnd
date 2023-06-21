import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useContext } from 'react';
import { ThemeContext } from 'shared/hooks/context/ThemeProvider';
import { useTranslation } from 'react-i18next';
import {
  getNoticesById,
  getNoticesByIdOwner,
} from '../../redux/notices/noticesSelectors';
import { fetchNoticeById } from '../../redux/notices/noticesOperations';
import Contact from './Contact/Contact';
import AddToFavorite from './AddToFavorite/AddToFavorite';

import css from './notice-modal.module.css';

const NoticeModal = ({ handleFavoriteToggle, _id }) => {
  const dispatch = useDispatch();

  const item = useSelector(getNoticesById);
  const owner = useSelector(getNoticesByIdOwner);
  const { theme } = useContext(ThemeContext);
const { t } = useTranslation();

  useEffect(() => {
    dispatch(fetchNoticeById(_id));
  }, [dispatch, _id]);

  return (
    <>
      <div
        className={`${css.myСomponent} ${
          theme === 'light' ? css.light : css.dark
        }`}
      >
        <div className={css.contentWrapper}>
          <div className={css.tabletBox}>
            <div className={css.imgThumb}>
              <p className={css.categoryInfo}>{item.category}</p>
              <img
                className={css.photo}
                src={item.file}
                alt={item.title}
                width="280"
              />
            </div>
            <table>
              <caption className={css.title}>{item.title}</caption>
              <tbody>
                <tr>
                  <td className={css.infoTitle}>{t("Name")}:</td>
                  <td className={css.info}>{item.name}</td>
                </tr>
                <tr>
                  <td className={css.infoTitle}>{t("Birthday")}:</td>
                  <td className={css.info}>{item.date}</td>
                </tr>
                <tr>
                  <td className={css.infoTitle}>{t("Breed")}</td>
                  <td className={css.info}>{item.breed}</td>
                </tr>
                <tr>
                  <td className={css.infoTitle}>{t("Place")}</td>
                  <td className={css.info}>{item.location}</td>
                </tr>
                <tr>
                  <td className={css.infoTitle}>{t("The sex")}:</td>
                  <td className={css.info}>{item.sex}</td>
                </tr>
                <tr>
                  <td className={css.infoTitle}>{t("Price")}</td>
                  {item.price ? (
                    <td className={css.info}>{item.price} $</td>
                  ) : (
                    <td className={css.info}>free </td>
                  )}
                </tr>
                <tr>
                  <td className={css.infoTitle}>{t("Email")}:</td>
                  <td>
                    <a href={`mailto:${owner.email}`} className={css.contacts}>
                      {owner.email}
                    </a>
                  </td>
                </tr>
                <tr>
                  {owner.phone && <td className={css.infoTitle}>{t("Phone")}:</td>}
                  <td>
                    {owner.phone && (
                      <a href={`tel:${owner.phone}`} className={css.contacts}>
                        {owner.phone}
                      </a>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className={css.commentsInfo}>
            <span className={css.commentsTitle}>{t("Comments")}: </span>
            {item.comments}
          </p>
          <div className={css.btnWrapper}>
            <Contact phone={owner.phone} />
            <AddToFavorite
              handleFavoriteToggle={handleFavoriteToggle}
              _id={_id}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default NoticeModal;
