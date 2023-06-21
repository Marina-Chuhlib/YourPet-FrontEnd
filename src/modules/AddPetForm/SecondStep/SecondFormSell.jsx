import React, { useState, useContext } from 'react';
import { ThemeContext } from 'shared/hooks/context/ThemeProvider';
import css from './secondStep.module.css';
import TitleModal from 'shared/components/TitleModal/TitleModal';
import StatusIndicator from 'shared/components/StatusIndicator/StatusIndicator';
import ButtonRoutes from 'shared/components/ButtonRoutes/ButtonRoutes';
import ButtonNext from 'shared/components/ButtonRoutes/ButtonNext';
import ButtonPrev from 'shared/components/ButtonRoutes/ButtonPrev';
import { validationSchemaAdd } from '../../../shared/services/FormValidation/addPetValidation';
import { useTranslation } from 'react-i18next';

export const SecondFormSell = ({
  formData,
  currentStatus,
  handleNextData,
  handlePrevStep,
  chooseOption,
  titleForm,
}) => {
  const [title, setAddTitle] = useState(formData.title || '');
  const [name, setName] = useState(formData.name || '');
  const [date, setDate] = useState(formData.date || '');
  const [breed, setBreed] = useState(formData.breed || '');
  const [errors, setErrors] = useState({});

  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();
  // const handleNextValidation = () => {

  //   handleNextData({ name, date, breed, title });
  // };

  const handleNextValidation = () => {
    validationSchemaAdd
      .validate({ name, date, breed, title }, { abortEarly: false })
      .then(() => {
        handleNextData({ name, date, breed, title });
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
      <TitleModal titleForm={titleForm} />

      <StatusIndicator
        currentStatus={currentStatus}
        chooseOption={chooseOption}
      />
      <div className={css.inputContainer}>
        <label className={css.label} htmlFor="addTitle">
          {t('Title of add')}
        </label>
        <input
          className={css.input}
          type="text"
          id="addTitle"
          value={title}
          onChange={e => setAddTitle(e.target.value)}
          placeholder={t('Type title of add')}
        />
        {errors.title && <p className={css.ErrorText}>{errors.title}</p>}
      </div>
      <div className={css.inputContainer}>
        <label className={css.label} htmlFor="name">
          {t("Pet's name")}
        </label>
        <input
          className={css.input}
          type="text"
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder={t('Type name pet')}
        />
        {errors.name && <p className={css.ErrorText}>{errors.name}</p>}
      </div>
      <div className={css.inputContainer}>
        <label className={css.label} htmlFor="date">
          {t('Date of birth')}
        </label>
        <input
          className={css.input}
          type="text"
          id="date"
          value={date}
          onChange={e => setDate(e.target.value)}
          required
          placeholder={t('dd.mm.yyyy')}
        />
        {errors.date && <p className={css.ErrorText}>{errors.date}</p>}
      </div>
      <div className={css.inputContainer}>
        <label className={css.label} htmlFor="breed">
          {t('Breed')}
        </label>
        <input
          className={css.input}
          type="text"
          id="breed"
          value={breed}
          onChange={e => setBreed(e.target.value)}
          required
          placeholder={t('Type breed')}
        />
        {errors.breed && <p className={css.ErrorText}>{errors.breed}</p>}
      </div>
      <ButtonRoutes>
        <ButtonNext
          textButton={t('Next')}
          handleNextData={handleNextValidation}
        />
        <ButtonPrev textButton={t('Back')} handlePrevStep={handlePrevStep} />
      </ButtonRoutes>
    </div>
  );
};
