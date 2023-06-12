import { useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ThemeContext } from 'shared/hooks/context/ThemeProvider';
import { useTranslation } from 'react-i18next';

import { fetchFriends } from 'redux/friends/friends-operations';
import { loading } from 'redux/friends/friends-selectors';

import OurFriendsList from 'modules/OurFriends/OurFriendsList/OurFriendsList';
import Loader from 'shared/components/Loader/Loader';

import css from './OurFriendsPage.module.css';
import ScrollButton from 'shared/components/ScrollButton/ScrollButton';

const OurFriendsPage = () => {
  const isLoading = useSelector(loading);
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFriends());
  }, [dispatch]);

  return (
    <div
      className={`${css.myСomponent} ${
        theme === 'light' ? css.light : css.dark
      }`}
    >
      <div className="container">
        <h2 className={css.title}>{t("Our friends")}</h2>
        {isLoading && <Loader />}
        <OurFriendsList />
        <ScrollButton />
      </div>
    </div>
  );
};

export default OurFriendsPage;
