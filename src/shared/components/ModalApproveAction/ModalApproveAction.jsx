import Modal from '../ModalWindow/Modal';
//import Button from '@mui/material/Button';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import css from './ModalApproveAction.module.css';

const ModalApproveAction = ({ closeModal }) => {
  return (
    <>
      <Modal className={css.modalApprove} closeModal={closeModal}>
        <h1>Already leaving?</h1>
        <div className={css.modalBtnContainer}>
        <button className={`${css.modalBtn} ${css.whiteBtn}`} onClick={closeModal}>
          Cancel
        </button>
        <button className={css.modalBtn} onClick={closeModal}>
          Yes <LogoutOutlinedIcon className={css.modalIcon} />
        </button>
        </div>
      </Modal>
    </>
  );
};

export default ModalApproveAction;