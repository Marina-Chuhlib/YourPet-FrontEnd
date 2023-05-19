import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { fetchDeleteUserPet } from 'redux/user/user-operations';

import Button from '@mui/material/Button';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

import css from './MyPets.module.css';

import icon from '../../icons/trash.svg';


const MyPets = ({ pets }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/add-pet');
  };

  const handleDelatePet = _id => {
    dispatch(fetchDeleteUserPet(_id));
  };

  const elements = pets.map(
    ({ _id, name, birthday, breed, imageURL, comments }) => (
      <li key={_id} className={css.item}>
        <img src={imageURL} alt="" className={css.picture} />
        <div className={css.infoWrapper}>
          <div className={css.delBtnWrapper}>
            <p className={css.info}>
              <span className={css.tit}>Name:</span> {name}
            </p>
            <button
              type="button"
              className={css.delBtn}
              onClick={() => handleDelatePet(_id)}
            >
              <img src={icon} alt="My SVG" />
            </button>
          </div>

          <p className={css.info}>
            <span className={css.tit}>Date of birth:</span> {birthday}
          </p>
          <p className={css.info}>
            <span className={css.tit}> Breed:</span> {breed}
          </p>
          <p className={css.info}>
            <span className={css.tit}>Comments:</span> {comments}
          </p>
        </div>
      </li>
    )
  );

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
          <ul className={css.list}>{elements}</ul>
        ) : (
          <p className={css.text}>No favorite list animals</p>
        )}
      </div>
    </div>
  );
};

export default MyPets;
