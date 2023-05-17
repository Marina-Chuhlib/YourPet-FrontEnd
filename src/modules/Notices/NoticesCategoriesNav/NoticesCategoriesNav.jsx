// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
// import {
//   fetchAllFavoriteNotices,
//   fetchNoticesByCategory,
//   fetchNoticesByOwn,
// } from 'redux/notices/noticesOperations';

// import css from '../NoticesCategoriesNav/NoticesCategoriesNav.module.css';


// const getClassNameLink = ({ isActive }) => {
//   const className = isActive ? `${css.navLink} ${css.active}` : css.navLink;
//   return className;
// };

// const link = [
//   { to: 'sell', text: 'Sell' },
//   { to: 'lost-found', text: 'Lost/Found' },
//   { to: 'for-free', text: 'In good hands' },
// ];

// const NoticesCategoriesNav = () => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   const dispatch = useDispatch();

//   const handleCategoryClick = categoryName => {
//     dispatch(fetchNoticesByCategory({ categoryName, query: '' }));
//   };

//   return (
//     <div>
//       <ul className={css.navList}>
//         {link.map(element => (
//           <li>
//             <NavLink
//               to={element.to}
//               className={getClassNameLink}
//               onClick={() => handleCategoryClick(element.to)}
//             >
//               {element.text}
//             </NavLink>
//           </li>
//         ))}
//         {isLoggedIn && (
//           <>
//             <li key={1}>
//               <NavLink
//                 to="own"
//                 className={getClassNameLink}
//                 onClick={() => dispatch(fetchNoticesByOwn( ))}
//               >
//                 My ads
//               </NavLink>
//             </li>
//             <li key={2}>
//               <NavLink to="favorite" className={getClassNameLink} onClick={() => dispatch(fetchAllFavoriteNotices( ))}>
//                 Favorite ads
//               </NavLink>
//             </li>
//           </>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default NoticesCategoriesNav;
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
import {
  fetchAllFavoriteNotices,
  fetchNoticesByCategory,
  fetchNoticesByOwn,
} from 'redux/notices/noticesOperations';

import css from '../NoticesCategoriesNav/NoticesCategoriesNav.module.css';

const link = [
  { to: 'sell', text: 'Sell' },
  { to: 'lost-found', text: 'Lost/Found' },
  { to: 'for-free', text: 'In good hands' },
];

const getClassNameLink = ({ isActive }) => {
  const className = isActive ? `${css.navLink} ${css.active}` : css.navLink;
  return className;
};

const NoticesCategoriesNav = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  const handleCategoryClick = (categoryName) => {
    dispatch(fetchNoticesByCategory({ categoryName, query: '' }));
  };

  return (
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
      {isLoggedIn && (
        <>
          <li key="own">
            <NavLink
              to="own"
              className={getClassNameLink}
              onClick={() => dispatch(fetchNoticesByOwn())}
            >
              My ads
            </NavLink>
          </li>
          <li key="favorite">
            <NavLink
              to="favorite"
              className={getClassNameLink}
              onClick={() => dispatch(fetchAllFavoriteNotices())}
            >
              Favorite ads
            </NavLink>
          </li>
        </>
      )}
    </ul>
  );
};

export default NoticesCategoriesNav;
