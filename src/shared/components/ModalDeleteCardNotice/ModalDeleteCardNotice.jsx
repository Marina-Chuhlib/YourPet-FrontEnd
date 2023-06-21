import { useDispatch } from 'react-redux';
import * as toasty from '../../../shared/toastify/toastify';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from 'shared/hooks/context/ThemeProvider';

import Modal from '../ModalWindow/Modal';
import { fetchDeleteNotice } from '../../../redux/notices/noticesOperations';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import css from './modalDeleteCardNotice.module.css';

const ModalDeleteCardNotice = ({ closeModal, _id, title, handleDelete }) => {
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  const handleModalClose = () => {
    closeModal();
  };

  const handleModalCloseDelete = () => {
    dispatch(fetchDeleteNotice(_id));
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
          <h2 className={css.modalTitle}>{t("Delete ad?")}</h2>
          <p className={css.modalText}>
            {t("Are you sure you want to delete")} <b>"{title}"</b>? {t("You can't undo this action.")}
          </p>
          <div className={css.modalBtnContainer}>
            <button
              className={`${css.modalBtn} ${css.whiteBtn}`}
              onClick={handleModalClose}
            >
              {t("Cancel")}
            </button>
            <button className={css.modalBtn} onClick={handleModalCloseDelete}>
              {t("Yes")}
              <DeleteForeverOutlinedIcon
                className={css.modalIcon}
                // sx={{ fontSize: 30 }}
                // style={{ marginLeft: '5px' }}
              />
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalDeleteCardNotice;
