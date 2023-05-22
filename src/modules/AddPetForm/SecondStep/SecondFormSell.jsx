import React, { useState } from 'react';
import css from './secondStep.module.css';
import TitleModal from 'shared/components/TitleModal/TitleModal';
import StatusIndicator from 'shared/components/StatusIndicator/StatusIndicator';
// import ButtonRoutes from 'shared/components/ButtonRoutes/ButtonRoutes';
// import ButtonNext from 'shared/components/ButtonRoutes/ButtonNext';
// import ButtonPrev from 'shared/components/ButtonRoutes/ButtonPrev';
// import { stepOneValidationSchema } from '../../../shared/services/FormValidation/addPetValidation';

export const SecondFormSell = ({
  formData,
    currentStatus,
  title
}) => {
    const [addTitle, setAddTitle] = useState(formData.addTitle || '');
  const [name, setName] = useState(formData.name || '');
  const [birth, setBirthday] = useState(formData.birth || '');
  const [breed, setBreed] = useState(formData.breed || '');
  const [errors, setErrors] = useState({});
  console.log("name", name, breed);
  // const handleNextValidation = () => {
  //   stepOneValidationSchema
  //     .validate({ name, birth, breed, addTitle }, { abortEarly: false })
  //     .then(() => {
  //       handleNextData({ name, birth, breed, addTitle });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //       const validationErrors = {};
  //       err.inner.forEach(error => {
  //         validationErrors[error.path] = error.message;
  //       });
  //       setErrors(validationErrors);
  //     });
  // };
  return (
    <div>
      <TitleModal title={title} />

      <StatusIndicator currentStatus={currentStatus} />
      <div className={css.inputContainer}>
        <label className={css.label} htmlFor="addTitle">
          Title of add
        </label>
        <input
          className={css.input}
          type="text"
          id="addTitle"
          value={addTitle}
          onChange={e => setAddTitle(e.target.value)}
          placeholder="Type title of add"
        />
        {errors.name && <p className={css.ErrorText}>{errors.name}</p>}
      </div>
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
        <label className={css.label} htmlFor="birth">
          Date of birth
        </label>
        <input
          className={css.input}
          type="text"
          id="birth"
          value={birth}
          onChange={e => setBirthday(e.target.value)}
          required
          placeholder="Type date of birth"
        />
        {errors.birth && <p className={css.ErrorText}>{errors.birthdate}</p>}
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
    </div>
  );
};
