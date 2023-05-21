import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// import PropTypes from 'prop-types';

import { fetchDeleteUserPet } from 'redux/auth/auth-operations';

// import PetsItem from './PetsItem';

import Button from '@mui/material/Button';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

import * as toasty from 'shared/toastify/toastify';
import icon from '../../icons/trash.svg';

import css from './MyPets.module.css';

const MyPets = () => {
  const { pets } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(pets);

  const handleDelatePet = async _id => {
    await dispatch(fetchDeleteUserPet(_id));
    toasty.toastSuccess('Deleted card');
  };

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
            {pets.map((pet,index )=> {
              // console.log()
              return (
                <li key={index} className={css.item}>
                  <img src={pet.imageURL} alt="" className={css.picture} />
                  <div className={css.infoWrapper}>
                    <div className={css.delBtnWrapper}>
                      <p className={css.info}>
                        <span className={css.tit}>Name:</span> {pet.name}
                      </p>
                      <button
                        type="button"
                        className={css.delBtn}
                        onClick={() => handleDelatePet(pet._id)}
                      >
                        <img src={icon} alt="My SVG" />
                      </button>
                    </div>
                    <p className={css.info}>
                      <span className={css.tit}>Date of birth:</span>
                      {pet.birthday}
                    </p>
                    <p className={css.info}>
                      <span className={css.tit}> Breed:</span> {pet.breed}
                    </p>
                    <p className={css.info}>
                      <span className={css.tit}>Comments:</span> {pet.comments}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <p className={css.text}>No favorite list animals</p>
        )}
      </div>
    </div>
  );
};




// MyPets.propTypes = {
//   pets: PropTypes.arrayOf(pet:PropTypes.shape({
//       _id: PropTypes.objectOf(PropTypes.string.isRequired),
//       imageUrl: PropTypes.string,
//       name: PropTypes.string.isRequired,
//       breed: PropTypes.string,
//       birthday: PropTypes.string,
//       comments: PropTypes.string,
//     })

//   ),
// };

export default MyPets;
