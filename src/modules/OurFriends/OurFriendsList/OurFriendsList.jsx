import { useSelector } from 'react-redux';
import { getAllFriends } from 'redux/friends/friends-selectors';

import OurFriendsItem from '../OurFriendsItem/OurFriendsItem';

import css from './OurFriendsList.module.css';

const OurFriendsList = () => {
  const friends = useSelector(getAllFriends);

  return (
    <>
      {friends.length === 0 ? (
        <p className={css.helperText}>
          There are no results matching your search.
        </p>
      ) : (
        <ul className={`${css.container} ${css.cardList} `}>
          {friends.map(
            ({
              _id,
              url,
              title,
              imageUrl,
              workDays,
              address,
              addressUrl,
              email,
              phone,
            }) => {
              return (
                <OurFriendsItem
                  key={_id}
                  url={url}
                  title={title}
                  imageUrl={imageUrl}
                  workDays={workDays}
                  address={address}
                  addressUrl={addressUrl}
                  email={email}
                  phone={phone}
                />
              );
            }
          )}
        </ul>
      )}
    </>
  );
};

export default OurFriendsList;
