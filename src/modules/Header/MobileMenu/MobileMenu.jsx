import { createPortal } from 'react-dom';
import Logo from '../Logo/Logo';
import CrossIcon from 'icons/CrossIcon';

import styles from './mobile-menu.module.css';

export default function MobileMenu({ children, onClick, isMobile }) {
  return createPortal(
    <div className={styles.mobileMenu}>
      <div className={styles.head} onClick={onClick}>
        <Logo isMobile={isMobile} />
        <CrossIcon className={styles.closeButton} />
      </div>
      {children}
    </div>,
    document.querySelector('#modal-root')
  );
}
