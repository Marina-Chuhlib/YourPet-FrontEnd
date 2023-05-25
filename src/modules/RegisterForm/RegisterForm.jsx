import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/auth/auth-selectors';

import Loader from 'shared/components/Loader/Loader';

import { RegisterFormDetails } from './RegisterFormDetails';

const RegisterForm = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <>
      {isLoading && <Loader />}
      <RegisterFormDetails />
    </>
  );
};

export default RegisterForm;
