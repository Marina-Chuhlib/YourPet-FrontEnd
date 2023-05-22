// import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TitleModal from 'shared/components/TitleModal/TitleModal';
import StatusIndicator from 'shared/components/StatusIndicator/StatusIndicator';
import ButtonChooseOption from 'shared/components/ButtonChooseOption/ButtonChooseOption';
import ButtonRoutes from 'shared/components/ButtonRoutes/ButtonRoutes';
import ButtonNext from 'shared/components/ButtonRoutes/ButtonNext';
import ButtonPrev from 'shared/components/ButtonRoutes/ButtonPrev';
import FormContainer from 'shared/components/FormContainer/FormContainer';
import FormContainerThird from 'shared/components/FormContainer/FormContainerThird';

import { SecondRenderStep } from './SecondStep/SecondRenderStep';
import { ThirdRenderStep } from './ThirdRenderStep/ThirdRenderStep';
import { ThirdFormMyPet } from './ThirdRenderStep/ThirdFormMyPet';

import { useDispatch } from 'react-redux';
import { addNotice, addPet } from 'redux/pets/pets-operations';
import { createRequestData } from './CreateRequestData';

// import * as Pet from '../../shared/services/FormValidation/addPetValidation';


// import instance from '../../shared/services/App/app';

const stateInitialValue = {
  category: '',
  name: '',
  birth: '',
  type: '',
  breed: '',
  photo: null,
  comments: '',
  sex: '',
  location: '',
  price: '',
  title: '',
};



export const AddPetChooseForm = () => {
  const [step, setStep] = useState(1);
  const [currentStatus, setCurrentStatus] = useState(1);
  const [chooseOption, setChooseOption] = useState('');
  const [activeButton, setActiveButton] = useState(null);
 const [state, setState] = useState(stateInitialValue);
  const [formData, setFormData] = useState({ ...stateInitialValue });

  useEffect(() => {
    console.log('new state FORM DATA:', formData);
  }, [formData]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChooseChange = (option, number) => {
    console.log('Choose option work', option, number);
    setFormData(prevData => ({ ...prevData, category: option }));
    setChooseOption(option);
    setActiveButton(number);
  };

  const handleNextData = stepData => {
    console.log('NextData', stepData);
    if (chooseOption && currentStatus < 3) {
      setStep(step + 1);
      setCurrentStatus(currentStatus + 1);
    } else {
      alert('Please type all info');
    }
    setFormData(prevData => {
      console.log("prevData", prevData)
      return { ...prevData, ...stepData };
    });
  };

  const handlePrevStep = stepData => {
    if (currentStatus > 1) {
      setCurrentStatus(currentStatus - 1);
    }
    setStep(step - 1);
    setFormData(prevData => {
      console.log('work prevStep', prevData, stepData);
      return { ...prevData, ...stepData };
    });
  };

  const handleCancel = () => {
    console.log('work Cancel');
    navigate(-1);
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

//   const handleData = stepData => {
//     const sendDataForm = { ...formData, ...stepData };
//     const { category } = sendDataForm;
//     if (category === 'your pet') {
//       addPet('/pets/', '', formDataSend);
//     } else {
//       addPet('/notices/user-notices', category, formDataSend);
//     }

//     delete sendDataForm.category;
//     setFormData(prevData => ({ ...prevData, ...stepData }));
//   };

  // Варіант через Ініншиіл велью та глобальну функцію

 
  
  const handleDone = stepData => {
    const sendDataForm = { ...formData, ...stepData };
    const { category } = sendDataForm;
    delete sendDataForm.category;
    const formDataSend = new FormData();
   
        for (const key in sendDataForm) {
          formDataSend.append(key, sendDataForm[key]);
        }
    
    // const data = new FormData();
    // console.log("163", data, state);
    // createRequestData(data, state, values);
    // setState(prev => ({ ...prev, ...values }));
    console.log('done work', "formData:", formDataSend, "state:", state);

    state.category === 'your pet'
      ? dispatch(addPet(formDataSend))
      : dispatch(addNotice(formDataSend));
    
    setFormData(prevData => ({ ...prevData, ...stepData }));
  };




  return (
    <>
      {step === 1 && (
        <FormContainer>
          <TitleModal title={'Add pet'} />

          <StatusIndicator currentStatus={currentStatus} />
          <ButtonChooseOption
            handleChooseChange={handleChooseChange}
            activeButton={activeButton}
          />
          <ButtonRoutes>
            <ButtonNext textButton={'Next'} handleNextData={handleNextData} />
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
          {/* <ButtonRoutes>
            <ButtonNext
              textButton={'Next'}
              handleNextData={handleNextData}
            />
            <ButtonPrev textButton={'Back'} handlePrevStep={handlePrevStep} />
          </ButtonRoutes> */}
        </FormContainer>
      )}

      {step === 3 && (
        <>
          {chooseOption === 'your pet' || chooseOption === 'in good hands' ? (
            <FormContainer>
              <ThirdFormMyPet
                currentStatus={currentStatus}
                handleNextData={handleDone}
                handlePrevStep={handlePrevStep}
                formData={formData}
              />
              {/* <ButtonRoutes>
                <ButtonNext textButton={'Done'} handleNextData={handleDone} />
                <ButtonPrev
                  textButton={'Back'}
                  handlePrevStep={handlePrevStep}
                />
              </ButtonRoutes> */}
            </FormContainer>
          ) : (
            <FormContainerThird>
              <ThirdRenderStep
                formData={formData}
                chooseOption={chooseOption}
                currentStatus={currentStatus}
              ></ThirdRenderStep>
              <ButtonRoutes>
                <ButtonNext textButton={'Done'} handleNextData={handleDone} />
                <ButtonPrev
                  textButton={'Back'}
                  handlePrevStep={handlePrevStep}
                />
              </ButtonRoutes>
            </FormContainerThird>
          )}
        </>
      )}
    </>
  );
};
