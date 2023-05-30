import styles from './userAvatarIcon.module.css';

export default function UserAvatarIcon({ src }) {

  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src={src} alt="User Avatar" />     
    </div>
  );
}