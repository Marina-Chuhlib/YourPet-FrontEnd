import { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { useContext } from 'react';
import { ThemeContext } from 'shared/hooks/context/ThemeProvider';
import { ReactComponent as Close } from '../../../images/icons/close.svg';

import css from './modal-window.module.css';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, closeModal }) => {
  const { theme } = useContext(ThemeContext);
  const close = useCallback(
    ({ target, currentTarget, code }) => {
      if (target === currentTarget || code === 'Escape') {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', close);

    return () => document.removeEventListener('keydown', close);
  }, [close]);

  return createPortal(
    <div className={css.overlay} onClick={close}>
      <div
        className={`${css.myСomponent} ${
          theme === 'light' ? css.light : css.dark
        }`}
      >
        <div className={css.modal}>
          <button className={css.btnClose} onClick={closeModal}>
            <Close></Close>
          </button>
          <div className={css.modalContent}>{children}</div>
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
