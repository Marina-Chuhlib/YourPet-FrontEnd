import PropTypes from 'prop-types';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ModalApproveActionDeleteCard from 'shared/components/ModalApproveAction/ModalApproveActionDeleteCard';

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

  const { t } = useTranslation();

  return (
    <>
      {isModalOpen && (
        <ModalApproveActionDeleteCard
          closeModal={closeModal}
          _id={_id}
          name={name}
        />
      )}
      <img src={imageURL} alt="" className={css.picture} />
      <div className={css.infoWrapper}>
        <div className={css.delBtnWrapper}>
          <p className={css.info}>
            <span className={css.tit}>{t("Name")}:</span> {name}
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
          <span className={css.tit}>{t("Date of birth")}:</span> {birthday}
        </p>
        <p className={css.info}>
          <span className={css.tit}>{t("Breed")}</span> {breed}
        </p>
        <p className={css.info}>
          <span className={css.tit}>{t("Comments")}:</span> {comments}
        </p>
      </div>
    </>
  );
};

PetsItem.propTypes = {
  _id: PropTypes.objectOf(PropTypes.string.isRequired),
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  birthday: PropTypes.string,
  breed: PropTypes.string,
  comments: PropTypes.string,
};

export default PetsItem;
