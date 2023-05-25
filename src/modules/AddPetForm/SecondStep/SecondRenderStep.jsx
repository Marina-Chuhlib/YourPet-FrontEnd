import React from 'react';
import { SecondFormMyPet } from './SecondFormMyPet';
import { SecondFormSell } from './SecondFormSell';

export const SecondRenderStep = ({
  handleNextData,
  handlePrevStep,
  chooseOption,
  formData,
  currentStatus,
}) => {
  return (
    <>
      {chooseOption === 'your pet' ? (
        <SecondFormMyPet
          currentStatus={currentStatus}
          handleNextData={handleNextData}
          handlePrevStep={handlePrevStep}
          formData={formData}
        />
      ) : (
        ''
      )}
      {chooseOption === 'sell' ? (
        <SecondFormSell
          titleForm={'Add pet for sell'}
          currentStatus={currentStatus}
          handleNextData={handleNextData}
          handlePrevStep={handlePrevStep}
          formData={formData}
        />
      ) : (
        ''
      )}
      {chooseOption === 'lost-found' ? (
        <SecondFormSell
          titleForm={'Add lost pet'}
          currentStatus={currentStatus}
          handleNextData={handleNextData}
          handlePrevStep={handlePrevStep}
          formData={formData}
        />
      ) : (
        ''
      )}
      {chooseOption === 'for-free' ? (
        <SecondFormSell
          titleForm={'Pet in good hands'}
          currentStatus={currentStatus}
          handleNextData={handleNextData}
          handlePrevStep={handlePrevStep}
          formData={formData}
        />
      ) : (
        ''
      )}
    </>
  );
};
