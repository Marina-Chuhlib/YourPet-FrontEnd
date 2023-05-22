import { NavLink } from 'react-router-dom';
import styles from './nav.module.css';

export default function Nav(onClick) {
  return (
    <nav>
      <div className={styles.wrapper}>
        <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink className={styles.link} to="/news" onClick={onClick}>
            News
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink className={styles.link} to="/notices/sell" onClick={onClick}>
            Find pet
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink className={styles.link} to="/friends" onClick={onClick}>
            Our friends
          </NavLink>
        </li>
      </ul>
      </div>
    </nav>
  );
}