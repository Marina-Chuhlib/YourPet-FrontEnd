
import React, { useState, useEffect } from 'react';
import Modal from 'shared/components/ModalWindow/Modal';
import styles from './Footer.module.css';
// import { ReactComponent as Logo } from '../Header/logo/logo.svg';


const Footer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    // const [isMobile, setIsMobile] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const developers = [
    {
      id: 1,
      name: 'John Doe',
      position: 'Frontend Developer',
      github: 'https://github.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
      photo: '/path/to/photo1.jpg',
    },
    {
      id: 2,
      name: 'Jane Smith',
      position: 'Backend Developer',
      github: 'https://github.com/janesmith',
      linkedin: 'https://linkedin.com/in/janesmith',
      photo: '/path/to/photo11.jpg',
    },
    {
      id: 3,
      name: 'Jane Smith',
      position: 'Backend Developer',
      github: 'https://github.com/janesmith',
      linkedin: 'https://linkedin.com/in/janesmith',
      photo: '/path/to/photo11.jpg',
    },
    {
      id: 4,
      name: 'Jane Smith',
      position: 'Backend Developer',
      github: 'https://github.com/janesmith',
      linkedin: 'https://linkedin.com/in/janesmith',
      photo: '/path/to/photo11.jpg',
    },
    {
      id: 5,
      name: 'Jane Smith',
      position: 'Backend Developer',
      github: 'https://github.com/janesmith',
      linkedin: 'https://linkedin.com/in/janesmith',
      photo: '/path/to/photo11.jpg',
    },
    {
      id: 6,
      name: 'Jane Smith',
      position: 'Backend Developer',
      github: 'https://github.com/janesmith',
      linkedin: 'https://linkedin.com/in/janesmith',
      photo: '/path/to/photo11.jpg',
    },
    {
      id: 7,
      name: 'Jane Smith',
      position: 'Backend Developer',
      github: 'https://github.com/janesmith',
      linkedin: 'https://linkedin.com/in/janesmith',
      photo: '/path/to/photo11.jpg',
    },
    {
      id: 8,
      name: 'Jane Smith',
      position: 'Backend Developer',
      github: 'https://github.com/janesmith',
      linkedin: 'https://linkedin.com/in/janesmith',
      photo: '/path/to/photo11.jpg',
    },
    {
      id: 9,
      name: 'Jane Smith',
      position: 'Backend Developer',
      github: 'https://github.com/janesmith',
      linkedin: 'https://linkedin.com/in/janesmith',
      photo: '/path/to/photo11.jpg',
    },
    {
      id: 10,
      name: 'Jane Smith',
      position: 'Backend Developer',
      github: 'https://github.com/janesmith',
      linkedin: 'https://linkedin.com/in/janesmith',
      photo: '/path/to/photo11.jpg',
    },
    {
      id: 11,
      name: 'Jane Smith',
      position: 'Backend Developer',
      github: 'https://github.com/janesmith',
      linkedin: 'https://linkedin.com/in/janesmith',
      photo: '/path/to/photo11.jpg',
    },
    ];
    
    //  useEffect(() => {
    // const handleResize = () => {
    //   setIsMobile(window.innerWidth < 768);
    // };

    // window.addEventListener('resize', handleResize);
    // handleResize();

    // return () => {
    //   window.removeEventListener('resize', handleResize);
    // };
    //  }, []);
    
  return (
    <div className="container">
      <footer className={styles.footer}>
       {/* {isMobile ? null : <Logo />} */}
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h2 className={styles.titleFooter}>About Us</h2>
            <p className={styles.text}>
              YourPet - a platform for pet owners and animal enthusiasts.Discover, connect, and care for animals together on YourPet.
            </p>
          </div>
          <div className={styles.footerSection}>
            <h2 className={styles.titleFooter}>Developers</h2>
            <p className={styles.text}>Meet the developers behind YourPet:</p>
            <button className={styles.modalOpenButton} onClick={openModal}>
              View Developers
            </button>
          </div>
        </div>
        {isModalOpen && (
          <Modal closeModal={closeModal}>
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
                      className={styles.link}
                      href={developer.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                    <a
                      className={styles.link}
                      href={developer.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </Modal>
        )}
      </footer>
    </div>
  );
};

export default Footer;
