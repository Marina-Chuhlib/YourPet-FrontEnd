import React, { useState } from 'react';
import css from './secondStep.module.css';
import TitleModal from 'shared/components/TitleModal/TitleModal';
import StatusIndicator from 'shared/components/StatusIndicator/StatusIndicator';
import ButtonRoutes from 'shared/components/ButtonRoutes/ButtonRoutes';
import ButtonNext from 'shared/components/ButtonRoutes/ButtonNext';
import ButtonPrev from 'shared/components/ButtonRoutes/ButtonPrev';
import { stepOneValidationSchema } from '../../../shared/services/FormValidation/addPetValidation';

export const SecondFormMyPet = ({ handleNextData, handlePrevStep, formData, currentStatus }) => {
  const [name, setName] = useState(formData.name || '');
  const [birth, setBirthday] = useState(formData.birth || '');
  const [breed, setBreed] = useState(formData.breed || '');
  const [errors, setErrors] = useState({});

  const handleNextValidation = () => {
    stepOneValidationSchema
      .validate({ name, birth, breed }, { abortEarly: false })
      .then(() => {
        handleNextData({ name, birth, breed });
      })
      .catch(err => {
        console.log(err);
        const validationErrors = {};
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });
        setErrors(validationErrors);
      });
  };
  return (
    <div className={css.FormWrapper}>
      <TitleModal title={'Add pet'} />

      <StatusIndicator currentStatus={currentStatus} />
      <div className={css.WrapperLabelInput}>
        <label className={css.LabelStep} htmlFor="name">
          Name pet
        </label>
        <input
          className={css.Input}
          type="text"
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Type pet name "
        />
        {errors.name && <p className={css.ErrorTextLow}>{errors.name}</p>}
      </div>
      <div className={css.WrapperLabelInput}>
        <label className={css.LabelStep} htmlFor="birth">
          Date of birth
        </label>
        <input
          className={css.Input}
          type="text"
          id="birth"
          value={birth}
          onChange={e => setBirthday(e.target.value)}
          required
          placeholder="Type date of birth"
        />
        {errors.birth && <p className={css.ErrorText}>{errors.birthdate}</p>}
      </div>
      <div className={css.WrapperLabelInput}>
        <label className={css.LabelStep} htmlFor="breed">
          Breed
        </label>
        <input
          className={css.Input}
          type="text"
          id="breed"
          value={breed}
          onChange={e => setBreed(e.target.value)}
          required
          placeholder="Type breed"
        />
        {errors.breed && <p className={css.ErrorTextLow}>{errors.breed}</p>}
      </div>
      <ButtonRoutes>
        <ButtonNext textButton={'Next'} onClick={handleNextValidation} />
        <ButtonPrev
          textButton={'Back'}
          onClick={() => handlePrevStep(formData)}
        />
      </ButtonRoutes>
      
    </div>
  );
};


