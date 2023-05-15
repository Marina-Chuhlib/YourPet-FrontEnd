import { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { ReactComponent as Close } from '../../../images/icons/close.svg';
// import PropTypes from 'prop-types';
import css from './modal-window.module.css';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, close }) => {
  const closeModal = useCallback(
    ({ target, currentTarget, code }) => {
      if (target === currentTarget || code === 'Escape') {
        close();
      }
    },
    [close]
  );

  useEffect(() => {
    document.addEventListener('keydown', closeModal);

    return () => document.removeEventListener('keydown', closeModal);
  }, [closeModal]);

  return createPortal(
    <div className={css.overlay} onClick={closeModal}>
      <div className={css.modal}>
        <button className={css.btnClose} onClick={close}>
          <Close></Close>
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;

// Modal.propTypes = {
//   children: PropTypes.element.isRequired,
//   close: PropTypes.func.isRequired,
// };

