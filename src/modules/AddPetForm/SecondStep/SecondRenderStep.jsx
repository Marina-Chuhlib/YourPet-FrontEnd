import React from 'react';
import { SecondFormMyPet } from './SecondFormMyPet';
import { SecondFormSell } from './SecondFormSell';

export const SecondRenderStep = ({
  handleNextData,
  handlePrevStep,
  chooseOption,
  formData,
  currentStatus
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
          title={'Add pet for sale'}
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
          title={'Add lost pet'}
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
          title={'Pet in good hands'}
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


