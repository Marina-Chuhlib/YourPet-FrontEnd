// import React from 'react';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import { useNavigate } from 'react-router-dom';

import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

import css from './UserForm.module.css';

import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';

import { logout } from 'redux/auth/auth-operations';
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
  const { isLoading } = useSelector(state => state.auth);

const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: name,
    email: email,
    birthday: '',
    phone: '',
    city: '',
  });

  const [editingFields, setEditingFields] = useState({
    name: false,
    email: false,
    birthday: false,
    phone: false,
    city: false,
  });

  // const filledFields = {};

  const handleChangeInput = event => {
    const { name, value } = event.target;
    return setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleEditField = fieldName => {
    const value = formData[fieldName];
    console.log(value, 'VALUE');

    if (!value) {
      alert('Email is REQUIRED');
      return;
    }

    setEditingFields(prevEditingFields => ({
      ...prevEditingFields,
      [fieldName]: !prevEditingFields[fieldName],
    }));

    if (editingFields[fieldName] && value !== '') {
      sendDataToServer(fieldName, value);
      console.log('send');
    }
  };

  const sendDataToServer = (fieldName, value) => {
    console.log(`Sending ${fieldName}=${value} to the server`);
  };

  const fields = [
    { fieldName: 'name', label: 'Name', type: 'text', placeholder: 'Name' },
    {
      fieldName: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'email@xxx.com',
      require,
    },
    {
      fieldName: 'birthday',
      label: 'Birthday',
      type: 'text',
      placeholder: '00.00.0000',
    },
    {
      fieldName: 'phone',
      label: 'Phone',
      type: 'tel',
      placeholder: '+38000000000',
    },
    { fieldName: 'city', label: 'City', type: 'text', placeholder: 'Kiev' },
  ];

  // console.log(state.name, 'state.name');
  // const dispatch = useDispatch();
   const dispatch = useDispatch();

    const onLogout = ()=> {
      dispatch(logout())
      navigate("/")
      
    }

  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <h2 className={css.title}>My information:</h2>

        <Formik>
          {({ errors, touched }) => (
            <Form className={css.forma}>
              <img src="" alt="" className={css.avatar} />

              <div className={css.wrapperFile}>
                <label htmlFor="editPhoto" className={css.avatarLabel}>
                  <CameraAltOutlinedIcon
                    style={{ color: '#54ADFF', marginRight: '8px' }}
                  />
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

              {/* Name*/}

              <div className={css.formWrapper}>
                {fields.map(field => (
                  <div className={css.row} key={field.fieldName}>
                    <label className={css.label}>{field.label}:</label>

                    <div className={css.inputContainer}>
                      <input
                        name={field.fieldName}
                        type={field.type}
                        className={css.input}
                        value={formData[field.fieldName]}
                        placeholder={field.placeholder}
                        required={field.email}
                        onChange={handleChangeInput}
                        disabled={!editingFields[field.fieldName]}
                      />
                      {errors[field.fieldName] && touched[field.fieldName] ? (
                        <div>{errors[field.fieldName]}</div>
                      ) : null}

                      <div className={css.checkbox}>
                        <Checkbox
                          checked={editingFields[field.fieldName]}
                          onChange={() => handleEditField(field.fieldName)}
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
                              // onChange={sendDataToServer}
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
                ))}
              </div>

              {/* <div className={css.row}>
                <label className={css.label}>Name:</label>

                <div className={css.inputContainer}>
                  <Field
                    name="name"
                    type="name"
                    className={css.input}
                    value={inputValue.name}
                    onChange={handleChangeInput}
                    disabled={!isEditing}
                  />
                  {errors.name && touched.name ? (
                    <div>{errors.name}</div>
                  ) : null}

                  <div className={css.checkbox}>
                    <Checkbox
                      checked={isEditing}
                      onChange={handleEdit}
                      value={isEditing}
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
              </div> */}

              {/* EMAIL */}

              {/* <div className={css.row}>
                <label>Email:</label>
                <div className={css.inputContainer}>
                  <Field
                    name="email"
                    type="email"
                    className={css.input}
                    value={inputValue.email}
                    onChange={handleChangeInput}
                    disabled={!isEditing}
                  />
                  {errors.email && touched.email ? (
                    <div>{errors.email}</div>
                  ) : null}

                  <div className={css.checkbox}>
                    <Checkbox
                      checked={isEditing}
                      onChange={handleEdit}
                      value={isEditing}
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
              </div> */}

              {/* Birthday */}

              {/* <div className={css.row}>
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
              </div> */}

              {/* pppp */}

              {/* <div className={css.row}>
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
              </div> */}

              {/* hhhh */}

              {/* <div className={css.row}>
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
              </div> */}

              <Button
                onClick={onLogout}
                variant="outlined"
                style={{
                  border: 'rgba(0, 0, 0, 0)',
                  color: '#888888',
                  fontSize: '16px',
                  padding: '0',
                  fontFamily: 'Manrope',
                  textTransform: 'none',
                  marginBottom: '25px',
                  marginLeft: '2px',
                }}
                startIcon={
                  <LogoutOutlinedIcon
                    style={{
                      color: '#54ADFF',
                      transform: 'rotate(180deg)',
                      fontSize: '24px',
                    }}
                  />
                }
              >
                Log Out
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
export default UserForm;
