import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import { Formik, Form } from 'formik';
import * as yup from 'yup';

import { TextField, IconButton, Box, Button } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { blue } from '@mui/material/colors';

import css from './registerFormDetails.module.css';

import { register } from 'redux/auth/auth-operations';

const registerSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
  // .matches(/^[^ ]{7,32}$/, 'Password should not contain space')
  // .matches(
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{7,})/,
  //   'Password is not valid as per password policy'
  // )
  // .max(32),
  confirmPassword: yup.string().required('Confirm password is required'),
  // .when('password', {
  //   is: val => (val && val.length > 0 ? true : false),
  //   then: yup
  //     .string()
  //     .oneOf([yup.ref('password')], 'Both password need to be the same'),
  // }),
});

export const RegisterFormDetails = ({ data }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword(show => !show);

  const dispatch = useDispatch();
  const handleFormSubmit = values => {
    // console.log(values);
    dispatch(register(values));
  };

  return (
    <>
      <Formik
        initialValues={data}
        onSubmit={handleFormSubmit}
        validationSchema={registerSchema}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          handleBlur,
          handleChange,
        }) => (
          <Form className={css.form} onSubmit={handleSubmit}>
            <h2 className={css.title}>Registration</h2>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-end',
              }}
            >
              <TextField
                name="name"
                type="text"
                label="Name"
                size="small"
                margin="normal"
                fullWidth
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderRadius: 40,
                      border: `1px solid #54ADFF`,
                    },
                  },
                }}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
              />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <TextField
                name="email"
                type="email"
                label="Email"
                size="small"
                margin="normal"
                fullWidth
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderRadius: 40,
                      border: `1px solid #54ADFF`,
                    },
                  },
                }}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <TextField
                name="password"
                type={showPassword ? 'text' : 'password'}
                label="Password"
                size="small"
                fullWidth
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderRadius: 40,
                      border: `1px solid #54ADFF`,
                    },
                  },
                }}
                margin="normal"
                InputProps={{
                  endAdornment: (
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                      size="small"
                    >
                      {showPassword ? (
                        <Visibility style={{ color: blue[300] }} />
                      ) : (
                        <VisibilityOff style={{ color: blue[300] }} />
                      )}
                      {}
                    </IconButton>
                  ),
                }}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <TextField
                name="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                label="Confirm password"
                size="small"
                fullWidth
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderRadius: 40,
                      border: `1px solid #54ADFF`,
                    },
                  },
                }}
                margin="normal"
                InputProps={{
                  endAdornment: (
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowConfirmPassword}
                      edge="end"
                      size="small"
                    >
                      {showConfirmPassword ? (
                        <Visibility style={{ color: blue[300] }} />
                      ) : (
                        <VisibilityOff style={{ color: blue[300] }} />
                      )}
                    </IconButton>
                  ),
                }}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
                error={
                  touched.confirmPassword && Boolean(errors.confirmPassword)
                }
                helperText={touched.confirmPassword && errors.confirmPassword}
              />
            </Box>
            <div className={css.buttonContainer}>
              {/* <Button type="submit" variant="contained" size="small">
                Registration
              </Button> */}
              <button type="submit" className={css.button}>
                Registration
              </button>
            </div>
            <p className={css.questionText}>
              Already have an account?{' '}
              <Link to="/login" className={css.loginLink}>
                Login
              </Link>
            </p>
          </Form>
        )}
      </Formik>
    </>
  );
};

RegisterFormDetails.propTypes = {
  data: PropTypes.object.isRequired,
};
