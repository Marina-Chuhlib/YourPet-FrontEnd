import { useEffect } from 'react';
import UserForm from '../../modules/UserForm/UserForm';

import { useSelector } from 'react-redux';

import Loader from 'shared/components/Loader/Loader';

const UserPage = () => {
  const { isLoading } = useSelector(state => state.auth);
  console.log(isLoading)

  // useEffect(() => {
  //   document.body.style.backgroundImage = 'none';
  // });

  return (
    <>
      {isLoading && <Loader/>}
      <UserForm />
    </>
  );
};

export default UserPage;
