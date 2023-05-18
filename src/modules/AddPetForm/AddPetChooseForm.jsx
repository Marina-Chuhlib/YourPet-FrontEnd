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
import instance from 'shared/services/App/app';
import { SecondRenderStep } from './SecondStep/SecondRenderStep'

// import instance from 'api/auth-api'
// import { AddPetFirstPage } from './AddPetFirstPage';

export const AddPetChooseForm = () => {
  const [step, setStep] = useState(1);
  const [currentStatus, setCurrentStatus] = useState(1);
  const [chooseOption, setChooseOption] = useState('');
  const [activeButton, setActiveButton] = useState(null);

  const [formData, setFormData] = useState({});

  useEffect(() => {
    console.log('new state FORM DATA:', formData);
  }, [formData]);

  const navigate = useNavigate();

  const handleChooseChange = (option, number) => {
    console.log("Choose option work", option, number);
    setFormData(prevData => ({ ...prevData, category: option }));
    setChooseOption(option);
    setActiveButton(number);
  };

  const handleNextData = stepData => {
    console.log('NextData');
    if (chooseOption && currentStatus < 3) {
      setStep(step + 1);
      setCurrentStatus(currentStatus + 1);
    } else {
      alert('Please type all info')
    }

    setFormData(prevData => {
      return { ...prevData, ...stepData }
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

  const addPet = async (endpoint, category, data) => {
    try {
      const response = await instance.post(`${endpoint}${category}`, data);
      return response.data;
    } catch (error) {
      return error.message;
    }
  };

  const handleSubmit = stepData => {
    // e.preventDefault();
    const sendDataForm = { ...formData, ...stepData };
    const { category } = sendDataForm;

    delete sendDataForm.category;
    console.log("work handleSubmit", sendDataForm);
    const formDataSend = new FormData();

    for (const key in sendDataForm) {
      formData.append(key, sendDataForm[key]);
    }
    if (category === "your-pet") {
      addPet('/pets/', '', formDataSend);
    } else {
      addPet('/notices/user-notices', category, formDataSend)
    }

    setFormData(prevData => ({ ...prevData, ...stepData }));
  };


  return (
    <FormContainer>
      <TitleModal title={'Add pet'} />

      <StatusIndicator currentStatus={currentStatus} />
      {step === 1 && (
        <>
          <ButtonChooseOption
            handleChooseChange={handleChooseChange}
            activeButton={activeButton}
          />
          <ButtonRoutes>
            <ButtonNext textButton={'Next'} handleNextData={handleNextData} />
            <ButtonPrev textButton={'Cancel'} handleCancel={handleCancel} />
          </ButtonRoutes>
        </>
      )}
      {step === 2 && (
        <SecondRenderStep formData={formData}>
          
          <ButtonRoutes>
            <ButtonNext textButton={'Next'} handleNextData={handleSubmit} />
            <ButtonPrev textButton={'Back'} handlePrevStep={handlePrevStep} />
          </ButtonRoutes>
        </SecondRenderStep>
      )}
      {/* //
      //{step === 3 && (
       // <p>Third page</p>
        // <ThirdRenderStep formData={formData}>
        //   <ButtonChooseOption chooseOption={chooseOption} />
        //   <ButtonRoutes>
        //     <ButtonNext textButton={'Done'} handleNextData={handleSubmit} />
        //     <ButtonPrev textButton={'Back'} handlePrevStep={handlePrevStep} />
        //   </ButtonRoutes>
        // </ThirdRenderStep>
      //)} */}
    </FormContainer>
  );
};
