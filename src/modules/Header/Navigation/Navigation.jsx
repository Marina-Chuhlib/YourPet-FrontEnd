import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../../redux/auth/auth-selectors';
import Nav from '../Nav/Nav';
import NavBarUser from '../NavBarUser/NavBarUser';
import NavBarAuth from '../NavBarAuth/NavBarAuth';
import MobileMenu from '../MobileMenu/MobileMenu';
import HamburgerIcon from '../../../icons/HamburgerIcon';
import styles from './navigation.module.css';


export default function Navigation({ isDesktop, isTablet, isMobile }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
 

  useEffect(() => {
    if (isDesktop) {
      setShowMobileMenu(false);
    }
  }, [isDesktop]);

  const toggleMobileMenu = e => {
    e.preventDefault();
    setShowMobileMenu(showMobileMenu => !showMobileMenu);
  };

  return (

      <div className={styles.navigation}>
        
      {isDesktop && (
        <>
          <Nav />
          {isLoggedIn ? <NavBarUser /> : <NavBarAuth />}
        </>
      )}

      {(isTablet || isMobile) && (
        <>
          {!isLoggedIn && isTablet && <NavBarAuth />}
          {isLoggedIn && <NavBarUser isMobile={isMobile} />}
          <HamburgerIcon className={styles.burger} onClick={toggleMobileMenu} />
        </>
      )}
      {showMobileMenu && (
        <MobileMenu onClick={toggleMobileMenu} isMobile={isMobile}>
          {isLoggedIn && isMobile && (
            <NavBarUser style={{ marginTop: 40, marginBottom: 84 }}
              onClick={toggleMobileMenu}
            />
          )}
          {!isLoggedIn && isMobile && <NavBarAuth onClick={toggleMobileMenu}/>}
          <Nav onClick={toggleMobileMenu}/>
        </MobileMenu>
      )}
      </div>
  );
}


