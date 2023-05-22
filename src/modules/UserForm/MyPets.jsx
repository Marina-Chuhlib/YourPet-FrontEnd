import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { userMyPets } from 'redux/auth/auth-selectors';

import PetsItem from './PetsItem';

import Button from '@mui/material/Button';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

import css from './MyPets.module.css';

const MyPets = () => {
  const pets = useSelector(userMyPets);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/add-pet');
  };

  return (
    <div className={css.wrapper}>
      <dir className={css.wrapperTitle}>
        <h3 className={css.title}>My Pets:</h3>
        <Button
          variant="contained"
          endIcon={
            <AddOutlinedIcon
              style={{
                textAlign: 'center',
                fontSize: '16px',
              }}
            />
          }
          style={{
            borderRadius: '20px',
            backgroundColor: '#54adff',
            color: '#FEF9F9',
            textAlign: 'center',
            fontSize: '16px',
            paddingTop: '8px',
            paddingLeft: '16px',
            paddingRight: '16px',
            fontFamily: 'Manrope',
            textTransform: 'none',
            height: '40px',
          }}
          onClick={handleClick}
        >
          Add Pet
        </Button>
      </dir>

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
    </div>
  );
};

export default MyPets;
