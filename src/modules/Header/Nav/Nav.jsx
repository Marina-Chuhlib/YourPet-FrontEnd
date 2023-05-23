import { NavLink } from 'react-router-dom';
import styles from './nav.module.css';

export default function Nav({onClick}) {
  return (
    <nav>
      
        <ul className={styles.list}>
        <li className={styles.item} onClick={onClick}>
          <NavLink className={styles.link} to="/news">
            News
          </NavLink>
        </li>
        <li className={styles.item} onClick={onClick}>
          <NavLink className={styles.link} to="/notices/sell">
            Find pet
          </NavLink>
        </li>
        <li className={styles.item} onClick={onClick}>
          <NavLink className={styles.link} to="/friends">
            Our friends
          </NavLink>
        </li>
      </ul>
      
    </nav>
  );
}

