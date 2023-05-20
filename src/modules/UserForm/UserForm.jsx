import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';

import {
  logout,
  fetchUpdateUser,
  fetchUpdateAvatar,
} from 'redux/auth/auth-operations';

import { selectAuth } from 'redux/auth/auth-selectors';

import ModalApproveAction from 'shared/components/ModalApproveAction/ModalApproveAction';

import {
  selectIsLoggedIn,
  selectlogoutSuccessful,
} from 'redux/auth/auth-selectors';

import Loader from 'shared/components/Loader/Loader';

import Checkbox from '@mui/material/Checkbox';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

import Button from '@mui/material/Button';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';

import css from './UserForm.module.css';

import * as toasty from 'shared/toastify/toastify';

const UserForm = ({ user }) => {
  const { token } = useSelector(selectAuth);
  const { isLoading } = useSelector(state => state.auth);
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const filePicker = useRef(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const logoutSuccessful = useSelector(selectlogoutSuccessful);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !isLoggedIn && logoutSuccessful) {
      setIsModalOpen(false);
    }
  }, [isLoading, isLoggedIn, logoutSuccessful]);

  const handleChangeAvatar = e => {
    const file = e.target.files[0];
    setSelectedImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  const addAvatarBtn = () => {
    filePicker.current.click();
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('imageURL', selectedImage);

    await dispatch(fetchUpdateAvatar({ token, formData }));

    toasty.toastSuccess('Photo added successfully');
  };

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

    setEditingFields(prevEditingFields => ({
      ...prevEditingFields,
      [fieldName]: !prevEditingFields[fieldName],
    }));

    if (editingFields[fieldName] && value !== '') {
      try {
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

  const closeModal = () => {
    setIsModalOpen(false);
    dispatch(logout());
    navigate('/');
  };

  const onLogout = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      {isModalOpen && <ModalApproveAction closeModal={closeModal} />}
      <div>
        {isLoading && <Loader />}
        <div className={css.wrapper}>
          <h2 className={css.title}>My information:</h2>
          <Formik>
            {({ errors, touched }) => (
              <Form className={css.forma}>
                <div className={css.avatarWrapper}>
                  {previewImage ? (
                    <img
                      src={previewImage}
                      alt="Preview"
                      className={css.avatar}
                    />
                  ) : (
                    <img
                      src={user.imageURL}
                      alt="avatar"
                      className={css.avatar}
                    />
                  )}

                  <div className={css.wrapperFile}>
                    {selectedImage && (
                      <Button
                        onClick={handleUpload}
                        variant="outlined"
                        style={{
                          border: 'rgba(0, 0, 0, 0)',
                          color: '#111111',
                          fontSize: '12px',
                          padding: '0',
                          paddingRight: '5px',
                          borderRadius: '10px',
                          fontFamily: 'Manrope',
                          textTransform: 'none',
                          marginRight: 'auto',
                        }}
                        startIcon={
                          <DoneOutlinedIcon
                            style={{
                              color: '#54ADFF',
                              padding: '0px',
                              height: '24px',
                              width: '24px',
                            }}
                          />
                        }
                      >
                        Confirm
                      </Button>
                    )}

                    {!selectedImage && (
                      <label htmlFor="fileElem" className={css.avatarLabel}>
                        <CameraAltOutlinedIcon
                          style={{ color: '#54ADFF', marginRight: '8px' }}
                          onClick={addAvatarBtn}
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
                    )}
                  </div>
                </div>

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
                                    width: '24px',
                                    height: '24px',
                                  }}
                                />
                              }
                              checkedIcon={
                                <CheckOutlinedIcon
                                  style={{
                                    color: '#00C3AD',
                                    width: '24px',
                                    height: '24px',
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
