import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { ThemeContext } from 'shared/hooks/context/ThemeProvider';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';
import styles from './header.module.css';

export default function Header() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1280);
  const [isTablet, setIsTablet] = useState(
    window.innerWidth >= 768 && window.innerWidth < 1280
  );
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1280);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1280);
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      className={`${styles.myСomponent} ${
        theme === 'light' ? styles.light : styles.dark
      }`}
    >
      <div className="container">
        <header className={styles.container}>
          <Logo isMobile={isMobile} />
          {!isMobile && theme === 'light' && (
            <button onClick={toggleTheme} className={styles.lightTheme}>
              <ModeNightIcon className={styles.themeIcon} fontSize="large" />
            </button>
          )}
          {!isMobile && theme === 'dark' && (
            <button onClick={toggleTheme} className={styles.darkTheme}>
              <WbSunnyIcon className={styles.themeIcon} fontSize="large" />
            </button>
          )}

          {isMobile && theme === 'light' && (
            <button onClick={toggleTheme} className={styles.darkTheme}>
              <ModeNightIcon className={styles.themeIcon} fontSize="medium" />
            </button>
          )}

          {isMobile && theme === 'dark' && (
            <button onClick={toggleTheme} className={styles.darkTheme}>
              <WbSunnyIcon className={styles.themeIcon} fontSize="medium" />
            </button>
          )}
          <Navigation
            isDesktop={isDesktop}
            isTablet={isTablet}
            isMobile={isMobile}
          />
        </header>
      </div>
    </div>
  );
}
