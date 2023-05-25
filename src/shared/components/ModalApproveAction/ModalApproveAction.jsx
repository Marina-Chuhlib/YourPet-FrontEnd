import Modal from '../ModalWindow/Modal';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import css from './ModalApproveAction.module.css';
import { logout } from 'redux/auth/auth-operations';

const ModalApproveAction = ({ closeModal }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleModalClose = () => {
    closeModal();
    navigate('/user');
  };

  const handleLogout = () => {
    closeModal();
    dispatch(logout());
    navigate('/');
  };

  return (
    <>
      <Modal className={css.modalApprove} closeModal={handleModalClose}>
        <h2 className={css.modalTitle}>Already leaving?</h2>
        <div className={css.modalBtnContainer}>
          <button
            className={`${css.modalBtn} ${css.whiteBtn}`}
            onClick={handleModalClose}
          >
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
