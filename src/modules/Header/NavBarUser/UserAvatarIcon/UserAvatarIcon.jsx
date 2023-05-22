import styles from './userAvatarIcon.module.css';
import { getUser } from "../../../../redux/auth/auth-selectors";
import { useSelector } from "react-redux";
 

export default function UserAvatarIcon({ src }) {
  const { name } = useSelector(getUser)
  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src={src} alt="User Avatar" />
      {name}
    </div>
  );
}