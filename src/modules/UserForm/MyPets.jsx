import Button from '@mui/material/Button';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

import css from './MyPets.module.css';

const MyPets = () => {
  return (
    <div>
      <dir className={css.wrapper}>
        <h3 className={css.title}>My Pets:</h3>
        {/* <button></button> */}
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
            // border: 'rgba(0, 0, 0, 0)',
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
        >
          Add Pet
        </Button>
      </dir>

      <div className={css.petCardWrapper}>
        <ul>
          <li>
            <img src="" alt="picture" width="240" height="240" className={css.picture} />
            <p>Name:</p>
            <p>Date of birth:</p>
            <p>Breed:</p>
            <p>Comments:</p>
          </li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default MyPets;
