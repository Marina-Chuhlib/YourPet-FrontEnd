import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from 'shared/hooks/context/ThemeProvider';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
import * as toasty from '../../../shared/toastify/toastify';
// import Filter from '../Filter/Filter';
import PlusIcon from 'icons/PlusIcon';

import css from './NoticesCategoriesNav.module.css';



const getClassNameLink = ({ isActive }) => {
  const className = isActive ? `${css.navLink} ${css.active}` : css.navLink;
  return className;
};

const NoticesCategoriesNav = ({ onOwnClick, onFavoriteClick }) => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();
  
const link = [
  { to: 'sell', text: t('sell') },
  { to: 'lost-found', text: t('lost/found') },
  { to: 'for-free', text: t('in good hands') },
];

  const handleClick = () => {
    if (!isLoggedIn) {
      toasty.toastInfo(t('You must be logged in'));
      return;
    } else {
      navigate('/add-pet');
    }
  };

  return (
    <div
      className={`${css.myСomponent} ${
        theme === 'light' ? css.light : css.dark
      }`}
    >
      <div className={css.wrapper}>
        <ul className={css.navList}>
          {link.map(element => (
            <li key={element.to}>
              <NavLink to={element.to} className={getClassNameLink}>
                {element.text}
              </NavLink>
            </li>
          ))}
          {isLoggedIn && (
            <>
              <li key="own">
                <NavLink
                  to="own"
                  className={getClassNameLink}
                  onClick={() => {
                    onOwnClick();
                  }}
                >
                  {t("my ads")}
                </NavLink>
              </li>
              <li key="favorite">
                <NavLink
                  to="favorite"
                  className={getClassNameLink}
                  onClick={() => {
                    onFavoriteClick();
                  }}
                >
                  {t("favorite ads")}
                </NavLink>
              </li>
            </>
          )}
        </ul>
        <div className={css.btnContainer}>
          {/* <Filter /> */}
          <button className={css.btn} onClick={handleClick}>
            {t("Add Pet")}<PlusIcon color="#FEF9F9" className={css.iconBtn} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoticesCategoriesNav;
