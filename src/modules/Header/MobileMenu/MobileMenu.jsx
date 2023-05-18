import { createPortal } from 'react-dom';

import styles from './mobile-menu.module.css';

function CrossIcon(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns=""
      {...props}
    >
      <path
        d="M19 5L5 19M5 5l14 14"
        stroke="#54ADFF"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function MobileMenu({ children, onClick, isMobile }) {
  return createPortal(
    <div className={styles.mobileMenu}>
      <div className={styles.head}>
        <Logo isMobile={isMobile} />
        <CrossIcon className={styles.closeButton} onClick={onClick} />
      </div>
      {children}
    </div>,
    document.querySelector('#modal-root')
  );
}