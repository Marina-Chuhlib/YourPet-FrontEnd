import css from './MyPets.module.css';
import icon from '../../icons/trash.svg';

import { useDispatch } from 'react-redux';

import { fetchDeleteUserPet } from 'redux/auth/auth-operations';

import * as toasty from 'shared/toastify/toastify';


const PetsItem = pet => {
  const dispatch = useDispatch();

    const handleDelatePet = async _id => {
    await dispatch(fetchDeleteUserPet(_id));
    toasty.toastSuccess('Deleted card');
  };

  return (
    <>
        <img src={pet.imageURL} alt="" className={css.picture} />
        <div className={css.infoWrapper}>
          <div className={css.delBtnWrapper}>
            <p className={css.info}>
              <span className={css.tit}>Name:</span> {pet.name}
            </p>
            <button
              type="button"
              className={css.delBtn}
              onClick={() => handleDelatePet(pet._id)}
            >
              <img src={icon} alt="My SVG" />
            </button>
          </div>

          <p className={css.info}>
            <span className={css.tit}>Date of birth:</span> {pet.birthday}
          </p>
          <p className={css.info}>
            <span className={css.tit}> Breed:</span> {pet.breed}
          </p>
          <p className={css.info}>
            <span className={css.tit}>Comments:</span> {pet.comments}
          </p>
        </div>
    </>
  );
};

export default PetsItem;
