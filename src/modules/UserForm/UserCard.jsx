import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import Loader from 'shared/components/Loader/Loader';

import UserForm from './UserForm';
import MyPets from './MyPets';

import { selectIsLoading } from 'redux/auth/auth-selectors';
import { fetchUser } from 'redux/auth/auth-operations';

import css from './UserCard.module.css';

const UserCard = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <section className={css.container}>
      {isLoading && <Loader />}
      <>
        <UserForm />
        <MyPets />
      </>
    </section>
  );
};

export default UserCard;
