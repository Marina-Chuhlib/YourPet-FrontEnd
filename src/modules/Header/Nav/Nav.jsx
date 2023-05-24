import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './nav.module.css';

export default function Nav({ onClick }) {
  const location = useLocation();
  const currentCategory = location.pathname.split('/')[2];
  const [category, setCategory] = useState("sell");
  
  useEffect(() => {
    if (!currentCategory) {
      setCategory("sell");
    } else {
      setCategory(currentCategory);
    }
  }, [currentCategory]);
  
  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.item} onClick={onClick}>
          <NavLink className={styles.link} to="/news">
            News
          </NavLink>
        </li>
        <li className={styles.item} onClick={onClick}>
          <NavLink className={styles.link} to={`/notices/${category}`}>
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
