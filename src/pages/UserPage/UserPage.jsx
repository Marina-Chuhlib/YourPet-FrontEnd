import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import UserCard from 'modules/UserForm/UserCard';
import ModalCongrats from 'shared/components/ModalCongrats/ModalCongrats';
import { current } from 'redux/auth/auth-operations';
import {
  selectIsLoggedIn,
  selectIsLoading,
  selectRegistrationSuccessful,
} from 'redux/auth/auth-selectors';

const UserPage = () => {
  const [showModal, setShowModal] = useState(false);

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectIsLoading);
  const registrationSuccessful = useSelector(selectRegistrationSuccessful);

  current();

  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(current());
  // }, [dispatch]);

  useEffect(() => {
    if (!isLoading && isLoggedIn && registrationSuccessful) {
      setShowModal(true);
    }
  }, [isLoading, isLoggedIn, registrationSuccessful]);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && <ModalCongrats closeModal={closeModal} />}
      <UserCard />;
    </>
  );
};

export default UserPage;
