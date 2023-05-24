import { ReactComponent as Plus } from '../../../icons/Plus.svg';
import React, { useState } from 'react';
import { validationSchemaThirdAddSell } from '../../../shared/services/FormValidation/addPetValidation';

import TitleModal from 'shared/components/TitleModal/TitleModal';
import StatusIndicator from 'shared/components/StatusIndicator/StatusIndicator';
import MaleIcon from 'icons/MaleIcon';
import FemaleIcon from 'icons/FemaleIcon';
import ButtonRoutes from 'shared/components/ButtonRoutes/ButtonRoutes';
import ButtonNext from 'shared/components/ButtonRoutes/ButtonNext';
import ButtonPrev from 'shared/components/ButtonRoutes/ButtonPrev';
import css from './thirdStep.module.css';

export const ThirdFormSell = ({
  formData,
  currentStatus,
  handleNextData,
  handlePrevStep,
  chooseOption,
}) => {
  const [file, setPhoto] = useState('');
  const [comments, setComments] = useState('');
  const [location, setLocation] = useState(formData.location || '');
  const [price, setPrice] = useState(formData.price || '');
  const [sex, setSex] = useState(formData.sex || '');
  const [active, setActive] = useState(null);
  const [errors, setErrors] = useState({});

  //   const handleDone = () => {
  //    const category = 'sell';
  //    handleNextData({ file, comments, sex, location, price, category });
  //  };

  const handleDone = () => {
    validationSchemaThirdAddSell
      .validate({ file, comments, sex, location, price }, { abortEarly: false })
      .then(() => {
        handleNextData({ file, comments, sex, location, price });
      })
      .catch(err => {
        const validationErrors = {};
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });
        setErrors(validationErrors);
      });
  };

  const handleFileChange = e => {
    setPhoto(e.target.files[0]);
  };

  const handleSex = (option, number) => {
    setSex(option);
    setActive(number);
  };

  return (
    <div className={css.wparForm}>
      <TitleModal titleForm={'Add pet for sell'} />

      <StatusIndicator
        currentStatus={currentStatus}
        chooseOption={chooseOption}
      />
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
            {errors.sex && <p className={css.errorSex}>{errors.sex}</p>}
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
                {file && (
                  <img
                    className={css.previewPhoto}
                    src={URL.createObjectURL(file)}
                    alt="Pet"
                  />
                )}
                <Plus className={css.plusIcon} />
              </div>
            </label>
            {errors.file && (
              <p className={css.ErrorTextLowSell}>{errors.file}</p>
            )}
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
            <p className={css.ErrorTextSellLocation}>{errors.location}</p>
          )}

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
            placeholder="Type of price"
          />
          {errors.price && <p className={css.ErrorTextPrice}>{errors.price}</p>}

          <label className={css.labelCommentsSell} htmlFor="comments">
            Comments
          </label>
          <textarea
            className={css.inputComments}
            id="comments"
            value={comments}
            placeholder="Type comment"
            onChange={e => setComments(e.target.value)}
          />
          {errors.comments && (
            <p className={css.errorComentSell}>{errors.comments}</p>
          )}
        </div>
      </div>
      <ButtonRoutes>
        <ButtonNext textButton={'Done'} handleNextData={handleDone} />
        <ButtonPrev textButton={'Back'} handlePrevStep={handlePrevStep} />
      </ButtonRoutes>
    </div>
  );
};
