import { Suspense } from 'react';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import PublicRoute from 'modules/PublicRoute/PublicRoute';
import PrivateRoute from 'modules/PrivateRoute/PrivateRoute';

import Loader from 'shared/components/Loader/Loader';

import SharedLayout from 'modules/SharedLayout/SharedLayout';

import NoticesCategoriesList from './modules/Notices/NoticesCategoriesList/NoticesCategoriesList';
import AddPetPage from './pages/AddPetPage/AddPetPage';

const MainPage = lazy(() => import('./pages/MainPage/MainPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const UserPage = lazy(() => import('./pages/UserPage/UserPage'));
const NewsPage = lazy(() => import('./pages/NewsPage/NewsPage'));
const NoticesPage = lazy(() => import('./pages/NoticesPage/NoticesPage'));
const OurFriendsPage = lazy(() =>
  import('./pages/OurFriendsPage/OurFriendsPage')
);
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));



export const App = () => {
  
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<MainPage />} />
            <Route path="main" element={<MainPage />} />
            <Route path="news" element={<NewsPage />} />
            <Route path="notices" element={<NoticesPage />}>
              <Route index element={<NoticesCategoriesList />} />
              <Route path="sell" element={<NoticesCategoriesList />} />
              <Route path="lost-found" element={<NoticesCategoriesList />} />
              <Route path="for-free" element={<NoticesCategoriesList />} />
              <Route path="favorite" element={<NoticesCategoriesList />} />
              <Route path="own" element={<NoticesCategoriesList />} />
            </Route>
            <Route path="friends" element={<OurFriendsPage />} />
            <Route element={<PublicRoute />}>
              <Route path="register" element={<RegisterPage />} />
              <Route path="login" element={<LoginPage />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="user" element={<UserPage />} />
              <Route path="add-pet" element={<AddPetPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
        </Suspense>
    </>
  );
};
