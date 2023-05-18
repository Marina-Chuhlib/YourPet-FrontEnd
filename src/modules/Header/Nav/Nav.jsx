// import React from 'react';
// // import { Box } from '@material-ui/core';
// import { Link } from 'react-router-dom';
// import Box from '@mui/material/Box';

// const items = [
//   { id: 1, title: 'News', link: '/news' },
//   { id: 2, title: 'Find Pets', link: '/notices/sell'},
//   { id: 3, title: 'Our Friends', link: '/friends' },
// ];

// const Nav = () => {
//   return (
//       <Box sx={{
//             flexGrow: 1, display: { xs: 'none', md: 'flex' },
//             my: 2,
//             color: 'black',
//             fontFamily: 'Manrope',
//             fontWeight: 500,
//             letterSpacing: '0.04em',
//             // display: 'block'
//       }}>
//       {items.map(item => (
//         <div key={item.id}>
//           <Link to={item.link}>{item.title}</Link>
//         </div>
//       ))}
//     </Box>
//   );
// };
// export default Nav;

import { NavLink } from 'react-router-dom';
import styles from './nav.module.css';

export default function Nav() {
  return (
    <nav>
      <div className={styles.wrapper}>
        <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink className={styles.link} to="/news">
            News
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink className={styles.link} to="/notices/sell">
            Find pet
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink className={styles.link} to="/friends">
            Our friends
          </NavLink>
        </li>
      </ul>
      </div>
    </nav>
  );
}