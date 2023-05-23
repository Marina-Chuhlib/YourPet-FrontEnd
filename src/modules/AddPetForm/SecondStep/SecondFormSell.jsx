import React, { useState } from 'react';
import css from './secondStep.module.css';
import TitleModal from 'shared/components/TitleModal/TitleModal';
import StatusIndicator from 'shared/components/StatusIndicator/StatusIndicator';
import ButtonRoutes from 'shared/components/ButtonRoutes/ButtonRoutes';
import ButtonNext from 'shared/components/ButtonRoutes/ButtonNext';
import ButtonPrev from 'shared/components/ButtonRoutes/ButtonPrev';
// import { stepOneValidationSchema } from '../../../shared/services/FormValidation/addPetValidation';

export const SecondFormSell = ({
  formData,
    currentStatus,
   handleNextData, handlePrevStep, chooseOption
}) => {
    const [title, setAddTitle] = useState(formData.title || '');
  const [name, setName] = useState(formData.name || '');
  const [date, setDate] = useState(formData.date || '');
  const [breed, setBreed] = useState(formData.breed || '');
  // const [errors, setErrors] = useState({});
  console.log("name", name, breed);

  const handleNextValidation = () => {
    
  console.log('work NextValidation', 'name: ', name, 'birth: ', date);
  handleNextData({ name, date, breed, title });
};


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
      <TitleModal title={'Add pet for sell'} />

      <StatusIndicator
        currentStatus={currentStatus}
        chooseOption={chooseOption}
      />
      <div className={css.inputContainer}>
        <label className={css.label} htmlFor="addTitle">
          Title of add
        </label>
        <input
          className={css.input}
          type="text"
          id="addTitle"
          value={title}
          onChange={e => setAddTitle(e.target.value)}
          placeholder="Type title of add"
        />
        {/* {errors.name && <p className={css.ErrorText}>{errors.name}</p>} */}
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
        {/* {errors.name && <p className={css.ErrorText}>{errors.name}</p>} */}
      </div>
      <div className={css.inputContainer}>
        <label className={css.label} htmlFor="date">
          Date of birth
        </label>
        <input
          className={css.input}
          type="text"
          id="date"
          value={date}
          onChange={e => setDate(e.target.value)}
          required
          placeholder="Type date of birth"
        />
        {/* {errors.birth && <p className={css.ErrorText}>{errors.birthdate}</p>} */}
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
        {/* {errors.breed && <p className={css.ErrorText}>{errors.breed}</p>} */}
      </div>
      <ButtonRoutes>
        <ButtonNext textButton={'Next'} handleNextData={handleNextValidation} />
        <ButtonPrev
          textButton={'Back'}
          onClick={() => handlePrevStep(formData)}
        />
      </ButtonRoutes>
    </div>
  );
};
