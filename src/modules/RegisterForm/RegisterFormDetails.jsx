import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Formik, Form } from 'formik';
import * as yup from 'yup';

import { ThemeContext } from 'shared/hooks/context/ThemeProvider';
import { useTranslation } from 'react-i18next';

import { TextField, IconButton, Box } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { blue } from '@mui/material/colors';

import css from './registerFormDetails.module.css';

import { register } from 'redux/auth/auth-operations';

const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .matches(/^[a-zA-Z\s]*$/),
  email: yup
    .string()
    .email('Invalid email')
    .required('Email is required')
    .matches(
      /^(?=.{10,63}$)(([0-9A-Za-z]{1}[-0-9A-z.]{1,}[0-9A-Za-z]{1})@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/,
      'Invalid email'
    ),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(16, 'Password must be at most 16 characters')
    .matches(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([0-9a-zA-Z]{6,})*$/,
      'Password must contain at least one uppercase letter, one lowercase letter, and one digit'
    ),
  confirmPassword: yup
    .string()
    .required('Confirm password is required')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

const data = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const RegisterFormDetails = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();
  
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword(show => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword(show => !show);

  const dispatch = useDispatch();
  const handleFormSubmit = async values => {
    const data = {
      name: values.name,
      email: values.email,
      password: values.password,
    };
    await dispatch(register(data));
    navigate('/user');
  };

  return (
    <>
      <div
        className={`${css.myСomponent} ${
          theme === 'light' ? css.light : css.dark
        }`}
      >
        <Formik
          initialValues={data}
          onSubmit={handleFormSubmit}
          validationSchema={registerSchema}
        >
          {({ values, errors, touched, handleSubmit, handleChange }) => (
            <Form className={css.form} onSubmit={handleSubmit}>
              <h2 className={css.title}>{t("Registration")}</h2>
              <Box
                sx={{
                  marginBottom: '10px',
                  display: 'flex',
                  alignItems: 'flex-end',
                }}
              >
                <TextField
                  name="name"
                  type="text"
                  label={t("Name")}
                  size="small"
                  fullWidth
                  sx={{
                    '.MuiInputBase-root.MuiOutlinedInput-root': {
                      borderRadius: '40px',
                    },
                    '& .MuiInputLabel-root': {
                      color: theme === 'dark' && '#b2abab',
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: theme === 'light' ? '#54ADFF' : '#183a3d',
                    },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderRadius: 40,
                        // border: `1px solid #54ADFF`,
                        border: `1px solid ${
                          theme === 'light' ? '#54ADFF' : '#2f5a5f'
                        }`,
                      },
                      '&:hover fieldset': {
                        // borderColor: '#54ADFF',
                        borderColor: `${
                          theme === 'light' ? '#54ADFF' : '#d9d2d2'
                        }`,
                      },
                      '&.Mui-focused fieldset': {
                        // borderColor: '#54ADFF',
                        borderColor: `${
                          theme === 'light' ? '#54ADFF' : '#2f5a5f'
                        }`,
                        borderWidth: '2px',
                      },
                      '& .MuiInputBase-input': {
                        color: theme === 'dark' && '#d9d2d2',
                      },
                    },
                  }}
                  onChange={handleChange}
                  value={values.name}
                  error={touched.name && Boolean(errors.name)}
                  helperText={touched.name && errors.name}
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
                  name="email"
                  type="email"
                  label={t("Email")}
                  size="small"
                  fullWidth
                  sx={{
                    '.MuiInputBase-root.MuiOutlinedInput-root': {
                      borderRadius: '40px',
                    },
                    '& .MuiInputLabel-root': {
                      color: theme === 'dark' && '#b2abab',
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: theme === 'light' ? '#54ADFF' : '#183a3d',
                    },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderRadius: 40,
                        border: `1px solid ${
                          theme === 'light' ? '#54ADFF' : '#2f5a5f'
                        }`,
                      },
                      '&:hover fieldset': {
                        borderColor: `${
                          theme === 'light' ? '#54ADFF' : '#d9d2d2'
                        }`,
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: `${
                          theme === 'light' ? '#54ADFF' : '#2f5a5f'
                        }`,
                        borderWidth: '2px',
                      },
                      '& .MuiInputBase-input': {
                        color: theme === 'dark' && '#d9d2d2',
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
                  label={t("Password")}
                  size="small"
                  fullWidth
                  sx={{
                    '& .MuiInputLabel-root': {
                      color: theme === 'dark' && '#b2abab',
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: theme === 'light' ? '#54ADFF' : '#183a3d',
                    },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderRadius: 40,
                        border: `1px solid ${
                          theme === 'light' ? '#54ADFF' : '#2f5a5f'
                        }`,
                      },

                      '&:hover fieldset': {
                        borderColor: `${
                          theme === 'light' ? '#54ADFF' : '#d9d2d2'
                        }`,
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: `${
                          theme === 'light' ? '#54ADFF' : '#2f5a5f'
                        }`,
                        borderWidth: '2px',
                      },
                      '& .MuiInputBase-input': {
                        color: theme === 'dark' && '#d9d2d2',
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
                          <Visibility
                            style={{
                              color: theme === 'dark' ? '#2f5a5f' : blue[300],
                            }}
                          />
                        ) : (
                          <VisibilityOff
                            style={{
                              color: theme === 'dark' ? '#2f5a5f' : blue[300],
                            }}
                          />
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
              <Box
                sx={{
                  marginBottom: '10px',
                  display: 'flex',
                  alignItems: 'flex-end',
                }}
              >
                <TextField
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  label={t("Confirm password")}
                  size="small"
                  fullWidth
                  sx={{
                    '& .MuiInputLabel-root': {
                      color: theme === 'dark' && '#b2abab',
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: theme === 'light' ? '#54ADFF' : '#183a3d',
                    },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderRadius: 40,
                        border: `1px solid ${
                          theme === 'light' ? '#54ADFF' : '#2f5a5f'
                        }`,
                      },
                      '&:hover fieldset': {
                        borderColor: `${
                          theme === 'light' ? '#54ADFF' : '#2f5a5f'
                        }`,
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: `${
                          theme === 'light' ? '#54ADFF' : '#2f5a5f'
                        }`,
                        borderWidth: '2px',
                      },
                      '& .MuiInputBase-input': {
                        color: theme === 'dark' && '#d9d2d2',
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
                          <Visibility
                            style={{
                              color: theme === 'dark' ? '#2f5a5f' : blue[300],
                            }}
                          />
                        ) : (
                          <VisibilityOff
                            style={{
                              color: theme === 'dark' ? '#2f5a5f' : blue[300],
                            }}
                          />
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
              </Box>
              <div className={css.buttonContainer}>
                <button type="submit" className={css.button}>
                  {t("Registration")}
                </button>
              </div>
              <p className={css.questionText}>
                {t("Already have an account?")}{' '}
                <Link to="/login" className={css.loginLink}>
                  {t("Login")}
                </Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};
