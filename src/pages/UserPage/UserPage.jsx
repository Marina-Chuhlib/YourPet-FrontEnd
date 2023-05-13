import { useEffect } from 'react';
import UserForm from '../../modules/UserForm/UserForm';

const UserPage = () => {
  useEffect(() => {
    document.body.style.backgroundImage = 'none';
  });

  return (
    <>
      <UserForm />
    </>
  );
};

export default UserPage;
