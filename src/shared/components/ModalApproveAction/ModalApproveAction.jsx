import Modal from '../ModalWindow/Modal';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
//import Button from '@mui/material/Button';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import css from './ModalApproveAction.module.css';
import { current } from 'redux/auth/auth-operations';

const ModalApproveAction = ({ closeModal }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleModalClose = () => {
        closeModal();
        dispatch(current());
        navigate('/user'); 
      };
      const handleLogout = () => {
    closeModal();
    // closeModal();
    // dispatch(logout());
    // navigate('/');
  };
  return (
    <>
      <Modal className={css.modalApprove} closeModal={handleModalClose}>
        <h1>Already leaving?</h1>
        <div className={css.modalBtnContainer}>
        <button className={`${css.modalBtn} ${css.whiteBtn}`} onClick={handleModalClose}>
          Cancel
        </button>
        <button className={css.modalBtn} onClick={handleLogout}>
          Yes <LogoutOutlinedIcon className={css.modalIcon} />
        </button>
        </div>
      </Modal>
    </>
  );
};

export default ModalApproveAction;