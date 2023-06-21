// import PetsIcon from '@mui/icons-material/Pets';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from 'shared/hooks/context/ThemeProvider';
import PawPrintIcon from 'icons/PawPrintIcon';
import Modal from '../ModalWindow/Modal';

import css from './ModalCongrats.module.css';

const ModalCongrats = ({ closeModal }) => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();
  return (
    <>
      <Modal className={css.modalCongrats} closeModal={closeModal}>
        <div
          className={`${css.myСomponent} ${
            theme === 'light' ? css.light : css.dark
          }`}
        >
          <h2 className={css.title}>{t("Congrats!")}</h2>
          <p className={css.text}>{t("Your registration is success")}</p>
          <button className={css.modalBtn} onClick={closeModal}>
            {t("Go to profile")} <PawPrintIcon className={css.modalIcon} />
          </button>
        </div>
      </Modal>
    </>
  );
};

export default ModalCongrats;
