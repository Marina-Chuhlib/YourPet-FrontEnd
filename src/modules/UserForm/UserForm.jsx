import React from 'react';
import { useFormik } from 'formik';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import css from './UserForm.module.css';

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  phone: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const UserForm = () => {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <h2 className={css.userInfo}>My information:</h2>
    
          <Formik
            initialValues={{
              name: '',
              email: '',
              phone: '',
              birthday: '',
              city: '',
            }}
            // validationSchema={UserSchema}
            onSubmit={values => {
              // same shape as initial values
              console.log(values);
            }}
          >
          {({ errors, touched }) => (
                <div className={css.wrapperForm}>
              <Form className={css.form}>
           
                  <label className={css.label}>
                    Name <Field name="name" className={css.input} />
                    {errors.firstName && touched.firstName ? (
                      <div>{errors.firstName}</div>
                    ) : null}
                  </label>
           

                <label className={css.label}>
                  Email
                  <Field name="email" type="email" className={css.input} />
                  {errors.email && touched.email ? (
                    <div>{errors.email}</div>
                  ) : null}
                </label>

                <label className={css.label}>
                  Phone
                  <Field name="phone" className={css.input} />
                  {errors.phone && touched.lastName ? (
                    <div>{errors.phone}</div>
                  ) : null}
                </label>

                <label className={css.label}>
                  Birthday
                  <Field name="birthday" className={css.input} />
                  {errors.birthday && touched.birthday ? (
                    <div>{errors.birthday}</div>
                  ) : null}
                </label>

                <label className={css.label}>
                  City
                  <Field name="city" className={css.input} />
                  {errors.city && touched.city ? (
                    <div>{errors.city}</div>
                  ) : null}
                </label>

                <button type="submit">Submit</button>
              </Form>
              </div>
            )}
          </Formik>
        </div>
      </div>

  );
};
export default UserForm;
