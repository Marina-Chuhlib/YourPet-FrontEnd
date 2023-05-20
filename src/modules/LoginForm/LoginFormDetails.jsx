import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Formik, Form } from 'formik';
import * as yup from 'yup';

import { TextField, IconButton, Box } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { blue } from '@mui/material/colors';

import css from './loginFormDetails.module.css';

import { login } from 'redux/auth/auth-operations';

const registerSchema = yup.object({
  //name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Enter a valid Email'),
  password: yup
  .string()
  .required('Password is required')
  .min(6, 'Password must be at least 6 characters')
    .max(16, 'Password must be at most 16 characters')
    .matches(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([0-9a-zA-Z]{6,})*$/,
      'Password must contain at least one uppercase letter, one lowercase letter, and one digit'
    ),
});

const data = {
  //name: '',
  email: '',
  password: '',
  //confirmPassword: '',
};

export const LoginFormDetails = () => {
    const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
 // const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);
//   const handleClickShowConfirmPassword = () =>
//     setShowConfirmPassword(show => !show);

  const dispatch = useDispatch();
  const handleFormSubmit = async values => {
    // console.log(values);
    const data = {
      //name: values.name,
      email: values.email,
      password: values.password,
    };
   await dispatch(login(data));
    navigate('/user');
  };

  return (
    <>
      <Formik
        initialValues={data}
        onSubmit={handleFormSubmit}
        validationSchema={registerSchema}
      >
        {({ values, errors, touched, handleSubmit, handleChange }) => (
          <Form className={css.form} onSubmit={handleSubmit}>
            <h2 className={css.title}>Login</h2>
            {/* <Box
              sx={{
                marginBottom: '10px',
                display: 'flex',
                alignItems: 'flex-end',
              }}
            >
              <TextField
                name="name"
                type="text"
                label="Name"
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
                onChange={handleChange}
                value={values.name}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
              />
            </Box> */}
            <Box
              sx={{
                marginBottom: '10px',
                display: 'flex',
                alignItems: 'flex-end',
              }}
            >
              <TextField
                name="email"
                type="email"
                label="Email"
                size="small"
                fullWidth
                sx={{
                  '.MuiInputBase-root.MuiOutlinedInput-root': {
                    borderRadius: '40px',
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderRadius: 40,
                      border: `1px solid #54ADFF`,
                    },
                  },
                }}
                onChange={handleChange}
                value={values.email}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
            </Box>
            <Box
              sx={{
                marginBottom: '10px',
                display: 'flex',
                alignItems: 'flex-end',
              }}
            >
              <TextField
                name="password"
                type={showPassword ? 'text' : 'password'}
                label="Password"
                size="small"
                fullWidth
                sx={{
                  '.MuiInputBase-root.MuiOutlinedInput-root': {
                    borderRadius: '40px',
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderRadius: 40,
                      border: `1px solid #54ADFF`,
                    },
                  },
                }}
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
                value={values.password}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />
            </Box>
            {/* <Box
              sx={{
                marginBottom: '10px',
                display: 'flex',
                alignItems: 'flex-end',
              }}
            >
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
                value={values.confirmPassword}
                error={
                  touched.confirmPassword && Boolean(errors.confirmPassword)
                }
                helperText={touched.confirmPassword && errors.confirmPassword}
              />
            </Box> */}
            <div className={css.buttonContainer}>
              <button type="submit" className={css.button}>
                Login
              </button>
            </div>
            <p className={css.questionText}>
              Don't have an account?{' '}
              <Link to="/register" className={css.registerLink}>
                Register
              </Link>
            </p>
          </Form>
        )}
      </Formik>
    </>
  );
};
