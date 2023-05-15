import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFriends } from 'redux/friends/friends-operations';
import { getAllFriends } from 'redux/friends/friends-selectors';

const OurFriendsPage = () => {
  const dispatch = useDispatch();
  const friends = useSelector(getAllFriends);

  console.log(friends);

  useEffect(() => {
    dispatch(fetchFriends());
  }, [dispatch]);

  return (
    <>
      <h2>Our Friends</h2>
    </>
  );
};

export default OurFriendsPage;
