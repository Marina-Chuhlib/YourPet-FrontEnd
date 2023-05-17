import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchFriends } from 'redux/friends/friends-operations';
import OurFriendsList from 'modules/OurFriends/OurFriendsList/OurFriendsList';
import css from './OurFriendsPage.module.css';

const OurFriendsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFriends());
  }, [dispatch]);

  return (
    <div>
      <h2 className={css.title}>Our friends</h2>
      <OurFriendsList />
    </div>
  );
};

export default OurFriendsPage;
