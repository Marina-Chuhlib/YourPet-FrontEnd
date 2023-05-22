import css from './thirdStep.module.css';

import { ReactComponent as Plus } from '../../../icons/Plus.svg';
import React, { useState } from 'react';
// import { stepTwoValidationSchema } from '../../../shared/services/FormValidation/addPetValidation';

import TitleModal from 'shared/components/TitleModal/TitleModal';
import StatusIndicator from 'shared/components/StatusIndicator/StatusIndicator';
import MaleIcon from 'icons/MaleIcon';
import FemaleIcon from 'icons/FemaleIcon';
import ButtonRoutes from 'shared/components/ButtonRoutes/ButtonRoutes';
import ButtonNext from 'shared/components/ButtonRoutes/ButtonNext';
import ButtonPrev from 'shared/components/ButtonRoutes/ButtonPrev';

export const ThirdFormLost = ({ formData, currentStatus, handleNextData, handlePrevStep }) => {
  const [photo, setPhoto] = useState('');
  const [comments, setComments] = useState('');
  const [location, setLocation] = useState(formData.location || '');

  const [sex, setSex] = useState(formData.sex || '');
  const [active, setActive] = useState(null);
  const [errors, setErrors] = useState({});

  const handleDone = () => {
    handleNextData({ photo, comments, sex, location });
  };

  //    const handleDone = () => {
  //     validationSchemaThree
  //       .validate({ photo, comments }, { abortEarly: false })
  //       .then(() => {
  //         console.log('це третій крок', formData);
  //         handleNext({ sex, place,  comments, photo });
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
    console.log(option);
  };

  return (
    <div className={css.wparForm}>
      <TitleModal title={'Add lost pet'} />

      <StatusIndicator currentStatus={currentStatus} />
      <div className={css.pointBlock}>
        <div className={css.sexPhotoBlock}>
          <div className={css.sexContainer}>
            <p className={css.labelSex}>The Sex</p>
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
                <Plus className={css.plusIcon} />
              </div>
            </label>
            {errors.photo && <p className={css.errorComent}>{errors.photo}</p>}
          </div>
        </div>
        <div className={css.inputContainer}>
          <label className={css.label} htmlFor="location">
            Location
          </label>
          <input
            className={css.input}
            type="text"
            id="location"
            value={location}
            onChange={e => setLocation(e.target.value)}
            placeholder="Type of location"
          />
          {errors.location && (
            <p className={css.ErrorText}>{errors.location}</p>
          )}

          <label className={css.labelCommentsSell} htmlFor="comments">
            Comments
          </label>
          <textarea
            className={css.inputCommentsLost}
            id="comments"
            value={comments}
            placeholder="Type comment"
            onChange={e => setComments(e.target.value)}
          />
          {errors.comments && <p>{errors.comments}</p>}
        </div>
      </div>
      <ButtonRoutes>
        <ButtonNext textButton={'Done'} handleNextData={handleDone} />
        <ButtonPrev textButton={'Back'} handlePrevStep={handlePrevStep} />
      </ButtonRoutes>
    </div>
  );
};
