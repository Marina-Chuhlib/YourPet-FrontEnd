import { Component } from 'react';
import { createPortal } from 'react-dom';
import { ReactComponent as Close } from '../../../images/icons/close.svg';
import PropTypes from 'prop-types';
import css from './modal-window.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.closeModal);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.closeModal);
  }

  closeModal = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      this.props.close();
    }
  };
  render() {
      const { children, close } = this.props;
      const { closeModal } = this;
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
  }
}

export default Modal;

Modal.propTypes = {
    children: PropTypes.element.isRequired,
    close: PropTypes.func.isRequired,
};