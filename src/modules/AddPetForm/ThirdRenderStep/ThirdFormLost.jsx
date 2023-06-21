import css from './thirdStep.module.css';

import { ReactComponent as Plus } from '../../../icons/Plus.svg';
import React, { useState, useContext } from 'react';
import { ThemeContext } from 'shared/hooks/context/ThemeProvider';
import { validationSchemaThirdAddLost } from '../../../shared/services/FormValidation/addPetValidation';
import { useTranslation } from 'react-i18next';
import TitleModal from 'shared/components/TitleModal/TitleModal';
import StatusIndicator from 'shared/components/StatusIndicator/StatusIndicator';
import MaleIcon from 'icons/MaleIcon';
import FemaleIcon from 'icons/FemaleIcon';
import ButtonRoutes from 'shared/components/ButtonRoutes/ButtonRoutes';
import ButtonNext from 'shared/components/ButtonRoutes/ButtonNext';
import ButtonPrev from 'shared/components/ButtonRoutes/ButtonPrev';

export const ThirdFormLost = ({
  formData,
  currentStatus,
  handleNextData,
  handlePrevStep,
  chooseOption,
  titleForm,
}) => {
  const [file, setPhoto] = useState('');
  const [comments, setComments] = useState('');
  const [location, setLocation] = useState(formData.location || '');

  const [sex, setSex] = useState(formData.sex || '');
  const [active, setActive] = useState(null);
  const [errors, setErrors] = useState({});

  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();
  // const handleDone = () => {
  //   const category = 'lost-found';
  //   handleNextData({ file, comments, sex, location, category });
  // };

  const handleDone = () => {
    validationSchemaThirdAddLost
      .validate({ file, comments, sex, location }, { abortEarly: false })
      .then(() => {
        handleNextData({ file, comments, sex, location });
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
    <div
      className={`${css.myСomponent} ${
        theme === 'light' ? css.light : css.dark
      }`}
    >
      <div className={css.wparForm}>
        <TitleModal titleForm={titleForm} />

        <StatusIndicator
          currentStatus={currentStatus}
          chooseOption={chooseOption}
        />
        <div className={css.pointBlock}>
          <div className={css.sexPhotoBlock}>
            <div className={css.sexContainer}>
              <p className={css.labelSex}>{t('The Sex')}</p>
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
                    <FemaleIcon color="#F43F5E" className={css.sexIcon} />{' '}
                    {t('Female')}
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
                    <MaleIcon color="#54adff" className={css.sexIcon} />{' '}
                    {t('Male')}
                  </button>
                </li>
              </ul>
              {errors.sex && <p className={css.errorSex}>{errors.sex}</p>}
            </div>

            <div className={css.photoContainerSell}>
              <label className={css.labelAddPhoto}>{t('Add photo')}</label>
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
              {t('Location')}
            </label>
            <input
              className={css.input}
              type="text"
              id="location"
              value={location}
              onChange={e => setLocation(e.target.value)}
              placeholder={t('Type of location')}
            />
            {errors.location && (
              <p className={css.ErrorTextLostLocation}>{errors.location}</p>
            )}
            <label className={css.labelCommentsSell} htmlFor="comments">
              {t('Comments')}
            </label>
            <textarea
              className={css.inputCommentsLost}
              id="comments"
              value={comments}
              placeholder={t('Type comment')}
              onChange={e => setComments(e.target.value)}
            />
            {errors.comments && (
              <p className={css.errorComentSell}>{errors.comments}</p>
            )}
          </div>
        </div>
        <ButtonRoutes>
          <ButtonNext textButton={t('Done')} handleNextData={handleDone} />
          <ButtonPrev textButton={t('Back')} handlePrevStep={handlePrevStep} />
        </ButtonRoutes>
      </div>
    </div>
  );
};
