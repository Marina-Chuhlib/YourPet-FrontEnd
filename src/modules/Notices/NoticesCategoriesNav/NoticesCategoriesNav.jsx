import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
import * as toasty from '../../../shared/toastify/toastify';
// import Filter from '../Filter/Filter';
import PlusIcon from 'icons/PlusIcon';

import css from './NoticesCategoriesNav.module.css';

const link = [
  { to: 'sell', text: 'Sell' },
  { to: 'lost-found', text: 'Lost/Found' },
  { to: 'for-free', text: 'In good hands' },
];

const getClassNameLink = ({ isActive }) => {
  const className = isActive ? `${css.navLink} ${css.active}` : css.navLink;
  return className;
};

const NoticesCategoriesNav = ({
  onOwnClick,
  onFavoriteClick,
  handleCategoryClick,
}) => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleClick = () => {
    if (!isLoggedIn) {
      toasty.toastError('Only a registered user can add pet!');
      return;
    } else {
      navigate('/add-pet');
    }
  };

  return (
    <div className={css.wrapper}>
      <ul className={css.navList}>
        {link.map(element => (
          <li key={element.to}>
            <NavLink
              to={element.to}
              className={getClassNameLink}
              onClick={() => {
                handleCategoryClick(element.to);
              }}
            >
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
                My ads
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
                Favorite ads
              </NavLink>
            </li>
          </>
        )}
      </ul>
      <div className={css.btnContainer}>
        {/* <Filter /> */}
        <button className={css.btn} onClick={handleClick}>
          Add Pet <PlusIcon color="#FEF9F9" className={css.iconBtn} />
        </button>
      </div>
    </div>
  );
};

export default NoticesCategoriesNav;
