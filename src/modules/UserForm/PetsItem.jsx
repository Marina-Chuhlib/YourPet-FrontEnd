// import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';
import { useState } from 'react';

import ModalApproveActionDeleteCard from 'shared/components/ModalApproveAction/ModalApproveActionDeleteCard';

// import { fetchDeleteUserPet } from 'redux/auth/auth-operations';



import css from './MyPets.module.css';
import icon from '../../icons/trash.svg';


const PetsItem = ({
  pet: { imageURL, name, _id, birthday, breed, comments },
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDeletePet = () => {
    setIsModalOpen(true);
  
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && (
        <ModalApproveActionDeleteCard closeModal={closeModal} _id={_id} name={name} />
      )}
      <img src={imageURL} alt="" className={css.picture} />
      <div className={css.infoWrapper}>
        <div className={css.delBtnWrapper}>
          <p className={css.info}>
            <span className={css.tit}>Name:</span> {name}
          </p>
          <button
            type="button"
            className={css.delBtn}
            onClick={handleDeletePet}
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


export default PetsItem;
