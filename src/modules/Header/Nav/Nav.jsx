import { NavLink } from 'react-router-dom';
import styles from './nav.module.css';

export default function Nav() {
  return (
    <nav>
      <div className={styles.wrapper}>
        <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink className={styles.link} to="/news">
            News
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink className={styles.link} to="/notices/sell">
            Find pet
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink className={styles.link} to="/friends">
            Our friends
          </NavLink>
        </li>
      </ul>
      </div>
    </nav>
  );
}