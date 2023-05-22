// import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ClockIcon from 'icons/ClockIcon';
import FemaleIcon from 'icons/FemaleIcon';
import LocationIcon from 'icons/LocationIcon';
import HeartIcon from 'icons/HeartIcon';
import TrashIcon from 'icons/TrashIcon';
import MaleIcon from 'icons/MaleIcon';
import * as toasty from '../../../shared/toastify/toastify';
import moment from 'moment';

import { getUser } from 'redux/auth/auth-selectors';
import Button from 'shared/components/ButtonNotices/ButtonNotices';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
import useToggleModalWindow from 'shared/hooks/useToggleModalWindow';
import Modal from 'shared/components/ModalWindow/Modal';
import { getFavorite } from 'redux/auth/auth-selectors';
import {
  fetchAddToFavorite,
  fetchRemoveFromFavorite,
} from 'redux/notices/noticesOperations';

import NoticeModal from 'modules/NoticeModal/NoticeModal';

import css from './notice-categories-item.module.css';

const NoticeCategoryItem = ({
  _id,
  file,
  category,
  title,
  location,
  date,
  sex,
  comments,
  breed,
  owner,
  name,
  // myFavoriteNotice,
}) => {
  // const [isFavorite, setIsFavorite] = useState();

  const user = useSelector(getUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const favorites = useSelector(getFavorite);

  const isMyAds = false;

  const dispatch = useDispatch();

  const handleFavoriteToggle = async () => {
    if (!isLoggedIn) return toasty.toastInfo('You must be logged in');
    if (favorites.includes(_id)) {
      try {
        dispatch(fetchRemoveFromFavorite(_id));
        toasty.toastSuccess('remove from favorite');

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

  const { isModalOpen, openModal, closeModal } = useToggleModalWindow();

  const getDate = bd => {
    const birthDate = moment(bd, 'DD-MM-YYYY');
    const currentDate = moment();

    const yearsDiff = currentDate.diff(birthDate, 'years');
    const monthsDiff = currentDate.diff(birthDate, 'month') % 12;
    const totalMonths = yearsDiff * 12 + monthsDiff;
    const daysDiff = currentDate.diff(birthDate, 'days') % 31;

    if (totalMonths === 1) {
      return `${totalMonths} month`;
    }

    if (totalMonths !== 0 && totalMonths < 12) {
      return `${totalMonths} months`;
    }

    if (totalMonths >= 12 && totalMonths < 24) {
      return `1 year`;
    }

    if (totalMonths === 0 && daysDiff === 1) {
      return `1 day`;
    }

    if (totalMonths === 0 && daysDiff > 1) {
      return `${daysDiff} days`;
    }

    return `${yearsDiff} years`;
  };

  return (
    <li key={_id} className={css.listItems}>
      <div className={css.imageThumb}>
        <img className={css.photoAnimal} src={file} alt={title} width="280" />
        <div className={css.topBlock}>
          <p className={css.categoryInfo}>{category}</p>
          <div>
            <Button
              onClick={handleFavoriteToggle}
              className={css.topBtn}
              SVGComponent={() => (
                <HeartIcon
                  className={
                    css.favorite
                      ? `${css.icons} ${css.favoriteIcon}`
                      : css.icons
                  }
                  // color="#54ADFF"
                  favorite={user.favorite}
                />
              )}
            />
            {isMyAds && (
              <Button
                className={css.topBtn}
                SVGComponent={() => <TrashIcon color="#54ADFF" />}
              />
            )}
          </div>
        </div>
        <div className={css.infoCardBlock}>
          <p className={css.noticeInfo}>
            <LocationIcon className={css.icon} color="#54ADFF" />
            {location}
          </p>
          <p className={css.noticeInfo}>
            <ClockIcon className={css.icon} color="#54ADFF" />
            {getDate(date)}
          </p>
          <p className={css.noticeInfo}>
            {sex.toLowerCase() === 'male' && (
              <MaleIcon className={css.icon} color="#54ADFF" />
            )}
            {sex.toLowerCase() === 'female' && (
              <FemaleIcon className={css.icon} color="#54ADFF" />
            )}
            {sex}
          </p>
        </div>
      </div>
      <div className={css.noticeDesc}>
        <h3 className={css.noticeTitle}>{title}</h3>
        <Button className={css.learnBtn} onClick={openModal}>
          Learn more
        </Button>
        {isModalOpen && (
          <Modal closeModal={closeModal}>
            <NoticeModal
              _id={_id}
              file={file}
              category={category}
              location={location}
              date={date}
              sex={sex}
              title={title}
              comments={comments}
              breed={breed}
              owner={owner}
              name={name}
            />
          </Modal>
        )}
      </div>
    </li>
  );
};
export default NoticeCategoryItem;
