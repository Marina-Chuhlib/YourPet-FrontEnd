import Modal from '../ModalWindow/Modal';

import { useDispatch } from 'react-redux';

// import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import css from './ModalApproveAction.module.css';

import { fetchDeleteUserPet } from 'redux/auth/auth-operations';

const ModalApproveActionDeleteCard = ({ closeModal, _id }) => {
  const dispatch = useDispatch();

  const handleModalClose = () => {
    closeModal();
  };

  const handleConfirm = async () => {
    console.log(_id);
    await dispatch(fetchDeleteUserPet(_id));
    closeModal();
  };

  return (
    <>
      <Modal className={css.modalApprove} closeModal={handleModalClose}>
        <h1>Really want delete the card?</h1>
        <div className={css.modalBtnContainer}>
          <button
            className={`${css.modalBtn} ${css.whiteBtn}`}
            onClick={handleModalClose}
          >
            Cancel
          </button>
          <button className={css.modalBtn} onClick={handleConfirm()}>
            Yes
            {/* <LogoutOutlinedIcon className={css.modalIcon}
                      /> */}
          </button>
        </div>
      </Modal>
    </>
  );
};

export default ModalApproveActionDeleteCard;
