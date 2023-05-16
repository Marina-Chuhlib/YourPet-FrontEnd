// import React from 'react';
import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
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

import { fetchUser, fetchUpdateUser } from 'redux/user/user-operations';

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

import { userInfo } from 'redux/user/user-selectors';

const UserForm = ({ name, email }) => {
  const { user } = useSelector(userInfo);
  const stateis = useSelector(state=>state.auth)
  // const avatar =  user.imageURL
  // console.log(user.imageURL);
  console.log(stateis);
  // const [isUser, isUseState]= useState(user)
  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log('useEffect');
  //   //  navigate("/store", { replace: true });
  // }, []);

  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NjFmYTI2ZGI4OGU5ZjU5YjkzYzA1MyIsImlhdCI6MTY4NDI0NTU4MSwiZXhwIjoxNjg0MzI4MzgxfQ.BSa11XHwb0W-Fqs_-2OO2amQw9xTpiXlRL0UAUebvTs';

  useEffect(() => {
    dispatch(fetchUser(token));
  }, [dispatch]);

  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: name,
    email: email,
    birthday: user.birthday || "",
    phone: user.phone || "" ,
    city: user.city || "",
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

    // if (!value) {
    //   alert('Email is REQUIRED');
    //   return;
    // }

    setEditingFields(prevEditingFields => ({
      ...prevEditingFields,
      [fieldName]: !prevEditingFields[fieldName],
    }));

    if (editingFields[fieldName] && value !== '') {
      try {
        // sendDataToServer(fieldName, value);
        dispatch(
          fetchUpdateUser({ token, fieldToUpdate: fieldName, newValue: value })
        );
        console.log(`Sending ${fieldName}=${value} to the server`);
      } catch (error) {
        console.log(error.massage);
      }
    }
  };

  // const sendDataToServer = (fieldName, value) => {
  //   console.log(`Sending ${fieldName}=${value} to the server`);

  // };

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

  const onLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <section>
      <div className={css.container}>
        <div className={css.wrapper}>
          <h2 className={css.title}>My information:</h2>

          <Formik>
            {({ errors, touched }) => (
              <Form className={css.forma}>
                {/* <img src="" alt="avatar" className={css.avatar} /> */}
                {user ? (
                  <img
                    src={user.imageURL}
                    alt="avatar"
                    className={css.avatar}
                  />
                ) : (
                  <img src="" alt="avatar" className={css.avatar} />
                )}

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

                {user && (
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
                          {errors[field.fieldName] &&
                          touched[field.fieldName] ? (
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
                )}

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
    </section>
  );
};
export default UserForm;
