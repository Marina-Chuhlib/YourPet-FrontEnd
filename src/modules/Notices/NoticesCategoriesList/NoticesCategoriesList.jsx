import { useSelector } from 'react-redux';
import { getAllNotices } from 'redux/notices/noticesSelectors';
import NoticeCategoryItem from '../NoticeCategoryItem/NoticeCategoryItem';
import css from './notices-categories-list.module.css';
import PlusIcon from 'icons/PlusIcon';
import Button from 'shared/components/ButtonNotices/ButtonNotices';

const NoticesCategoriesList = () => {
  const allNotices = useSelector(getAllNotices);

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
      <ul className={css.noticeList}>
        {allNotices.map(({ _id, ...props }) => {
          return <NoticeCategoryItem key={_id} {...props} />;
        })}
      </ul>
    </div>
  );
};
export default NoticesCategoriesList;

NoticesCategoriesList.defaultProps = {
  items: [],
};
