import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as toasty from '../../shared/toastify/toastify';

import {
  getNoticesById,
  getNoticesByIdOwner,
} from '../../redux/notices/noticesSelectors';
import { fetchNoticeById } from '../../redux/notices/noticesOperations';
import Contact from './Contact/Contact';
import AddToFavorite from './AddToFavorite/AddToFavorite';
import { selectIsLoggedIn, getFavorite } from 'redux/auth/auth-selectors';
import {
  fetchAddToFavorite,
  fetchRemoveFromFavorite,
} from '../../redux/notices/noticesOperations';

import css from './notice-modal.module.css';

const NoticeModal = ({ _id }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const favorites = useSelector(getFavorite);

  const dispatch = useDispatch();

  const item = useSelector(getNoticesById);
  const owner = useSelector(getNoticesByIdOwner);

  useEffect(() => {
    dispatch(fetchNoticeById(_id));
  }, [dispatch, _id]);

  const handleFavoriteToggle = async () => {
    if (!isLoggedIn) return toasty.toastInfo('You must be logged in');
    if (favorites.includes(_id)) {
      try {
        await dispatch(fetchRemoveFromFavorite(_id));

        // toasty.toastSuccess('remove from favorite');
        return;
      } catch (e) {
        toasty.toastError(e.message);
      }
    } else {
      try {
        dispatch(fetchAddToFavorite(_id));
        toasty.toastSuccess('add to favorite');
        return;
      } catch (e) {
        toasty.toastError(e.message);
      }
    }
  };

  return (
    <>
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
                <td className={css.infoTitle}>Name:</td>
                <td className={css.info}>{item.name}</td>
              </tr>
              <tr>
                <td className={css.infoTitle}>Birthday:</td>
                <td className={css.info}>{item.date}</td>
              </tr>
              <tr>
                <td className={css.infoTitle}>Breed:</td>
                <td className={css.info}>{item.breed}</td>
              </tr>
              <tr>
                <td className={css.infoTitle}>Place:</td>
                <td className={css.info}>{item.location}</td>
              </tr>
              <tr>
                <td className={css.infoTitle}>The sex:</td>
                <td className={css.info}>{item.sex}</td>
              </tr>
              {item.price && (
                <tr>
                  <td className={css.infoTitle}>Price:</td>
                  <td className={css.info}>{item.price}</td>
                </tr>
              )}
              <tr>
                <td className={css.infoTitle}>Email:</td>
                <td>
                  <a href={`mailto:${owner.email}`} className={css.contacts}>
                    {owner.email}
                  </a>
                </td>
              </tr>
              <tr>
                <td className={css.infoTitle}>Phone:</td>
                <td>
                  <a href={`tel:${owner.phone}`} className={css.contacts}>
                    {owner.phone}
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className={css.commentsInfo}>
          <span className={css.commentsTitle}>Comments: </span>
          {item.comments}
        </p>
        <div className={css.btnWrapper}>
          <Contact phone={owner.phone} />
          <AddToFavorite onClick={handleFavoriteToggle} />
        </div>
      </div>
    </>
  );
};
export default NoticeModal;
