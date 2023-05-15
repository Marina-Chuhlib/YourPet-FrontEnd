// const Header = () => {
//   return (
//     <header>
//       <h2>Header</h2>
//     </header>
//   );
// };
// export default Header;
import React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ReactComponent as Logo } from "./logo/logo.svg";



// import { Link } from 'react-router-dom';




import { useSelector } from "react-redux"


import {selectIsLoggedIn} from "../../redux/auth/auth-selectors"

import NavBarAuth from './NavBarAuth/NavBarAuth';
import NavBarUser from './NavBarUser/NavBarUser';
import Nav from './Nav/Nav';


const pages = ['News', 'Find Pets', 'Our Friends'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// const items = [
//   { id: 1, title: 'News', link: '/news' },
//   { id: 2, title: 'Find Pets', link: '/notices/sell'},
//   { id: 3, title: 'Our Friends', link: '/friends' },
// ];


function ResponsiveAppBar() {
    const isLoggedIn = useSelector(selectIsLoggedIn)

    const theme = useTheme();
    const isMobileScreen = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
    const isTabletScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    // const isDesktopScreen = useMediaQuery(theme.breakpoints.up('md'));

    const padding = {
        desktop: '16px',
        tablet: '32px',
        mobile: '20px',
    };




    const containerStyles = {
        padding: isMobileScreen ? padding.mobile :
            isTabletScreen ? padding.tablet : padding.desktop,
        
    };




    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
      <AppBar position="static" component="header" sx={{ background: 'transparent', boxShadow:"none" }}>
        <Container maxWidth="xl" sx={containerStyles}>
          <Toolbar disableGutters>
                  {/* логотип */}
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/YourPet-FrontEnd/main"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            <Logo width={162} height={28} />
                        </Typography>
              {/* бургер меню */}
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'black',
                                textDecoration: 'none',
                            }}
                        >
                            <Logo width={116} height={20} />
                    </Typography>
                    <Nav />
                    {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{
                                        my: 2,
                                        color: 'black',
                                        fontFamily: 'Manrope',
                                        fontWeight: 500,
                                        letterSpacing: '0.04em',
                                        display: 'block'
                                    }}
                                >
                                    {page}
                                </Button>
                            ))}
                    </Box> */}
                    

                      {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {items.map(item => (
                            <div key={item.id}>
                            <Link to={item.link}>
                            {item.title}</Link>
                            </div>
                        ))}
                        </Box> */}
{/* settings */}
                {!isLoggedIn && <NavBarAuth />}
                {isLoggedIn && <NavBarUser />}
                {isLoggedIn && <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar src="/static/images/avatar/2.jpg" sx={{
                                        color: "#FFC107",
                                        background: 'transparent',
                    
                                    }} />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>  
                    }
                        
            {/* бургер */}
                        <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="black"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        
    );
}

export default ResponsiveAppBar;