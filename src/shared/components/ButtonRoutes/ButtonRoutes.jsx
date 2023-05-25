import css from './buttonRoutes.module.css';

const ButtonRoutes = ({ children }) => {
  return <div className={css.buttonContainer}>{children}</div>;
};

export default ButtonRoutes;
