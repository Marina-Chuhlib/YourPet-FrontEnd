import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import TextField from '@mui/material/TextField';

import css from './UserForm.module.css';

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
  const data = useSelector(state => state.auth);
  console.log(data);
  // const dispatch = useDispatch();

  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <h2 className={css.title}>My information:</h2>

        <Formik
          initialValues={{
            name: 'Max',
            email: 'max@gmai.com',
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
              <div>
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
                <svg className={css.icon}>
                  <use href="./images/camera.svg"></use>
                </svg>
              </div>

              <div className={css.row}>
                <label className={css.label}>Name:</label>
                <Field name="name" type="name" className={css.input} />
                {errors.name && touched.name ? <div>{errors.name}</div> : null}
              </div>

              <div className={css.row}>
                <label>Email:</label>
                <Field name="email" type="email" className={css.input} />
                {errors.email && touched.email ? (
                  <div>{errors.email}</div>
                ) : null}
              </div>

              <div className={css.row}>
                <label>Birthday:</label>
                <Field name="birthday" className={css.input} />
                {errors.birthday && touched.birthday ? (
                  <div>{errors.birthday}</div>
                ) : null}
              </div>

              <div className={css.row}>
                <label>Phone:</label>
                <Field name="phone" className={css.input} />
                {errors.phone && touched.phone ? (
                  <div>{errors.phone}</div>
                ) : null}
              </div>

              <div className={css.row}>
                <label>City:</label>
                <Field name="city" className={css.input} />
                {errors.city && touched.city ? <div>{errors.city}</div> : null}
              </div>

              <button type="submit" className={css.Btn}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
export default UserForm;
