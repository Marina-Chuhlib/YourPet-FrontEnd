import { useSelector } from 'react-redux';
import {
  getAllNotices,
  getAllFavoriteNotices,
} from 'redux/notices/noticesSelectors';
import { useLocation } from 'react-router-dom';

import NoticeCategoryItem from '../NoticeCategoryItem/NoticeCategoryItem';
import PlusIcon from 'icons/PlusIcon';
import Button from 'shared/components/ButtonNotices/ButtonNotices';

import css from './notices-categories-list.module.css';

const NoticesCategoriesList = () => {
  const allNotices = useSelector(getAllNotices);
  const allFavoriteNotices = useSelector(getAllFavoriteNotices);
  const location = useLocation();
  const currentCategory = location.pathname.split('/')[2];
  return (
    <div className={css.noticesListContainer}>
      {document.documentElement.clientWidth < 768 && (
        <Button
          className={css.addPetBtn}
          SVGComponent={() => (
            <PlusIcon className={css.addPetBtnIcon} color="#FFFFFF" />
          )}
        >
          Add Pet
        </Button>
      )}
      {currentCategory === 'favorite' ? (
        <ul className={css.noticeList}>
          {allFavoriteNotices.map(({ _id, owner, ...props }) => (
            <NoticeCategoryItem key={_id} {...props} _id={_id} owner={owner} />
          ))}
        </ul>
      ) : (
        <ul className={css.noticeList}>
          {allNotices.map(({ _id, owner, ...props }) => (
            <NoticeCategoryItem key={_id} {...props} _id={_id} owner={owner} />
          ))}
        </ul>
      )}
    </div>
  );
};
export default NoticesCategoriesList;

NoticesCategoriesList.defaultProps = {
  items: [],
};
