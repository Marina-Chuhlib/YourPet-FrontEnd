import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { userMyPets } from 'redux/auth/auth-selectors';
import { selectIsLoading } from 'redux/auth/auth-selectors';

import Loader from 'shared/components/Loader/Loader';

import PetsItem from './PetsItem';

import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

import css from './MyPets.module.css';

const MyPets = () => {
  const isLoading = useSelector(selectIsLoading);
  const pets = useSelector(userMyPets);


  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/add-pet');
  };

  return (
    <div className={css.wrapper}>
      {isLoading && <Loader />}
      <dir className={css.wrapperTitle}>
        <h3 className={css.title}>My Pets:</h3>
        <button type="button" onClick={handleClick} className={css.addPetBtn}>
          Add Pet
          <AddOutlinedIcon
            style={{
              textAlign: 'center',
              fill: '#ffffff',
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
            <p className={css.text}>My pets list empty</p>
          )}
        </div>
      )}
    </div>
  );
};

export default MyPets;
