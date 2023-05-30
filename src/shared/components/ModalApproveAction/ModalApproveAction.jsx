import Modal from '../ModalWindow/Modal';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ThemeContext } from 'shared/hooks/context/ThemeProvider';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import css from './ModalApproveAction.module.css';
import { logout } from 'redux/auth/auth-operations';

const ModalApproveAction = ({ closeModal }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext);

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
             <div
        className={`${css.myСomponent} ${
          theme === 'light' ? css.light : css.dark
        }`}
      >
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
          </div>
      </Modal>
    </>
  );
};

export default ModalApproveAction;
