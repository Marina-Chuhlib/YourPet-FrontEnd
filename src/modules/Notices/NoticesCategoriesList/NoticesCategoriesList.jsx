import NoticeCategoryItem from '../NoticeCategoryItem/NoticeCategoryItem';
import PlusIcon from 'icons/PlusIcon';

import css from './notices-categories-list.module.css';

const NoticesCategoriesList = ({ id }) => {
  const noticeItem = id.map(({ id, props }) => (
    <NoticeCategoryItem key={id} {...props} />
  ));

  return (
    <>
      {document.documentElement.clientWidth < 768 && (
        <button
          className={css.addPetBtn}
          SVGComponent={() => (
            <PlusIcon className={css.addPetBtnIcon} color="#FFFFFF" />
          )}
        >
          Add Pet
        </button>
      )}
      <ul className={css.noticeList}>{noticeItem}</ul>
    </>
  );
};
export default NoticesCategoriesList;
