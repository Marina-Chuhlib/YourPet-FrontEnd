import Modal from '../ModalWindow/Modal';

import { useDispatch } from 'react-redux';
import { useContext } from 'react';
import { ThemeContext } from 'shared/hooks/context/ThemeProvider';
import { useTranslation } from 'react-i18next';
// import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import css from './ModalApproveAction.module.css';

import { fetchDeleteUserPet } from 'redux/auth/auth-operations';

import * as toasty from '../../../shared/toastify/toastify';

const ModalApproveActionDeleteCard = ({ closeModal, _id, name }) => {
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  const handleModalClose = () => {
    closeModal();
  };

  const handleConfirm = () => {
    dispatch(fetchDeleteUserPet(_id));
    toasty.toastSuccess(t('Deleted successful'));
    closeModal();
  };

  return (
    <>
      <Modal className={css.modalApprove} closeModal={handleModalClose}>
        <div
          className={`${css.myСomponent} ${
            theme === 'light' ? css.light : css.dark
          }`}
        >
          <h2 className={css.titleDelete}>{t("Delete card?")}</h2>
          <p className={css.text}>
            {t("Are you sure you want to delete")} {name}'s {t("card? You don't undo this action.")}
          </p>
          <div className={css.modalBtnContainer}>
            <button
              className={`${css.modalBtn} ${css.whiteBtn}`}
              onClick={handleModalClose}
            >
              {t("Cancel")}
            </button>
            <button className={css.modalBtn} onClick={handleConfirm}>
              {t("Yes")}
              <DeleteForeverOutlinedIcon
                sx={{ fontSize: 30 }}
                style={{ marginLeft: '5px' }}
              />
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalApproveActionDeleteCard;
