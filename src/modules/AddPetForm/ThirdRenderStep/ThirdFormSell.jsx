import css from './thirdStep.module.css';

import PlusIcon from 'icons/PlusIcon';
import React, { useState } from 'react';
// import { stepTwoValidationSchema } from '../../../shared/services/FormValidation/addPetValidation';

import TitleModal from 'shared/components/TitleModal/TitleModal';
import StatusIndicator from 'shared/components/StatusIndicator/StatusIndicator';
import MaleIcon from 'icons/MaleIcon';
import FemaleIcon from 'icons/FemaleIcon';

export const ThirdFormSell = ({ formData, currentStatus }) => {
  const [photo, setPhoto] = useState('');
  const [comments, setComments] = useState('');
  const [place, setPlace] = useState(formData.place || '');
  const [price, setPrice] = useState(formData.price || '');
  const [sex, setSex] = useState(formData.sex || '');
  const [active, setActive] = useState(null);
  const [errors, setErrors] = useState({});

  //    const handleDone = () => {
  //     validationSchemaThree
  //       .validate({ photo, comments }, { abortEarly: false })
  //       .then(() => {
  //         console.log('це третій крок', formData);
  //         handleNext({ sex, place, price, comments, photo });
  //       })
  //       .catch(err => {
  //         const validationErrors = {};
  //         err.inner.forEach(error => {
  //           validationErrors[error.path] = error.message;
  //         });
  //         setErrors(validationErrors);
  //       });
  // };

  const handleFileChange = e => {
    setPhoto(e.target.files[0]);
  };

  const handleSex = (option, number) => {
    setSex(option);
      setActive(number);
      console.log(option)
  };

  return (
    <>
      <TitleModal title={'Add pet for sale'} />

      <StatusIndicator currentStatus={currentStatus} />
      <div className={css.sexContainer}>
        <p className={css.labelSex}>The sex</p>
        <ul className={css.sexBlock}>
          <li>
            <button
              type="button"
              className={`${css.sexButton} ${
                active === 1 ? css.sexButtonChoosed : ''
              }`}
              onClick={() => {
                handleSex('female', 1);
              }}
            >
              <FemaleIcon color="#F43F5E" className={css.sexIcon} /> Female
            </button>
          </li>

          <li>
            <button
              type="button"
              className={`${css.sexButton} ${
                active === 2 ? css.sexButtonChoosed : ''
              }`}
              onClick={() => {
                handleSex('male', 2);
              }}
            >
              <MaleIcon color="#54adff" className={css.sexIcon} /> Male
            </button>
          </li>
        </ul>
      </div>

      <div className={css.photoContainerSell}>
        <label className={css.labelAddPhoto}>Add photo</label>
        <div>
          <input
            type="file"
            id="photo"
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
        </div>
        <label htmlFor="photo">
          <div className={css.labelPhoto}>
            {photo && (
              <img
                className={css.previewPhoto}
                src={URL.createObjectURL(photo)}
                alt="Pet"
              />
            )}
            <PlusIcon className={css.plusIcon} color="#54adff" />
          </div>
        </label>
        {errors.photo && <p className={css.errorComent}>{errors.photo}</p>}
      </div>

      <div className={css.inputContainer}>
        <label className={css.label} htmlFor="place">
          Location
        </label>
        <input
          className={css.input}
          type="text"
          id="place"
          value={place}
          onChange={e => setPlace(e.target.value)}
          placeholder="Type pet's location"
        />
        {errors.place && <p className={css.ErrorText}>{errors.place}</p>}

        <label className={css.label} htmlFor="price">
          Price
        </label>
        <input
          className={css.input}
          type="number"
          id="price"
          value={price}
          onChange={e => setPrice(e.target.value)}
          required
          placeholder="Type price"
        />
        {errors.price && <p className={css.ErrorText}>{errors.price}</p>}
      </div>

      <div className={css.commentsContainerMyPet}>
        <label className={css.labelComments} htmlFor="comments">
          Comments
        </label>
        <textarea
          className={css.inputComments}
          id="comments"
          value={comments}
          placeholder="Type comment"
          onChange={e => setComments(e.target.value)}
        />
        {errors.comments && <p>{errors.comments}</p>}
      </div>
    </>
  );
};
