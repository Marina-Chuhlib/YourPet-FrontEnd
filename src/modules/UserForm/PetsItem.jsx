// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { fetchDeleteUserPet } from 'redux/auth/auth-operations';

import * as toasty from 'shared/toastify/toastify';

import css from './MyPets.module.css';
import icon from '../../icons/trash.svg';

const PetsItem = ({
  pet: { imageURL, name, _id, birthday, breed, comments },
}) => {
  const dispatch = useDispatch();

  const handleDelatePet = async _id => {
    await dispatch(fetchDeleteUserPet(_id));
    toasty.toastSuccess('Deleted card');
  };

  return (
    <>
      <img src={imageURL} alt="" className={css.picture} />
      <div className={css.infoWrapper}>
        <div className={css.delBtnWrapper}>
          <p className={css.info}>
            <span className={css.tit}>Name:</span> {name}
          </p>
          <button
            type="button"
            className={css.delBtn}
            onClick={() => handleDelatePet(_id)}
          >
            <img src={icon} alt="My SVG" />
          </button>
        </div>

        <p className={css.info}>
          <span className={css.tit}>Date of birth:</span> {birthday}
        </p>
        <p className={css.info}>
          <span className={css.tit}> Breed:</span> {breed}
        </p>
        <p className={css.info}>
          <span className={css.tit}>Comments:</span> {comments}
        </p>
      </div>
    </>
  );
};

// PetsItem.propTypes = {
//   pet: PropTypes.shape({
//     _id: PropTypes.objectOf(PropTypes.string.isRequired),
//     imageUrl: PropTypes.string,
//     name: PropTypes.string.isRequired,
//     breed: PropTypes.string,
//     birthday: PropTypes.string,
//     comments: PropTypes.string,
//   }),
// };

export default PetsItem;
