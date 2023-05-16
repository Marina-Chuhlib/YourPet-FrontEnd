import { useEffect } from 'react';
import UserForm from '../../modules/UserForm/UserForm';

import { useSelector } from 'react-redux';

import Loader from 'shared/components/Loader/Loader';

const UserPage = () => {
  const { isLoading } = useSelector(state => state.auth);
  const { name, email } = useSelector(state => state.auth.user);

  // useEffect(() => {
  //   document.body.style.backgroundImage = 'none';
  // });

  return (
    <>
      {isLoading && <Loader />}
      {name && email ? (
        <UserForm name={name} email={email} />
      ) : (
        <div>Please login again</div>
      )}

      {/* {email && <UserForm name={name} email={email} />} */}
    </>
  );
};

export default UserPage;
