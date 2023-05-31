import React, { useState, useContext } from 'react';
import { ThemeContext } from 'shared/hooks/context/ThemeProvider';
import css from './secondStep.module.css';
import TitleModal from 'shared/components/TitleModal/TitleModal';
import StatusIndicator from 'shared/components/StatusIndicator/StatusIndicator';
import ButtonRoutes from 'shared/components/ButtonRoutes/ButtonRoutes';
import ButtonNext from 'shared/components/ButtonRoutes/ButtonNext';
import ButtonPrev from 'shared/components/ButtonRoutes/ButtonPrev';
import { validationSchema } from '../../../shared/services/FormValidation/addPetValidation';

export const SecondFormMyPet = ({
  handleNextData,
  handlePrevStep,
  formData,
  currentStatus,
}) => {
  const [name, setName] = useState(formData.name || '');
  const [birthday, setBirthday] = useState(formData.birthday || '');
  const [breed, setBreed] = useState(formData.breed || '');
  const [errors, setErrors] = useState({});

  const { theme } = useContext(ThemeContext);

  // const handleNextValidation = () => {

  //   handleNextData({ name, birthday, breed });
  //    };

  const handleNextValidation = () => {
    validationSchema
      .validate({ name, birthday, breed }, { abortEarly: false })
      .then(() => {
        handleNextData({ name, birthday, breed });
      })
      .catch(err => {
        const validationErrors = {};
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });
        setErrors(validationErrors);
      });
  };
  return (
    <div
      className={`${css.myСomponent} ${
        theme === 'light' ? css.light : css.dark
      }`}
    >
      <TitleModal titleForm={'Add my pet'} />

      <StatusIndicator currentStatus={currentStatus} />
      <div className={css.inputContainer}>
        <label className={css.label} htmlFor="name">
          Pet's name
        </label>
        <input
          className={css.input}
          type="text"
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Type name pet"
        />
        {errors.name && <p className={css.ErrorText}>{errors.name}</p>}
      </div>
      <div className={css.inputContainer}>
        <label className={css.label} htmlFor="birthday">
          Date of birth
        </label>
        <input
          className={css.input}
          type="text"
          id="birthday"
          value={birthday}
          onChange={e => setBirthday(e.target.value)}
          required
          placeholder="dd.mm.yyyy"
        />
        {errors.birthday && <p className={css.ErrorText}>{errors.birthday}</p>}
      </div>
      <div className={css.inputContainer}>
        <label className={css.label} htmlFor="breed">
          Breed
        </label>
        <input
          className={css.input}
          type="text"
          id="breed"
          value={breed}
          onChange={e => setBreed(e.target.value)}
          required
          placeholder="Type breed"
        />
        {errors.breed && <p className={css.ErrorText}>{errors.breed}</p>}
      </div>
      <ButtonRoutes>
        <ButtonNext textButton={'Next'} handleNextData={handleNextValidation} />
        <ButtonPrev textButton={'Back'} handlePrevStep={handlePrevStep} />
      </ButtonRoutes>
    </div>
  );
};
