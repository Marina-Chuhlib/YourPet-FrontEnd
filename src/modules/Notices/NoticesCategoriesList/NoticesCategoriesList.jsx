import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { getAllNotices } from 'redux/notices/noticesSelectors';
import { getAllFavoriteNotices } from '../../../redux/auth/auth-selectors';
import { useLocation } from 'react-router-dom';

import NoticeCategoryItem from '../NoticeCategoryItem/NoticeCategoryItem';

import css from './notices-categories-list.module.css';
// import persistReducer from 'redux-persist/es/persistReducer';

const NoticesCategoriesList = () => {
  const allNotices = useSelector(getAllNotices);
  const allFavoriteNotices = useSelector(getAllFavoriteNotices);

  const location = useLocation();
  const currentCategory = location.pathname.split('/')[2];
  return (
    <div className={css.noticesListContainer}>
      {currentCategory === 'favorite' ? (
        <ul className={css.noticeList}>
          {allFavoriteNotices &&
            allFavoriteNotices.map(({ _id, owner, ...props }) => (
              <NoticeCategoryItem
                key={_id}
                {...props}
                _id={_id}
                owner={owner}
              />
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
  allFavoriteNotices: [],
};

NoticesCategoriesList.propTypes = {
  allFavoriteNotices: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      owner: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        phone: PropTypes.string,
        email: PropTypes.string.isRequired,
      }),
      props: PropTypes.string.isRequired,
    })
  ),
};
