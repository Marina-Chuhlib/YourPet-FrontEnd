import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/auth/auth-selectors';

import Loader from 'shared/components/Loader/Loader';

import { LoginFormDetails } from './LoginFormDetails';

const LoginForm = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <>
      {isLoading && <Loader />}
      <LoginFormDetails />
    </>
  );
};

export default LoginForm;
