import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PawPrintIcon from 'icons/PawPrintIcon';
import css from './not-found-route.module.css';

import oopsMobile1x from 'images/oops-mob@1x.png';
import oopsMobile2x from 'images/oops-mob@2x.png';
import oopsTab1x from 'images/oops-tab@1x.png';
import oopsTab2x from 'images/oops-tab@2x.png';
import oopsDesc1x from 'images/oops-desc@1x.png';
import oopsDesc2x from 'images/oops-desc@2x.png';

const NotFoundRoute = () => {
  const { t } = useTranslation();
  return (
    <section className={css.section}>
      <div className="container">
        <h2 className={css.text}>{t('Ooops! This page not found:(')}</h2>
        <div className={css.wrapper}>
          <picture>
            <source
              media="(min-width: 1280px)"
              srcSet={`${oopsDesc1x}, ${oopsDesc2x} 2x`}
            />
            <source
              media="(min-width: 768px)"
              srcSet={`${oopsTab1x}, ${oopsTab2x} 2x`}
            />
            <img
              src={oopsMobile1x}
              srcSet={`${oopsMobile1x}, ${oopsMobile2x} 2x`}
              alt="Dogs and cat"
            />
          </picture>
        </div>
        <Link to="/">
          <button className={css.btn}>
            {t('To main page')} <PawPrintIcon className={css.icon} />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default NotFoundRoute;
