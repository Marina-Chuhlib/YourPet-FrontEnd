import PetsIcon from '@mui/icons-material/Pets';
import Modal from '../ModalWindow/Modal';

import css from './ModalCongrats.module.css';

const ModalCongrats = ({ closeModal }) => {
  return (
    <>
      <Modal className={css.modalCongrats} closeModal={closeModal}>
        <h2>Congrats!</h2>
        <p className={css.text}>Your registration is successful</p>
        <button className={css.modalBtn} onClick={closeModal}>
          Go to profile <PetsIcon className={css.modalIcon} />
        </button>
      </Modal>
    </>
  );
};

export default ModalCongrats;
