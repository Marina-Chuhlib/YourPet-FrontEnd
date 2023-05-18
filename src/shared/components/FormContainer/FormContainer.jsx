import css from './formContainer.module.css';

const FormContainer = ({ children }) => {
  return <div className={css.formContainer}>{children}</div>;
};

export default FormContainer;
