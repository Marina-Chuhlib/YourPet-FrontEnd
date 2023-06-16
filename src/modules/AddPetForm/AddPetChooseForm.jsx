import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { addNotice, addPet } from 'redux/pets/pets-operations';

import * as toasty from '../../shared/toastify/toastify';

import TitleModal from 'shared/components/TitleModal/TitleModal';
import StatusIndicator from 'shared/components/StatusIndicator/StatusIndicator';
import ButtonChooseOption from 'shared/components/ButtonChooseOption/ButtonChooseOption';
import ButtonRoutes from 'shared/components/ButtonRoutes/ButtonRoutes';
import ButtonNext from 'shared/components/ButtonRoutes/ButtonNext';
import ButtonPrev from 'shared/components/ButtonRoutes/ButtonPrev';
import FormContainer from 'shared/components/FormContainer/FormContainer';
import FormContainerThird from 'shared/components/FormContainer/FormContainerThird';

import { SecondRenderStep } from './SecondStep/SecondRenderStep';
import { ThirdFormMyPet } from './ThirdRenderStep/ThirdFormMyPet';
import { ThirdFormSell } from './ThirdRenderStep/ThirdFormSell';
import { ThirdFormLost } from './ThirdRenderStep/ThirdFormLost';

import Modal from 'shared/components/ModalWindow/Modal';
import Loader from 'shared/components/Loader/Loader';

export const AddPetChooseForm = () => {
  const [step, setStep] = useState(1);
  const [currentStatus, setCurrentStatus] = useState(1);
  const [chooseOption, setChooseOption] = useState('');
  const [activeButton, setActiveButton] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({});

  const { t } = useTranslation();

  useEffect(() => {}, [formData]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChooseChange = (option, number) => {
    setFormData(prevData => ({ ...prevData, category: option }));
    setChooseOption(option);
    setActiveButton(number);
  };

  const handleNextDataOption = () => {
    const category = chooseOption;
    handleNextData({ category });
    if (category === '') {
      toasty.toastError(t('Please, choose the category!'));
    }
  };
  const handleNextData = stepData => {
    setIsLoading(true);
    if (chooseOption && currentStatus < 3) {
      setStep(step + 1);
      setCurrentStatus(currentStatus + 1);
    }
    setIsLoading(false);
    setFormData(prevData => {
      return { ...prevData, ...stepData };
    });
  };

  const handlePrevStep = stepData => {
    setIsLoading(true);
    if (currentStatus > 1) {
      setCurrentStatus(currentStatus - 1);
    }
    setStep(step - 1);
    setIsLoading(false);
    setFormData(prevData => {
      return { ...prevData, ...stepData };
    });
  };

  const handleCancel = () => {
    navigate(-1);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setIsLoading(true);
    switch (formData.category) {
      case 'your pet':
        navigate('/user');
        break;
      case 'sell':
        navigate('/notices/sell');
        break;
      case 'lost-found':
        navigate('notices/lost-found');
        break;

      default:
        navigate('/user');
    }
  };

  const returnToNotice = data => {
    setIsLoading(true);
    setShowModal(false);

    switch (data) {
      case 'sell':
        navigate('/notices/sell');
        break;
      case 'lost-found':
        navigate('/notices/lost-found');
        break;

      default:
        navigate('/notices');
    }
  };

  const handleDone = stepData => {
    const sendDataForm = { ...formData, ...stepData };
    const { category } = sendDataForm;
    if (category === 'your pet') {
      delete sendDataForm.category;
      const formDataSend = new FormData();

      for (const key in sendDataForm) {
        formDataSend.append(key, sendDataForm[key]);
      }
      setIsLoading(true);
      dispatch(addPet(formDataSend)).then(response => {
        if (typeof response.payload !== 'object') {
          toasty.toastError(t('Oops, something went wrong!'));
          setIsLoading(false);
        } else {
          toasty.toastSuccess(t('Congratulations!!! Your pet is added!'));
          navigate('/user');
        }
      });
    } else {
      const formDataSend = new FormData();

      for (const key in sendDataForm) {
        formDataSend.append(key, sendDataForm[key]);
      }
      setIsLoading(true);
      dispatch(addNotice(formDataSend)).then(response => {
        if (typeof response.payload !== 'object') {
          toasty.toastError(t('Oops, something went wrong!'));
          setIsLoading(false);
        } else {
          toasty.toastSuccess(
            t('Congratulations!!! You successfully created an ad!')
          );
          returnToNotice(sendDataForm.category);
        }
      });
    }
    setFormData(prevData => ({ ...prevData, ...stepData }));
  };

  return (
    <>
      {isLoading && <Loader />}
      {step === 1 && (
        <FormContainer>
          <TitleModal titleForm={t('Add pet')} />

          <StatusIndicator currentStatus={currentStatus} />
          <ButtonChooseOption
            handleChooseChange={handleChooseChange}
            activeButton={activeButton}
          />
          <ButtonRoutes>
            <ButtonNext
              textButton={t('Next')}
              handleNextData={handleNextDataOption}
            />
            <ButtonPrev textButton={t('Cancel')} handlePrevStep={handleCancel} />
          </ButtonRoutes>
        </FormContainer>
      )}

      {step === 2 && (
        <FormContainer>
          <SecondRenderStep
            formData={formData}
            chooseOption={chooseOption}
            currentStatus={currentStatus}
            handleNextData={handleNextData}
            handlePrevStep={handlePrevStep}
          ></SecondRenderStep>
        </FormContainer>
      )}

      {step === 3 && (
        <>
          {chooseOption === 'your pet' ? (
            <FormContainer>
              <ThirdFormMyPet
                currentStatus={currentStatus}
                handleNextData={handleDone}
                handlePrevStep={handlePrevStep}
                formData={formData}
                chooseOption={chooseOption}
              />
            </FormContainer>
          ) : (
            ''
          )}
          {chooseOption === 'sell' ? (
            <FormContainerThird>
              <ThirdFormSell
                currentStatus={currentStatus}
                handleNextData={handleDone}
                handlePrevStep={handlePrevStep}
                formData={formData}
                chooseOption={chooseOption}
              />
            </FormContainerThird>
          ) : (
            ''
          )}
          {chooseOption === 'lost-found' ? (
            <FormContainerThird>
              <ThirdFormLost
                titleForm={'Add lost pet'}
                currentStatus={currentStatus}
                handleNextData={handleDone}
                handlePrevStep={handlePrevStep}
                formData={formData}
                chooseOption={chooseOption}
              />
            </FormContainerThird>
          ) : (
            ''
          )}
          {chooseOption === 'for-free' ? (
            <FormContainerThird>
              <ThirdFormLost
                titleForm={'Pet in good hands'}
                currentStatus={currentStatus}
                handleNextData={handleDone}
                handlePrevStep={handlePrevStep}
                formData={formData}
                chooseOption={chooseOption}
              />
            </FormContainerThird>
          ) : (
            ''
          )}
        </>
      )}
      {showModal && (
        <Modal onClose={handleCloseModal}>{t('Way, you add the pet!!!')}</Modal>
      )}
    </>
  );
};
