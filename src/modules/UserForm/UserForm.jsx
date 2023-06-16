import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { useContext } from 'react';
import { ThemeContext } from 'shared/hooks/context/ThemeProvider';

import { Formik, Form } from 'formik';
import * as toasty from 'shared/toastify/toastify';

import { fetchUpdateUser, fetchUpdateAvatar } from 'redux/auth/auth-operations';
import {
  selectAuth,
  selectIsLoading,
  selectIsLoggedIn,
  selectlogoutSuccessful,
  userInfo,
} from 'redux/auth/auth-selectors';

import ModalApproveAction from 'shared/components/ModalApproveAction/ModalApproveAction';

import Loader from 'shared/components/Loader/Loader';

import Checkbox from '@mui/material/Checkbox';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

import Button from '@mui/material/Button';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

import css from './UserForm.module.css';

const UserForm = () => {
  const { token } = useSelector(selectAuth);
  const isLoading = useSelector(selectIsLoading);
  const { user } = useSelector(userInfo);

  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [isPhotoUploaded, setIsPhotoUploaded] = useState(false);
  const filePicker = useRef(null);

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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const logoutSuccessful = useSelector(selectlogoutSuccessful);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  useEffect(() => {
    if (!isLoading && !isLoggedIn && logoutSuccessful) {
      setIsModalOpen(false);
    }
  }, [isLoading, isLoggedIn, logoutSuccessful]);

  const handleChangeAvatar = e => {
    setIsPhotoUploaded(false);
    const file = e.target.files[0];
    setSelectedImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  const handleDeleteAvatar = () => {
    setPreviewImage(null);
    setIsPhotoUploaded(true);
  };

  const addAvatarBtn = () => {
    filePicker.current.click();
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('imageURL', selectedImage);

    await dispatch(fetchUpdateAvatar({ token, formData }));
    toasty.toastSuccess(t('Photo added successfully'));

    setIsPhotoUploaded(true);
  };

  const handleChangeInput = event => {
    const { name, value } = event.target;
    return setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleEditField = async fieldName => {
    const value = formData[fieldName];

    setEditingFields(prevEditingFields => ({
      ...prevEditingFields,
      [fieldName]: !prevEditingFields[fieldName],
    }));

    if (!value && editingFields[fieldName]) {
      toasty.toastInfo(t('Fill in the field'));
      return;
    }

    if (editingFields[fieldName] && value !== '') {
      try {
        const result = await dispatch(
          fetchUpdateUser({ token, fieldToUpdate: fieldName, newValue: value })
        );

        if (result.meta.requestStatus !== 'fulfilled') {
          toasty.toastError(t(`Opps! Incorrect ${fieldName} try,again`));
          return;
        }
        toasty.toastSuccess(t('Added successfully'));
      } catch (error) {
        toasty.toastError(t(`Error, try again`));
      }
    }
  };

  const fields = [
    { fieldName: 'name', label: t('Name'), type: 'text', placeholder: 'Name' },
    {
      fieldName: 'email',
      label: t('Email'),
      type: 'email',
      placeholder: 'email@xxx.com',
    },
    {
      fieldName: 'birthday',
      label: t('Birthday'),
      type: 'text',
      placeholder: '00.00.0000',
    },
    {
      fieldName: 'phone',
      label: t('Phone'),
      type: 'tel',
      placeholder: '+38000000000',
    },
    { fieldName: 'city', label: t('City'), type: 'text', placeholder: 'Kyiv' },
  ];

  const closeModal = () => {
    setIsModalOpen(false);
    navigate('/user');
  };

  const onLogout = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      {isModalOpen && <ModalApproveAction closeModal={closeModal} />}
      <div>
        {isLoading && <Loader />}

        <div
          className={`${css.myСomponent} ${
            theme === 'light' ? css.light : css.dark
          }`}
        >
          <div className={css.wrapper}>
            <h2 className={css.title}>{t('My information')}:</h2>
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
                      {selectedImage && !isPhotoUploaded && (
                        <>
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
                              marginRight: '12px',
                            }}
                          >
                            <DoneOutlinedIcon
                              style={{
                                color: '#54ADFF',
                                padding: '0px',
                                height: '24px',
                                width: '24px',
                                marginRight: '0',
                              }}
                            />
                            Confirm
                          </Button>
                          <Button
                            onClick={handleDeleteAvatar}
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
                          >
                            <ClearOutlinedIcon
                              style={{
                                color: '#ffc107',
                                padding: '0px',
                                height: '24px',
                                width: '24px',
                              }}
                            />
                            {t('Delete')}
                          </Button>
                        </>
                      )}

                      {!selectedImage && !isPhotoUploaded && (
                        <label htmlFor="fileElem" className={css.avatarLabel}>
                          <CameraAltOutlinedIcon
                            style={{ color: '#54ADFF', marginRight: '8px' }}
                            onClick={addAvatarBtn}
                          />
                          {t('Edit photo')}
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

                      {isPhotoUploaded && (
                        <label htmlFor="fileElem" className={css.avatarLabel}>
                          <CameraAltOutlinedIcon
                            style={{ color: '#54ADFF', marginRight: '8px' }}
                            onClick={addAvatarBtn}
                          />
                          {t('Edit photo')}
                          <input
                            type="file"
                            id="fileElem"
                            accept="image/*"
                            name="Add photo"
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
                                onChange={() =>
                                  handleEditField(field.fieldName)
                                }
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
                        className={css.logoutBtn}
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
                        {t('Log Out')}
                      </Button>
                    </div>
                  )}
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserForm;
