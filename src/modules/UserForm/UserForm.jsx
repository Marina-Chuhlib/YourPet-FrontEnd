// import React from 'react';
import * as React from 'react';
import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';

import { useNavigate } from 'react-router-dom';

import Checkbox from '@mui/material/Checkbox';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

import Button from '@mui/material/Button';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

import css from './UserForm.module.css';

import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';

import { logout } from 'redux/auth/auth-operations';

import { fetchUpdateUser, fetchUpdateAvatar } from 'redux/user/user-operations';

import { selectAuth } from 'redux/auth/auth-selectors';
// import { selectIsLoading } from 'redux/auth/auth-selectors';

const UserForm = ({ user }) => {
  const { token } = useSelector(selectAuth);
  // const isLoading = useSelector(selectIsLoading);
  // console.log(isLoading);
  const filePicker = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  // const [uploaded, setUploaded] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // console.log(user);

  // avatar

  const handleChangeAvatar = e => {
    console.log(e.target.files);
    setSelectedFile(e.target.files[0]);
    console.log('Avatar');
  };

  const addAvatarBtn = () => {
    filePicker.current.click();
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('imageURL', selectedFile);
    // const { user } = await updateAvatar();

    dispatch(fetchUpdateAvatar({ token, formData }));
    // const {payload} = await dispatch(fetchUpdateAvatar({ token, formData }));
    // const urlAvatar = payload.user.imageURL;
    // setUploaded(urlAvatar)
  };
  // =====

  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    birthday: user.birthday,
    phone: user.phone,
    city: user.city,
  });

  const [editingFields, setEditingFields] = useState({
    name: false,
    email: false,
    birthday: false,
    phone: false,
    city: false,
  });

  const handleChangeInput = event => {
    const { name, value } = event.target;
    return setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleEditField = fieldName => {
    const value = formData[fieldName];

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

  const fields = [
    { fieldName: 'name', label: 'Name', type: 'text', placeholder: 'Name' },
    {
      fieldName: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'email@xxx.com',
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
    <>
      <div>
        <div className={css.wrapper}>
          <h2 className={css.title}>My information:</h2>

          <Formik>
            {({ errors, touched }) => (
              <Form className={css.forma}>
                <div className={css.avatarWrapper}>
                  {user ? (
                    <img
                      src={user.imageURL}
                      alt="avatar"
                      className={css.avatar}
                    />
                  ) : (
                    <img src="" alt="avatar" className={css.avatar} />
                  )}

                  {/* ===avatar  */}

                  <div className={css.wrapperFile}>
                    <button type="button" onClick={addAvatarBtn}>
                      Edit photo
                    </button>
                    <button type="button" onClick={handleUpload}>
                      Send{' '}
                    </button>

                    <label htmlFor="fileElem" className={css.avatarLabel}>
                      <CameraAltOutlinedIcon
                        style={{ color: '#54ADFF', marginRight: '8px' }}
                      />
                      Edit photo
                      <input
                        type="file"
                        id="fileElem"
                        accept="image/*"
                        name="Edit photo"
                        ref={filePicker}
                        className={css.avatarBtn}
                        onChange={handleChangeAvatar}
                      />
                    </label>
                </div>
                       </div>

                  {/* ===== */}

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
                                onChange={() =>
                                  handleEditField(field.fieldName)
                                }
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
                      ))}
                    
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
                      marginRight: 'auto',
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
         
                    </div>
                  )}

            
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};
export default UserForm;
