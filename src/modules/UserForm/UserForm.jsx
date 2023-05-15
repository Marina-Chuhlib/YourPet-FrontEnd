// import React from 'react';
import * as React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

import css from './UserForm.module.css';

import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';

import Favorite from '@mui/icons-material/Favorite';

// const SignupSchema = Yup.object().shape({
//   firstName: Yup.string()
//     .min(2, 'Too Short!')
//     .max(50, 'Too Long!')
//     .required('Required'),
//   lastName: Yup.string()
//     .min(2, 'Too Short!')
//     .max(50, 'Too Long!')
//     .required('Required'),
//   email: Yup.string().email('Invalid email').required('Required'),
// });

// import {selectAuth} from  "../../redux/auth/auth-selectors"

const UserForm = () => {
  const { name, email } = useSelector(state => state.auth.user);
  const [inputValue, setInputValue] = useState('');
  // const [checked, setChecked] = React.useState(false);

  // console.log(name);
  // const dispatch = useDispatch();

  const handleChange = event => {
    console.log('Hi');
  };

  const handleChangeInput = event => {
    setInputValue(event.target.value);
    console.log(inputValue, 'INPUT');
  };

  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <h2 className={css.title}>My information:</h2>

        <Formik
          initialValues={{
            name: name,
            email: email,
            birthday: '',
            phone: '',
            city: '',
          }}
  
          // validationSchema={SignupSchema}
          onSubmit={values => {
            // same shape as initial values
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form className={css.forma}>
              <img src="" alt="" className={css.avatar} />

              <div className={css.wrapperFile}>
                <CameraAltOutlinedIcon style={{ color: '#54ADFF' }} />
                <label htmlFor="editPhoto" className={css.avatarL}>
                  Edit photo
                  <input
                    type="file"
                    id="editPhoto"
                    accept="image/*"
                    name="Edit photo"
                    className={css.avatarBtn}
                  />
                </label>
              </div>

              {/* //////////////////////////// */}

              <div className={css.row}>
                <label className={css.label}>Name:</label>

                <div className={css.inputContainer}>
                  <Field
                    name="name"
                    type="name"
                    className={css.input}
                    value={inputValue}
                    onChange={handleChangeInput}
                  />
                  {errors.name && touched.name ? (
                    <div>{errors.name}</div>
                  ) : null}

                  <div className={css.checkbox}>
                    <Checkbox
                      // checked={checked}
                      onChange={handleChange}
                      icon={
                        <BorderColorOutlinedIcon
                          style={{
                            color: '#54ADFF',
                            width: '20px',
                            height: '20px',
                          }}
                        />
                      }
                      checkedIcon={
                        <CheckOutlinedIcon
                          style={{
                            color: '#00C3AD',
                            width: '20px',
                            height: '20px',
                            border: '1.5px',
                          }}
                        />
                      }
                    />
                  </div>
                </div>
              </div>

              {/* EMAIL */}
              <div className={css.row}>
                <label>Email:</label>
                <div className={css.inputContainer}>
                  <Field name="email" type="email" className={css.input} />
                  {errors.email && touched.email ? (
                    <div>{errors.email}</div>
                  ) : null}

                  <div className={css.checkbox}>
                    <Checkbox
                      // checked={checked}
                      onChange={handleChange}
                      icon={
                        <BorderColorOutlinedIcon
                          style={{
                            color: '#54ADFF',
                            width: '20px',
                            height: '20px',
                          }}
                        />
                      }
                      checkedIcon={
                        <CheckOutlinedIcon
                          style={{
                            color: '#00C3AD',
                            width: '20px',
                            height: '20px',
                            border: '1.5px',
                          }}
                        />
                      }
                    />
                  </div>
                </div>
              </div>

              {/* b */}

              <div className={css.row}>
                <label>Birthday:</label>
                <div className={css.inputContainer}>
                  <Field name="birthday" className={css.input} />
                  {errors.birthday && touched.birthday ? (
                    <div>{errors.birthday}</div>
                  ) : null}

                  <div className={css.checkbox}>
                    <Checkbox
                      // checked={checked}
                      onChange={handleChange}
                      icon={
                        <BorderColorOutlinedIcon
                          style={{
                            color: '#54ADFF',
                            width: '20px',
                            height: '20px',
                          }}
                        />
                      }
                      checkedIcon={
                        <CheckOutlinedIcon
                          style={{
                            color: '#00C3AD',
                            width: '20px',
                            height: '20px',
                            border: '1.5px',
                          }}
                        />
                      }
                    />
                  </div>
                </div>
              </div>

              {/* pppp */}

              <div className={css.row}>
                <label>Phone:</label>
                <div className={css.inputContainer}>
                  <Field name="phone" className={css.input} />
                  {errors.phone && touched.phone ? (
                    <div>{errors.phone}</div>
                  ) : null}

                  <div className={css.checkbox}>
                    <Checkbox
                      // checked={checked}
                      onChange={handleChange}
                      icon={
                        <BorderColorOutlinedIcon
                          style={{
                            color: '#54ADFF',
                            width: '20px',
                            height: '20px',
                          }}
                        />
                      }
                      checkedIcon={
                        <CheckOutlinedIcon
                          style={{
                            color: '#00C3AD',
                            width: '20px',
                            height: '20px',
                            border: '1.5px',
                          }}
                        />
                      }
                    />
                  </div>
                </div>
              </div>

              {/* hhhh */}

              <div className={css.row}>
                <label>City:</label>
                <div className={css.inputContainer}>
                  <Field name="city" className={css.input} />
                  {errors.city && touched.city ? (
                    <div>{errors.city}</div>
                  ) : null}

                  <div className={css.checkbox}>
                    <Checkbox
                      // checked={checked}
                      onChange={handleChange}
                      icon={
                        <BorderColorOutlinedIcon
                          style={{
                            color: '#54ADFF',
                            width: '20px',
                            height: '20px',
                          }}
                        />
                      }
                      checkedIcon={
                        <CheckOutlinedIcon
                          style={{
                            color: '#00C3AD',
                            width: '20px',
                            height: '20px',
                            border: '1.5px',
                          }}
                        />
                      }
                    />
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
export default UserForm;
