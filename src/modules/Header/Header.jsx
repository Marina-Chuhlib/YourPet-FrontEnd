// import React from 'react';
// import { useState } from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// // import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import { useMediaQuery } from '@mui/material';
// import { useTheme } from '@mui/material/styles';
// import { ReactComponent as Logo } from "./logo4/logo.svg";


// import { useSelector } from "react-redux"


// import {selectIsLoggedIn} from "../../redux/auth/auth-selectors"


// import NavBarAuth from './NavBarAuth/NavBarAuth';
// import NavBarUser from './NavBarUser/NavBarUser';
// import Nav from './Nav/Nav';
// // import { Margin } from '@mui/icons-material';


// const pages = ['News', 'Find Pets', 'Our Friends'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];



// function ResponsiveAppBar() {
//     const isLoggedIn = useSelector(selectIsLoggedIn)
    
//     const theme = useTheme();
//     const isMobileScreen = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
//     const isTabletScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
//     // const isDesktopScreen = useMediaQuery(theme.breakpoints.up('md'));

//     const padding = {
//         desktop: '16px',
//         tablet: '32px',
//         mobile: '20px',
//     };
//     const containerStyles = {
//         padding: isMobileScreen ? padding.mobile :
//             isTabletScreen ? padding.tablet : padding.desktop,
        
//     };




//     const [anchorElNav, setAnchorElNav] = useState(null);
//     const [anchorElUser, setAnchorElUser] = useState(null);

//     const handleOpenNavMenu = (event) => {
//         setAnchorElNav(event.currentTarget);
//     };
//     const handleOpenUserMenu = (event) => {
//         setAnchorElUser(event.currentTarget);
//     };

//     const handleCloseNavMenu = () => {
//         setAnchorElNav(null);
//     };

//     const handleCloseUserMenu = () => {
//         setAnchorElUser(null);
//     };
   
        
    

//     return (
//       <AppBar position="static" component="header" sx={{ background: 'transparent', boxShadow:"none" }}>
//         <Container maxWidth="xl" sx={containerStyles}>
//           <Toolbar disableGutters>
//                   {/* логотип */}
//                         <Typography
//                             variant="h6"
//                             noWrap
//                             component="a"
//                             href="/YourPet-FrontEnd/main"
//                             sx={{
//                                 mr: 2,
//                                 display: { xs: 'none', md: 'flex' },
//                                 fontFamily: 'monospace',
//                                 fontWeight: 700,
//                                 letterSpacing: '.3rem',
//                                 color: 'inherit',
//                                 textDecoration: 'none',
//                                 overflow: 'inherit',
//                                 marginRight: 0
//                             }}
//                         >
//                             <Logo />
//                         </Typography>
//               {/* бургер меню */}
//                         <Typography
//                             variant="h5"
//                             noWrap
//                             component="a"
//                             href=""
//                             sx={{
//                                 mr: 2,
//                                 display: { xs: 'flex', md: 'none' },
//                                 flexGrow: 1,
//                                 fontFamily: 'monospace',
//                                 fontWeight: 700,
//                                 letterSpacing: '.3rem',
//                                 color: 'black',
//                                 textDecoration: 'none',
//                             }}
//                         >
//                             <Logo width={116} height={20} />
//                     </Typography>
//                     <Nav />
// {/* settings */}
//                 {!isLoggedIn && <NavBarAuth />}
//                 {isLoggedIn && <NavBarUser />}
//                 {isLoggedIn && <Box sx={{ flexGrow: 0 }}>
//                             <Tooltip title="Open settings">
//                 <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                   ///////
//                                     <Avatar src="/static/images/avatar/2.jpg" sx={{
//                                         color: "#FFC107",
//                                         background: 'transparent',
                    
//                                     }} />
//                                 </IconButton>
//                             </Tooltip>
//                             <Menu
//                                 sx={{ mt: '45px' }}
//                                 id="menu-appbar"
//                                 anchorEl={anchorElUser}
//                                 anchorOrigin={{
//                                     vertical: 'top',
//                                     horizontal: 'right',
//                                 }}
//                                 keepMounted
//                                 transformOrigin={{
//                                     vertical: 'top',
//                                     horizontal: 'right',
//                                 }}
//                                 open={Boolean(anchorElUser)}
//                                 onClose={handleCloseUserMenu}
//                             >
//                                 {settings.map((setting) => (
//                                     <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                                         <Typography textAlign="center">{setting}</Typography>
//                                     </MenuItem>
//                                 ))}
//                             </Menu>
//                         </Box>
//                     }
                        
//             {/* бургер */}
//                         <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
//                             <IconButton
//                                 size="large"
//                                 aria-label="account of current user"
//                                 aria-controls="menu-appbar"
//                                 aria-haspopup="true"
//                                 onClick={handleOpenNavMenu}
//                                 color="black"
//                             >
//                                 <MenuIcon />
//                             </IconButton>
//                             <Menu
//                                 id="menu-appbar"
//                                 anchorEl={anchorElNav}
//                                 anchorOrigin={{
//                                     vertical: 'bottom',
//                                     horizontal: 'left',
//                                 }}
//                                 keepMounted
//                                 transformOrigin={{
//                                     vertical: 'top',
//                                     horizontal: 'left',
//                                 }}
//                                 open={Boolean(anchorElNav)}
//                                 onClose={handleCloseNavMenu}
//                                 sx={{
//                                     display: { xs: 'block', md: 'none' },
//                                 }}
//                             >
//                                 {pages.map((page) => (
//                                     <MenuItem key={page} onClick={handleCloseNavMenu}>
//                                         <Typography textAlign="center">{page}</Typography>
//                                     </MenuItem>
//                                 ))}
//                             </Menu>
//                         </Box>
//                     </Toolbar>
//                 </Container>
//             </AppBar>
        
//     );
// }

// export default ResponsiveAppBar;






import { useState, useEffect } from 'react';
import Logo from './Logo/Logo'
import Navigation from './Navigation/Navigation';
import styles from './header.module.css';

export default function Header() {
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1280);
  const [isTablet, setIsTablet] = useState(
    window.innerWidth >= 768 && window.innerWidth < 1280
  );
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      // setWindowWidth(window.innerWidth);
      setIsDesktop(window.innerWidth >= 1280);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1280);
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className={styles.container}>
      <Logo isMobile={isMobile} />
      <Navigation
        isDesktop={isDesktop}
        isTablet={isTablet}
        isMobile={isMobile}
      />
    </header>
  );
}