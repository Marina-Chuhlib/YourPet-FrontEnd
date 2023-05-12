import {useEffect} from 'react';
import UserForm from '../../modules/UserForm/UserForm';

const UserPage = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#fef9f9';
  });

  return (
    <>
      <UserForm />
    </>
  );
};

export default UserPage;
