import Button from 'shared/components/ButtonNotices/ButtonNotices';
import css from './contact.module.css';
const Contact = ({ phone }) => {
  return (
    <Button className={css.contact}>
      <a href={`tel:${phone}`} className={css.contactLink}>
        Contact
      </a>
    </Button>
  );
};
export default Contact;
