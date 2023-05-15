import css from './TitleModal.module.css';

const TitleModal = ({ customStyle, title }) => {
  return <h2 className={`${css.title} ${customStyle}`}>{title}</h2>;
};

export default TitleModal;
