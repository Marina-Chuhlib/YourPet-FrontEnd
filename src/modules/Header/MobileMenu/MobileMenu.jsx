import { createPortal } from 'react-dom';
import { useContext } from 'react';
import { ThemeContext } from 'shared/hooks/context/ThemeProvider';
import Logo from '../Logo/Logo';
import CrossIcon from 'icons/CrossIcon';

import styles from './mobile-menu.module.css';

export default function MobileMenu({ children, onClick, isMobile }) {
  const { theme } = useContext(ThemeContext);
  return createPortal(
    <div
      className={`${styles.myСomponent} ${
        theme === 'light' ? styles.light : styles.dark
      }`}
    >
      <div className={styles.mobileMenu}>
        <div className={styles.head} onClick={onClick}>
          <Logo isMobile={isMobile} />
          <CrossIcon className={styles.closeButton} />
        </div>
        {children}
      </div>
    </div>,
    document.querySelector('#modal-root')
  );
}
