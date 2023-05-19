// import React from 'react';

// import css from './buttonChooseOption.module.css';

// const ButtonList = ({ buttons, handleButtonClick }) => {

//   return (
//     <ul className={css.buttonContainer}>
//       {buttons.map((button, index) => (
//         <li key={index}>
//           <button
//             className={css.buttonChoose}
//             onClick={() => {
//               handleButtonClick(button);
//               const activeButton = index + 1;
//             }}
//           >
//             {button}
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default ButtonList;


// import React, { useState } from 'react';

// import css from './buttonChooseOption.module.css';

// const ButtonList = ({ buttons, handleButtonClick }) => {
//   const [currentStyle, setCurrentStyle] = useState({
//     color: 'white',
//     backgroundColor: 'blue',
//   });

//   const handleClick = button => {
//     setCurrentStyle({
//       color: 'white',
//       backgroundColor: 'blue',
//     });
//     handleButtonClick(button);
//     console.log(button);
//     style = { currentStyle };
//   };

//   return (
//     <ul className={css.buttonContainer}>
//       {buttons.map((button, index) => (
//         <li key={index}>
//           <button
//             className={css.buttonChoose}
            
//             onClick={() => handleClick(button)}
//           >
//             {button}
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default ButtonList;
