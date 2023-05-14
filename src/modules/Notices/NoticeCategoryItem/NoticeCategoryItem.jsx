import ClockIcon from 'icons/ClockIcon';
import FemaleIcon from 'icons/FemaleIcon';
import LocationIcon from 'icons/LocationIcon';
import HeartIcon from 'icons/HeartIcon';
import TrashIcon from 'icons/TrashIcon';
import MaleIcon from 'icons/MaleIcon';

import css from './notice-categories-item.module.css';

const NoticeCategoryItem = ({
  id,
  category,
  favorite,
  titleOfAdd,
  namePet,
  dateOfBirth,
  breed,
  theSex,
  location,
  price,
  comments,
  age,
}) => {
  return (
    <li className={css.listItems}>
      <div className={css.imageThumb}>
        <img className={css.photoAnimal} src="" alt="Pets avatar" width="280" />
        <div className={css.topBlock}>
          <p className={css.categoryInfo}>{category}</p>
          <div>
            <button
              className={css.topBtn}
              SVGComponent={() => (
                <HeartIcon color="#54ADFF" favorite={favorite} />
              )}
            >
              {favorite}
            </button>
            <button
              className={css.topBtn}
              SVGComponent={() => <TrashIcon color="#54ADFF" />}
            >
              {favorite}
            </button>
          </div>
        </div>
        <div className={css.infoCardBlock}>
          <p className={css.noticeInfo}>
            <LocationIcon className={css.icon} color="#54ADFF" />
            {location}
          </p>
          <p className={css.noticeInfo}>
            <ClockIcon className={css.icon} color="#54ADFF" />
          </p>
          <p className={css.noticeInfo}>
            {theSex.toLowerCase() === 'male' && (
              <MaleIcon className={css.icon} color="#54ADFF" />
            )}
            {theSex.toLowerCase() === 'female' && (
              <FemaleIcon className={css.icon} color="#54ADFF" />
            )}
            {theSex}
          </p>
        </div>
      </div>
      <div className={css.noticeDesc}>
        <h3 className={css.noticeTitle}>{titleOfAdd}</h3>
        <button className={css.learnBtn}>Learn more</button>
      </div>
    </li>
  );
};
export default NoticeCategoryItem;
