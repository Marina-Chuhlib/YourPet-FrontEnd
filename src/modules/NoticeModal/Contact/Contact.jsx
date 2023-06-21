import PropTypes from 'prop-types';
import { useContext } from 'react';
import { ThemeContext } from 'shared/hooks/context/ThemeProvider';
import { useTranslation } from 'react-i18next';

import Button from 'shared/components/ButtonNotices/ButtonNotices';
import css from './contact.module.css';
const Contact = ({ phone }) => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();
  return (
    <div
      className={`${css.myСomponent} ${
        theme === 'light' ? css.light : css.dark
      }`}
    >
      <Button className={css.contact}>
        <a href={`tel:${phone}`} className={css.contactLink}>
          {t("Contact")}
        </a>
      </Button>
    </div>
  );
};
export default Contact;

Contact.propTypes = {
  phone: PropTypes.string,
};
