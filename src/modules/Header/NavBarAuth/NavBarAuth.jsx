import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PawprintIcon from '../../../icons/PawPrintIcon';
import styles from './navbarauth.module.css';

const NavBarAuth = ({ onClick }) => {
  const { t } = useTranslation();
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.item} onClick={onClick}>
          <NavLink className={`${styles.link} ${styles.login}`} to="/login">
            {t('Log IN')}
            <PawprintIcon className={styles.icon} />
          </NavLink>
        </li>
        <li className={styles.item} onClick={onClick}>
          <NavLink className={styles.link} to="/register">
            {t('Registration')}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBarAuth;
