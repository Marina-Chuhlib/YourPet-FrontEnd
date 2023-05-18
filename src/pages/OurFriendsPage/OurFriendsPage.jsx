import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchFriends } from 'redux/friends/friends-operations';
import { loading } from 'redux/friends/friends-selectors';

import OurFriendsList from 'modules/OurFriends/OurFriendsList/OurFriendsList';
import Loader from 'shared/components/Loader/Loader';

import css from './OurFriendsPage.module.css';

const OurFriendsPage = () => {
  const isLoading = useSelector(loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFriends());
  }, [dispatch]);

  return (
    <>
      <h2 className={css.title}>Our friends</h2>
      {isLoading && <Loader />}
      <OurFriendsList />
    </>
  );
};

export default OurFriendsPage;
