import css from './UserForm.module.css';
const UserForm = () => {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <h2 className={css.userInfo}>My information:</h2>
        <div className={css.wrapperForm}></div>
      </div>
    </div>
  );
};
export default UserForm;
