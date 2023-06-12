import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from 'shared/hooks/context/ThemeProvider';
import { useTranslation } from 'react-i18next';
import Modal from 'shared/components/ModalWindow/Modal';
import styles from './Footer.module.css';
import Logo from '../Header/Logo/Logo';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  const navigate = useNavigate();

  const navigateToMain = () => {
    navigate('/main');
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const developers = [
    {
      id: 1,
      name: t("Maryna Chukhlib"),
      position: 'Team-Lead, Full-stack Developer',
      github: 'https://github.com/Marina-Chuhlib',
      linkedin: 'https://www.linkedin.com/in/marina-chukhlib/',
      photo: require('../../images/team-photos/Maryna Chuhlib.jpg'),
    },
    {
      id: 2,
      name: t('Mariia Lutsenko'),
      position: 'Team-Lead, Full-stack Developer',
      github: 'https://github.com/Mariya-Lutsenko',
      linkedin: 'https://www.linkedin.com/in/mariya-lutsenko',
      photo: require('../../images/team-photos/Mariia Lutsenko.jpg'),
    },
    {
      id: 3,
      name: t('Olena Holubonkova'),
      position: 'Scrum-Master, Full-stack Developer',
      github: 'https://github.com/OlenaTeplodar',
      linkedin: 'https://www.linkedin.com/in/olena-holubonkova/',
      photo: require('../../images/team-photos/Olena Holubonkova.jpg'),
    },
    {
      id: 4,
      name: t('Oksana Riaboshapka'),
      position: 'Full-stack Developer',
      github: 'https://github.com/Oksana1594',
      linkedin: 'https://www.linkedin.com/in/oksana-ryaboshapka/',
      photo: require('../../images/team-photos/Oksana Riaboshapka.jpg'),
    },
    {
      id: 5,
      name: t('Iryna Hubish'),
      position: 'Full-stack Developer',
      github: 'https://github.com/IraGubish2022',
      linkedin: 'https://www.linkedin.com/in/iryna-hubish',
      photo: require('../../images/team-photos/Iryna Hubish.jpg'),
    },
    {
      id: 6,
      name: t('Tetiana Hela'),
      position: 'Full-stack Developer',
      github: 'https://github.com/Tatiana-Hela',
      linkedin: 'https://www.linkedin.com/in/tetiana-hela',
      photo: require('../../images/team-photos/Tetiana Hela.jpg'),
    },
    {
      id: 7,
      name: t('Olena Bondarenko'),
      position: 'Full-stack Developer',
      github: 'https://github.com/OllBond',
      linkedin: 'https://www.linkedin.com/in/olena-bondarenko-ollbond/',
      photo: require('../../images/team-photos/Olena Bondarenko.jpg'),
    },
    {
      id: 8,
      name: t('Serhii Zhydkov'),
      position: 'Full-stack Developer',
      github: 'https://github.com/serhii95zhydkov',
      linkedin: 'https://www.linkedin.com/in/serhii-zhydkov',
      photo: require('../../images/team-photos/Serhii Zhydkov.jpg'),
    },
    {
      id: 9,
      name: t('Dmytro Shatnyi'),
      position: 'Full-stack Developer',
      github: 'https://github.com/shatniydmitriy',
      linkedin: 'https://www.linkedin.com/in/dmytro-shatnyi-6401a3269',
      photo: require('../../images/team-photos/Dmytro Shatnyi.jpg'),
    },
    {
      id: 10,
      name: t('Olena Kudryk'),
      position: 'Full-stack Developer',
      github: 'https://github.com/YelenaKudryk',
      linkedin: 'https://www.linkedin.com/in/yelena-kudryk/',
      photo: require('../../images/team-photos/Olena Kudryk.jpg'),
    },
    {
      id: 11,
      name: t('Maryna Aponasko'),
      position: 'Full-stack Developer',
      github: 'https://github.com/MarynaAponasko',
      linkedin: 'http://linkedin.com/in/aponasko',
      photo: require('../../images/team-photos/Maryna Aponasko.jpg'),
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className={`${styles.myСomponent} ${
        theme === 'light' ? styles.light : styles.dark
      }`}
    >
      <div className="container">
        <footer className={styles.footer}>
          <div
            className={`${styles.logo} ${isMobile ? styles.mobile : ''}`}
            onClick={navigateToMain}
          >
            <Logo isMobile={isMobile} />
          </div>
          <div className={styles.footerContent}>
            <div className={styles.footerSection}>
              <h2 className={styles.titleFooter}>{t("About Us")}</h2>
              <p className={styles.text}>
                {t("YourPet - a platform for pet owners and animal enthusiasts.Discover, connect, and care for animals together on YourPet.")}
              </p>
            </div>
            <div className={styles.footerSection}>
              <h2 className={styles.titleFooter}>{t("Developers")}</h2>
              <p className={styles.text}>{t("Meet the developers behind YourPet:")}</p>
              <button className={styles.modalOpenButton} onClick={openModal}>
                {t("View Developers")}
              </button>
            </div>
          </div>
          {isModalOpen && (
            <Modal closeModal={closeModal}>
              <div
                className={`${styles.myСomponent} ${
                  theme === 'light' ? styles.light : styles.dark
                }`}
              >
                <div className={styles.developersContainer}>
                  {developers.map(developer => (
                    <div key={developer.id} className={styles.developerCard}>
                      <img
                        src={developer.photo}
                        alt={developer.name}
                        className={styles.developerPhoto}
                      />
                      <h3 className={styles.name}>{developer.name}</h3>
                      <p>{developer.position}</p>
                      <div className={styles.socialLinks}>
                        <a
                          className={`${styles.link} ${styles.iconContainer}`}
                          href={developer.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <GitHubIcon style={{ fontSize: '24px' }} />
                        </a>
                        <a
                          className={`${styles.link} ${styles.iconContainer}`}
                          href={developer.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <LinkedInIcon
                            style={{
                              fontSize: '24px',
                              color: '#0e76a8',
                              background: theme === 'dark' && '#d9d2d2',
                            }}
                          />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Modal>
          )}
        </footer>
      </div>
    </div>
  );
};

export default Footer;
