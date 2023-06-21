import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { userMyPets, selectIsLoading } from 'redux/auth/auth-selectors';

import Loader from 'shared/components/Loader/Loader';

import PetsItem from './PetsItem';

import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

import { useContext } from 'react';
import { ThemeContext } from 'shared/hooks/context/ThemeProvider';

import css from './MyPets.module.css';

const MyPets = () => {
  const isLoading = useSelector(selectIsLoading);
  const pets = useSelector(userMyPets);
  const { theme } = useContext(ThemeContext);

  const navigate = useNavigate();
const { t } = useTranslation();

  const handleClick = () => {
    navigate('/add-pet');
  };

  return (
    <div className={css.wrapper}>
      {isLoading && <Loader />}
      <div
        className={`${css.myСomponent} ${
          theme === 'light' ? css.light : css.dark
        }`}
      >
        <dir className={css.wrapperTitle}>
          <h3 className={css.title}>{t("My Pets")}:</h3>
          <button type="button" onClick={handleClick} className={css.addPetBtn}>
            {t("Add Pet")}
            <AddOutlinedIcon
              style={{
                textAlign: 'center',
                color: 'inhered',
                width: '24px',
                height: '24px',
                marginLeft: '8px',
              }}
            />
          </button>
        </dir>

        {isLoading && pets.length > 0 && (
          <div className={css.petCardWrapper}>
            <ul className={css.list}>
              {pets.map((pet, index) => {
                return (
                  <li key={index} className={css.item}>
                    <PetsItem pet={pet} />
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {!isLoading && (
          <div className={css.petCardWrapper}>
            {pets.length > 0 ? (
              <ul className={css.list}>
                {pets.map((pet, index) => {
                  return (
                    <li key={index} className={css.item}>
                      <PetsItem pet={pet} />
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p className={css.text}>{t("My pets list empty")}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyPets;
