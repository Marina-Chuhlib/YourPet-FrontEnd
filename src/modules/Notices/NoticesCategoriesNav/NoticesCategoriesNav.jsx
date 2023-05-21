import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNoticesByCategory } from 'redux/notices/noticesOperations';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';

import css from './NoticesCategoriesNav.module.css';
import PlusIcon from 'icons/PlusIcon';
import Filter from '../Filter/Filter';

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
  onPageChange,
  onOwnClick,
  onFavoriteClick,
}) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleCategoryClick = categoryName => {
    dispatch(fetchNoticesByCategory({ categoryName, query: '', page: 1 }));
    onPageChange(1); // Обновляем страницу пагинации
  };

  return (
    <div className={css.wrapper}>
      <ul className={css.navList}>
        {link.map(element => (
          <li key={element.to}>
            <NavLink
              to={element.to}
              className={getClassNameLink}
              onClick={() => handleCategoryClick(element.to)}
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
        <Filter />
        <NavLink to="add-pet">
          <button className={css.btn}>
            Add Pet <PlusIcon color="#FEF9F9" className={css.iconBtn} />
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default NoticesCategoriesNav;
