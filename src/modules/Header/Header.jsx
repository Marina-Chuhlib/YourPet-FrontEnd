import { useState, useEffect } from 'react';
import Logo from './Logo/Logo'
import Navigation from './Navigation/Navigation';
import styles from './header.module.css';

export default function Header() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1280);
  const [isTablet, setIsTablet] = useState(
    window.innerWidth >= 768 && window.innerWidth < 1280
  );
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

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
    <div className="container">
      <header className={styles.container}>
        <Logo isMobile={isMobile} />
        <Navigation
          isDesktop={isDesktop}
          isTablet={isTablet}
          isMobile={isMobile}
        />
      </header>
    </div>
    
  );
}

