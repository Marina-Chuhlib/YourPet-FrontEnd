import css from './main.module.css';
import { useContext } from 'react';
import { ThemeContext } from 'shared/hooks/context/ThemeProvider';
import { useTranslation } from 'react-i18next';

import dogsMobile1x from 'images/dogs-mobile1x.png';
import dogsMobile2x from 'images/dogs-mobile2x.png';
import dogsTat1x from 'images/dogs-tablet1x.png';
import dogsTab2x from 'images/dogs-tablet2x.png';
import dogsDesc1x from 'images/dogs-desktop@1x.png';
import dogsDesc2x from 'images/dogs-desktop2x.png';

const Main = () => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`${css.myСomponent} ${
        theme === 'light' ? css.light : css.dark
      }`}
    >
      <section className={css.sectionMain}>
        <div className="container">
          <div className={css.positionText}>
            <div>
              <h1 className={css.text}>{t('Take good care of your small pets')}</h1>
            </div>

            <div className={css.wrapper}>
              <picture>
                <source
                  media="(min-width: 1280px)"
                  srcSet={`${dogsDesc1x}, ${dogsDesc2x} 2x`}
                />
                <source
                  media="(min-width: 768px)"
                  srcSet={`${dogsTat1x}, ${dogsTab2x} 2x`}
                />
                <img
                  src={dogsMobile1x}
                  srcSet={`${dogsMobile1x}, ${dogsMobile2x} 2x`}
                  alt="Dogs and cat"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Main;
