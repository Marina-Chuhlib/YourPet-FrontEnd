import Button from 'shared/components/ButtonNotices/ButtonNotices';
import HeartIcon from 'icons/HeartIcon';

import css from './addToFavorite.module.css';

const AddToFavorite = () => {
  return (
    <Button className={css.addTo}>
      Add to
      <HeartIcon className={css.heartIcon} />
    </Button>
  );
};
export default AddToFavorite;
