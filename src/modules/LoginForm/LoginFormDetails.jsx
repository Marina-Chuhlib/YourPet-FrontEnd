import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from 'shared/hooks/context/ThemeProvider';
import { useTranslation } from 'react-i18next';

import { Formik, Form } from 'formik';
import * as yup from 'yup';

import { TextField, IconButton, Box } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { blue } from '@mui/material/colors';

import css from './loginFormDetails.module.css';

import { login } from 'redux/auth/auth-operations';

const registerSchema = yup.object({
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
  email: '',
  password: '',
};

export const LoginFormDetails = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { theme } = useContext(ThemeContext);
 const { t } = useTranslation();

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const dispatch = useDispatch();

  const handleFormSubmit = async values => {
    const data = {
      email: values.email,
      password: values.password,
    };
    await dispatch(login(data));
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
              <h2 className={css.title}>{t('Login')}</h2>
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
              <div className={css.buttonContainer}>
                <button type="submit" className={css.button}>
                  {t("Login")}
                </button>
              </div>
              <p className={css.questionText}>
                {t("Don't have an account?")}{' '}
                <Link to="/register" className={css.registerLink}>
                  {t("Register")}
                </Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};
