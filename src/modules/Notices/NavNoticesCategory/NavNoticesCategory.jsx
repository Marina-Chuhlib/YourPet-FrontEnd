import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';

import css from "../NavNoticesCategory/NavNoticesCategory.module.css"


const getClassNameLink = ({ isActive }) => {
  const className = isActive ? `${css.navLink} ${css.active}` : css.navLink;
  return className;
};


const link = [
  { to: '/notices/sell', text: 'Sell' },
  { to: '/notices/lost-found', text: 'Lost/Found' },
  { to: '/notices/in-good-hands', text: 'In good hands' },
];

const linkAuth = [
  { to: '/notices/favorite', text: 'Favorite ads' },
  { to: '/notices/own', text: 'My ads' },
];

const NavNoticesCategory = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      <ul className={css.navList}>
        {link.map(element => {
          return (
            <li key={Math.random()} >
              <NavLink to={element.to} className={getClassNameLink}> {element.text} </NavLink>
            </li>
          );
        })}
        {isLoggedIn ? (
          <>
            {linkAuth.map(element => {
              return (
                <li key={Math.random()} >
                  <NavLink to={element.to}className={getClassNameLink}>  {element.text}</NavLink>
                </li>
              );
            })}
          </>
        ) : null}
      </ul>
    </div>
  );
};

export default NavNoticesCategory;




