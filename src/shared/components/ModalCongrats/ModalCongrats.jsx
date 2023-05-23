// import PetsIcon from '@mui/icons-material/Pets';
import PawPrintIcon from 'icons/PawPrintIcon';
import Modal from '../ModalWindow/Modal';

import css from './ModalCongrats.module.css';

const ModalCongrats = ({ closeModal }) => {
  return (
    <>
      <Modal className={css.modalCongrats} closeModal={closeModal}>
        <h2 className={css.title}>Congrats!</h2>
        <p className={css.text}>Youre registration is success</p>
        <button className={css.modalBtn} onClick={closeModal}>
          Go to profile <PawPrintIcon className={css.modalIcon} />
        </button>
      </Modal>
    </>
  );
};

export default ModalCongrats;
