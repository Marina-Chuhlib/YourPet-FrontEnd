import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
import { fetchNoticesByCategory } from 'redux/notices/noticesOperations';

import css from "../NoticesCategoriesNav/NoticesCategoriesNav.module.css"

const getClassNameLink = ({ isActive }) => {
  const className = isActive ? `${css.navLink} ${css.active}` : css.navLink;
  return className;
};

const link = [
  { to: 'sell', text: 'Sell' },
  { to: 'lost-found', text: 'Lost/Found' },
  { to: 'for-free', text: 'In good hands' },
];

const linkAuth = [
  { to: 'favorite', text: 'Favorite ads' },
  { to: 'own', text: 'My ads' },
];

const NoticesCategoriesNav = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  const handleCategoryClick = (categoryName) => {
    dispatch(fetchNoticesByCategory({categoryName, query:""}));
  };

  return (
    <div>
      <ul className={css.navList}>
        {link.map((element) => (
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
        {isLoggedIn &&
          linkAuth.map((element) => (
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
      </ul>
    </div>
  );
};

export default NoticesCategoriesNav;
