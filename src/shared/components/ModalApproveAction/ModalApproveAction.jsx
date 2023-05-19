import Modal from '../ModalWindow/Modal';

import css from './ModalApproveAction.module.css';

const ModalApproveAction = ({ closeModal }) => {
  return (
    <>
      <Modal className={css.modalApprove} closeModal={closeModal}>
        <h1>Already leaving?</h1>
        <button className={css.modalBtn} onClick={closeModal}>
          Cancel
        </button>
        <button className={css.modalBtn} onClick={closeModal}>
          Yes <PetsIcon className={css.modalIcon} />
        </button>
      </Modal>
    </>
  );
};

export default ModalApproveAction;