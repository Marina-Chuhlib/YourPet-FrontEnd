// // import { useState } from 'react';
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';

// import { Formik, Form } from 'formik';
// import * as yup from 'yup';

// import { TextField, Box } from '@mui/material';

// // // import { blue } from '@mui/material/colors';
// // import TitleModal from 'shared/components/TitleModal/TitleModal';
// // import StatusIndicator from 'shared/components/StatusIndicator/StatusIndicator';
// // // import ButtonChooseOption from 'shared/components/ButtonChooseOption/ButtonChooseOption';
// // import ButtonRoutes from 'shared/components/ButtonRoutes/ButtonRoutes';
// // import ButtonNext from 'shared/components/ButtonRoutes/ButtonNext';
// // import ButtonPrev from 'shared/components/ButtonRoutes/ButtonPrev';
// // import FormContainer from 'shared/components/FormContainer/FormContainer';

// import css from './addPetForm.module.css';

// // import { register } from 'redux/auth/auth-operations';

// const stepOneValidationSchema = yup.object({
//   name: yup
//     .string()
//     .min(2, 'Too Short!')
//     .max(16, 'Too Long!')
//     .label('Name')
//     .required('Name is required')
//     .matches(/^[a-zA-Z\s]+?$/iu, 'Only Latin letters'),
//   dateOfBirth: yup
//     .string()
//     .matches(
//       /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
//       'Correct format: dd.mm.yyyy'
//     )
//     .test(
//       'is-date-valid',
//       () => `Future date not allowed`,
//       value => {
//         if (value) {
//           let date = value.split('.');
//           const corectFormat = new Date(`${date[2]}/${date[1]}/${date[0]}`);
//           return corectFormat.getTime() < Date.now();
//         }
//         return true;
//       }
//     )
//     .label('Date of birth')
//     .required('Date of birth is required'),
//   breed: yup
//     .string()
//     .min(2, 'Too Short!')
//     .max(16, 'Too Long!')
//     .label('Breed or type your pet')
//     .required('Breed is required'),
// });

// // const stepTwoValidationSchema = yup.object({
// //   comments: yup.string()
// //     .min(8, 'Too Short!')
// //     .max(120, 'Too Long!')
// //     .label('Comment'),
// //   petImage: yup.mixed().label('Pet image').required('Pet image is required'),
// // });

// const data = {
//   name: '',
//   dateOfBirth: '',
//   breed: '',
//   petImage: '',
//   comments: '',
// };

// export const AddPetFirstPage = () => {
//   const dispatch = useDispatch();
//   const handleFormSubmit = values => {
//     console.log(values);
//     const data = {
//       name: values.name,
//       dateOfBirth: values.dateOfBirth,
//       breed: values.breed,
//     };
//     //   dispatch(addPetFirst(data));
//   };

//   return (
//     <>
//       <Formik
//         initialValues={data}
//         onSubmit={handleFormSubmit}
//         validationSchema={stepOneValidationSchema}
//       >
//         {({ values, errors, touched, handleSubmit, handleChange }) => (
//           <Form className={css.form} onSubmit={handleSubmit}>
//             <Box
//               sx={{
//                 marginBottom: '10px',
//                 display: 'flex',
//                 alignItems: 'flex-end',
//               }}
//             >
//               <TextField
//                 name="name"
//                 type="text"
//                 label="Name pet"
//                 size="small"
//                 fullWidth
//                 sx={{
//                   '& .MuiOutlinedInput-root': {
//                     '& fieldset': {
//                       borderRadius: 40,
//                       border: `1px solid #54ADFF`,
//                     },
//                   },
//                 }}
//                 onChange={handleChange}
//                 value={values.name}
//                 error={touched.name && Boolean(errors.name)}
//                 helperText={touched.name && errors.name}
//               />
//             </Box>
//             <Box
//               sx={{
//                 marginBottom: '10px',
//                 display: 'flex',
//                 alignItems: 'flex-end',
//               }}
//             >
//               <TextField
//                 name="dateOfBirth"
//                 type="number"
//                 label="Date of birth"
//                 size="small"
//                 fullWidth
//                 sx={{
//                   '& .MuiOutlinedInput-root': {
//                     '& fieldset': {
//                       borderRadius: 40,
//                       border: `1px solid #54ADFF`,
//                     },
//                   },
//                 }}
//                 onChange={handleChange}
//                 value={values.dateOfBirth}
//                 error={touched.dateOfBirth && Boolean(errors.dateOfBirth)}
//                 helperText={touched.dateOfBirth && errors.dateOfBirth}
//               />
//             </Box>
//             <Box
//               sx={{
//                 marginBottom: '10px',
//                 display: 'flex',
//                 alignItems: 'flex-end',
//               }}
//             >
//               <TextField
//                 name="breed"
//                 type="text"
//                 label="Breed"
//                 size="small"
//                 fullWidth
//                 sx={{
//                   '& .MuiOutlinedInput-root': {
//                     '& fieldset': {
//                       borderRadius: 40,
//                       border: `1px solid #54ADFF`,
//                     },
//                   },
//                 }}
//                 onChange={handleChange}
//                 value={values.breed}
//                 error={touched.breed && Boolean(errors.breed)}
//                 helperText={touched.breed && errors.breed}
//               />
//             </Box>

//             <Link to="/register" className={css.loginLink}>
//               Add pet
//             </Link>
//           </Form>
//         )}
//       </Formik>
//     </>
//   );
// };
