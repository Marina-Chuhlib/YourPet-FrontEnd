import Modal from '../ModalWindow/Modal';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from 'shared/hooks/context/ThemeProvider';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import css from './ModalApproveAction.module.css';
import { logout } from 'redux/auth/auth-operations';

const ModalApproveAction = ({ closeModal }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();
  
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
        <h2 className={css.modalTitle}>{t("Already leaving?")}</h2>
        <div className={css.modalBtnContainer}>
          <button
            className={`${css.modalBtn} ${css.whiteBtn}`}
            onClick={handleModalClose}
          >
            {t("Cancel")}
          </button>
          <button className={css.modalBtn} onClick={handleLogout}>
            {t("Yes")} <LogoutOutlinedIcon className={css.modalIcon} />
          </button>
          </div>
          </div>
      </Modal>
    </>
  );
};

export default ModalApproveAction;
