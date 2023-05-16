import { useSelector } from 'react-redux';
import ClockIcon from 'icons/ClockIcon';
import FemaleIcon from 'icons/FemaleIcon';
import LocationIcon from 'icons/LocationIcon';
import HeartIcon from 'icons/HeartIcon';
import TrashIcon from 'icons/TrashIcon';
import MaleIcon from 'icons/MaleIcon';
import { getUser } from 'redux/auth/auth-selectors';
import Button from 'shared/components/ButtonNotices/ButtonNotices';

import css from './notice-categories-item.module.css';

const NoticeCategoryItem = ({
  _id,
  file,
  category,
  title,
  location,
  date,
  sex,
}) => {
  const user = useSelector(getUser);
  console.log(user);
  return (
    <li key={_id} className={css.listItems}>
      <div className={css.imageThumb}>
        <img className={css.photoAnimal} src={file} alt={title} width="280" />
        <div className={css.topBlock}>
          <p className={css.categoryInfo}>{category}</p>
          <div>
            <Button
              className={css.topBtn}
              SVGComponent={() => (
                <HeartIcon color="#54ADFF" favorite={user.favorite} />
              )}
            />
            <Button
              className={css.topBtn}
              SVGComponent={() => <TrashIcon color="#54ADFF" />}
            />
          </div>
        </div>
        <div className={css.infoCardBlock}>
          <p className={css.noticeInfo}>
            <LocationIcon className={css.icon} color="#54ADFF" />
            {location}
          </p>
          <p className={css.noticeInfo}>
            <ClockIcon className={css.icon} color="#54ADFF" />
            {date}
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
        <Button className={css.learnBtn}>Learn more</Button>
      </div>
    </li>
  );
};
export default NoticeCategoryItem;
