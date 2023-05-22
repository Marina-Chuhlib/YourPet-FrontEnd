

import css from './buttonChooseOption.module.css';
import React from 'react';

const ButtonChooseOption = ({ handleChooseChange }) => {

  return (
    <ul className={css.buttonContainer}>
      <li>
        <button
          type="button"
          className={css.buttonChoose}
          onClick={() => {
            handleChooseChange('your pet', 1);
          }}
        >
          your pet
        </button>
      </li>
      <li>
        <button
          type="button"
          className={css.buttonChoose}
          onClick={() => {
            handleChooseChange('sell', 2);
          }}
        >
          sell
        </button>
      </li>
      <li>
        <button
          type="button"
          className={css.buttonChoose}
          onClick={() => {
            handleChooseChange('lost/found', 3);
          }}
        >
          lost/found
        </button>
      </li>
      <li>
        <button
          type="button"
          className={css.buttonChoose}
          onClick={() => {
            handleChooseChange('in good hands', 4);
          }}
        >
          in good hands
        </button>
      </li>
    </ul>
  );
};

export default ButtonChooseOption;


// import React, { useState } from 'react';
// import ButtonList from './ButtonList';
// import Form from './Form';

// const FormSelection = () => {
//   const [selectedForm, setSelectedForm] = useState(null);

//   const handleButtonClick = (formId) => {
//     setSelectedForm(formId);
//   };

//   const handleNextButtonClick = () => {
//     // Виконати дії для переходу до наступної форми
//   };

//   return (
//     <div>
//       {selectedForm ? (
//         <Form formId={selectedForm} onNextButtonClick={handleNextButtonClick} />
//       ) : (
//         <ButtonList buttons={['sell', 'my', 'found']} handleButtonClick={handleButtonClick} />
//       )}
//     </div>
//   );
// };

// export default FormSelection;
