import { NavLink } from 'react-router-dom';

import UserAvatarIcon from './UserAvatarIcon/UserAvatarIcon';
import UserDefaultIcon from '../../../icons/UserDefaultIcon';


import { getUser } from 'redux/auth/auth-selectors';

import styles from './navBarUser.module.css';
import { useSelector } from 'react-redux';

export default function NavBarUser({ isMobile, style }) {
  const userName = useSelector(getUser);

  const userAvatar = null;

  return (
    <div className={styles.container} style={style}>
      <NavLink className={styles.link} to="/user">
        {userAvatar ? (
          <UserAvatarIcon src={userAvatar} />
        ) : (
          <UserDefaultIcon style={{ marginRight: 12 }} />
        )}
        {!isMobile && <p className={styles.text}>{userName}</p>}
      </NavLink>
    </div>
  );
}
