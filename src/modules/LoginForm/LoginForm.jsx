import { useSelector } from 'react-redux';
import { selectIsLoading, selectIsLoggedIn } from 'redux/auth/auth-selectors';

import Loader from 'shared/components/Loader/Loader';

import { LoginFormDetails } from './LoginFormDetails';

const LoginForm = () => {
  const isLoading = useSelector(selectIsLoading);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      {isLoading && <Loader /> }
      {isLoading && isLoggedIn && <Loader />}
      <LoginFormDetails />
    </>
  );
};

export default LoginForm;
