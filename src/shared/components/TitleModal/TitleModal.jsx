import css from './TitleModal.module.css';

const TitleModal = ({ titleForm }) => {
  return <h2 className={css.title}>{titleForm}</h2>;
};

export default TitleModal;
