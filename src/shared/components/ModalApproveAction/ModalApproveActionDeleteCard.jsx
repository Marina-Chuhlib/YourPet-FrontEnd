import Modal from '../ModalWindow/Modal';

import { useDispatch } from 'react-redux';
import { useContext } from 'react';
import { ThemeContext } from 'shared/hooks/context/ThemeProvider';

// import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import css from './ModalApproveAction.module.css';

import { fetchDeleteUserPet } from 'redux/auth/auth-operations';

import * as toasty from '../../../shared/toastify/toastify';

const ModalApproveActionDeleteCard = ({ closeModal, _id, name }) => {
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext);

  const handleModalClose = () => {
    closeModal();
  };

  const handleConfirm = () => {
    dispatch(fetchDeleteUserPet(_id));
    toasty.toastSuccess('Deleted successful');
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

        <h2 className={css.titleDelete}>Delete card?</h2>
        <p className={css.text}>
          Are you sure you want to delete {name}'s card? You don't undo this
          action.
        </p>
        <div className={css.modalBtnContainer}>
          <button
            className={`${css.modalBtn} ${css.whiteBtn}`}
            onClick={handleModalClose}
          >
            Cancel
          </button>
          <button className={css.modalBtn} onClick={handleConfirm}>
            Yes
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
