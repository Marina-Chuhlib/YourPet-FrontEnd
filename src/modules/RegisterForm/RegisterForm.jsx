import { useState } from 'react';

import { RegisterFormDetails } from './RegisterFormDetails';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  return (
    <>
      <RegisterFormDetails data={formData} />
    </>
  );
};

export default RegisterForm;
