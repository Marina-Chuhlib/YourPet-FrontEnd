import Loader from 'shared/components/Loader/Loader';
import UserForm from './UserForm';
import MyPets from './MyPets';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { fetchUser } from 'redux/user/user-operations';
import { userInfo } from 'redux/user/user-selectors';

import css from './UserCard.module.css';

const UserCard = () => {
  const { isLoading, token } = useSelector(state => state.auth);
  const { user } = useSelector(state => state.user.user);
  const { pets } = useSelector(state => state.user.user);

  console.log(user,"USER");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser(token));
  }, []);

  return (
    <section className={css.container}>
      {isLoading && <Loader />}
      {user && (
        <>
          <UserForm user={user}></UserForm>
          <MyPets pets={pets}></MyPets>
        </>
      )}
    </section>
  );
};

export default UserCard;
