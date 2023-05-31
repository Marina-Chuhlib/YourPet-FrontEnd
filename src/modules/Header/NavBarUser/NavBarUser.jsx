import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUser } from 'redux/auth/auth-selectors';

import UserAvatarIcon from './UserAvatarIcon/UserAvatarIcon';
import UserDefaultIcon from '../../../icons/UserDefaultIcon';

import { userInfo } from 'redux/auth/auth-selectors';


import styles from './navBarUser.module.css';


export default function NavBarUser({ isMobile, style, onClick }) {
  const userName = useSelector(getUser);
  const {user}= useSelector(userInfo)

  const userAvatar = user.imageURL;
  return (
    <div className={styles.container} style={style}>
      <NavLink className={styles.link} onClick={onClick} to="/user">
        {userAvatar ? (
          <UserAvatarIcon src={userAvatar}/>
        ) : (
          <UserDefaultIcon style={{ marginRight: 12 }} />
        )}
        {!isMobile && <p className={styles.text}>{userName}</p>}
      </NavLink>
    </div>
  );
}


