import React from 'react';
import { SecondFormMyPet } from './SecondFormMyPet';
// import SecondFormSell from './SecondStepSell';

export const SecondRenderStep = ({
  handleNextData,
  handlePrevStep,
  chooseOption,
  formData,
}) => {
  return (
    <>
      {chooseOption === 'your-pet' || chooseOption === 'in-good-hands' ? (
        <SecondFormMyPet
          handleNextData={handleNextData}
          handlePrevStep={handlePrevStep}
          formData={formData}
        />
      ) : (
        ''
      )}
      {/* {chooseOption === 'sell' || chooseOption === 'lost-found' ? (
        <SecondFormSell
          handleNextData={handleNextData}
          handlePrevStep={handlePrevStep}
          formData={formData}
        />
      ) : (
        ''
      )} */}
    </>
  );
};


