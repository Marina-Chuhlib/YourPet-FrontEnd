import PropTypes from 'prop-types';

import Button from 'shared/components/ButtonNotices/ButtonNotices';
import HeartIcon from 'icons/HeartIcon';
import css from './addToFavorite.module.css';

const AddToFavorite = ({ handleFavoriteToggle }) => {
  return (
    <Button className={css.addTo} onClick={handleFavoriteToggle}>
      Add to
      <HeartIcon className={css.heartIcon} />
    </Button>
  );
};
export default AddToFavorite;
AddToFavorite.propTypes = {
  handleFavoriteToggle: PropTypes.func,
};
