// import styles from "./navbar-user.module.css"
// import { useSelector, useDispatch } from "react-redux";
// import UserAvatarIcon from './UserAvatarIcon/UserAvatarIcon';

// import { logout } from "../../../redux/auth/auth-operations"

// import { getUser } from "redux/auth/auth-selectors";
// import { useNavigate } from "react-router-dom";

// const NavBarUser = () => {
//     const { name } = useSelector(getUser)

//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const onLogout = async()=> {
//         await dispatch(logout());
//         navigate("/main")
//     }

//     return (
//         <div>
//             {name},<button type="button" onClick={onLogout}>Logout</button>
//         </div>

// export default NavBarUser;

import { NavLink } from 'react-router-dom';
//  import { useSelector } from "react-redux";
import UserAvatarIcon from './UserAvatarIcon/UserAvatarIcon';
import UserDefaultIcon from '../../../icons/UserDefaultIcon';

// import { getUser } from "../../../redux/auth/auth-selectors";
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
