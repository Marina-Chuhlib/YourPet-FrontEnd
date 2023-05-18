import Button from '@mui/material/Button';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { fetchUser } from 'redux/user/user-operations';

import css from './MyPets.module.css';

import icon from '../../icons/trash.svg';

const MyPets = ({ pets }) => {
  console.log(pets);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    navigate('/add-pet');
  };

  // if (!pets) {
  //   dispatch(fetchUser());
  //   return
  // }

  const elements = pets.map(
    ({ _id, name, birthday, breed, imageURL, comments }) => (
      <li key={_id} className={css.item}>
        <img src={imageURL} alt="" className={css.picture} />
        <div className={css.infoWrapper}>
          <div className={css.delBtnWrapper}>
            <p className={css.info}>
              <span className={css.tit}>Name:</span> {name}
            </p>
            <button type="button" className={css.delBtn}>
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
          onClick={handleClick}
        >
          Add Pet
        </Button>
      </dir>

      <div className={css.petCardWrapper}>
        <ul className={css.list}>{elements}</ul>
      </div>
    </div>
  );
};

export default MyPets;
