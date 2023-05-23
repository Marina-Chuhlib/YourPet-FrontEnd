// import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addNotice, addPet } from 'redux/pets/pets-operations';

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

  useEffect(() => {
  
  }, [formData]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChooseChange = (option, number) => {
    console.log('Choose option work', option, number);
    setFormData(prevData => ({ ...prevData, category: option }));
    setChooseOption(option);
    setActiveButton(number);
  };

  const handleNextDataOption = () => {
    const category = chooseOption;
    handleNextData({ category });
    console.log("category:", category)
  }
  const handleNextData = stepData => {
    console.log('StepData', stepData);
    setIsLoading(true);
    if (chooseOption && currentStatus < 3) {
      setStep(step + 1);
      setCurrentStatus(currentStatus + 1);
    } else {
      alert('Please type all info');
    }
    setIsLoading(false);
    setFormData(prevData => {
      console.log('prevData', prevData);
      return { ...prevData, ...stepData };
    });
  };

  const handlePrevStep = stepData => {
    // setIsLoading(true);
    if (currentStatus > 1) {
      setCurrentStatus(currentStatus - 1);
    }
    setStep(step - 1);
    setIsLoading(false);
    setFormData(prevData => {
      console.log('work prevStep', prevData, stepData);
      return { ...prevData, ...stepData };
    });
  };

  const handleCancel = () => {
    navigate(-1);
  };

  const handleCloseModal = () => {
    console.log('Data new modal close', formData);
    setShowModal(false);

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
  // const addPet = async (endpoint, category, data) => {
  //   try {
  //     const response = await instance.post(`${endpoint}${category}`, data);
  //     console.log(response);
  //     return response.data;
  //   } catch (error) {
  //     return error.message;
  //   }
  // };

  //   const handleNextValidation = (stepData, {name, birth, breed, title}) => {
  //     const sendDataForm = { ...formData, ...stepData };
  //     const { category } = sendDataForm;
  //     console.log('work handleNextValidation', step, currentStatus, chooseOption);
  //     const formDataSend = new FormData();

  //     for (const key in sendDataForm) {
  //       formDataSend.append(key, sendDataForm[key]);
  //     }
  //     if (category === 'your pet') {
  //       Pet.validationSchema.validate({ name, birth, breed }).then(() => {
  //         handleNextData({ name, birth, breed });
  //       });
  //     } else {
  //       Pet.validationSchema.validate({ name, birth, breed, title }).then(() => {
  //         handleNextData({ name, birth, breed, title });
  //       });
  //     }
  //   };

  //   setFormData(prevData => ({ ...prevData, ...stepData }));
  // };

  // const handleDone = ({photo, comments}) => {
  //   console.log('HandleDone work');
  //   Pet.validationSchemaThird
  //     .validate({ photo, comments }, { abortEarly: false })
  //     .then(() => {
  //       handleData({ photo, comments });
  //     })
  //     .catch(err => {
  //       const validationErrors = {};
  //       err.inner.forEach(error => {
  //         validationErrors[error.path] = error.message;
  //       });
  //       setErrors(validationErrors);
  //     });

  //

  const handleDone = stepData => {
    const sendDataForm = { ...formData, ...stepData };
    console.log(sendDataForm);
    const { category } = sendDataForm;
    if (category === 'your pet') {
     
      delete sendDataForm.category;
      const formDataSend = new FormData();

      for (const key in sendDataForm) {
        formDataSend.append(key, sendDataForm[key]);
      }
      // setIsLoading(true);
 dispatch(addPet(formDataSend));
      console.log('done work', 'formData:', category);
    } else {
      const formDataSend = new FormData();

      for (const key in sendDataForm) {
        formDataSend.append(key, sendDataForm[key]);
      }
      dispatch(addNotice(formDataSend));
      console.log('category not your pet', category);
    }
    setFormData(prevData => ({ ...prevData, ...stepData }));
  };

  return (
    <>
      {isLoading && <Loader />}
      {step === 1 && (
        <FormContainer>
          <TitleModal title={'Add pet'} />

          <StatusIndicator currentStatus={currentStatus} />
          <ButtonChooseOption
            handleChooseChange={handleChooseChange}
            activeButton={activeButton}
          />
          <ButtonRoutes>
            <ButtonNext
              textButton={'Next'}
              handleNextData={handleNextDataOption}
            />
            <ButtonPrev textButton={'Cancel'} handlePrevStep={handleCancel} />
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
          {chooseOption === 'your pet' || chooseOption === 'for-free' ? (
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
        <Modal onClose={handleCloseModal}>{'Way, you add the pet!!!'}</Modal>
      )}
    </>
  );
};
