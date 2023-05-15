import { Suspense } from 'react';
// import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Loader from 'shared/components/Loader/Loader';

import SharedLayout from 'modules/SharedLayout/SharedLayout';
import MainPage from 'pages/MainPage/MainPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import UserPage from 'pages/UserPage/UserPage';
import NoticesPage from 'pages/NoticesPage/NoticesPage';
import AddPetPage from 'pages/AddPetPage/AddPetPage';
import NoticesCategoriesList from 'modules/Notices/NoticesCategoriesList/NoticesCategoriesList';
import NewsPage from 'pages/NewsPage/NewsPage';

// const Layout = lazy(() => import('./modules/Layout/Layout'));
// const MainPage = lazy(() => import('./pages/MainPage/MainPage'));
// const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
// const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
// const NoticesPage = lazy(() => import('./pages/NoticesPage/NoticesPage'));
// const UserPage = lazy(() => import('./pages/UserPage/UserPage'));
// const AddPetPage = lazy(() => import('./pages/AddPetPage/AddPetPage'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route path="main" element={<MainPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="user" element={<UserPage />} />
            <Route path="news" element={<NewsPage />} />
            <Route path="notices" element={<NoticesPage />}>
              <Route index element={<NoticesCategoriesList />} />
              <Route
								path="sell"
								element={<NoticesCategoriesList />}
							/>
              <Route
								path="lost-found"
								element={<NoticesCategoriesList />}
							/>
							<Route
								path="for-free"
								element={<NoticesCategoriesList />}
							/>
            </Route>
            <Route path="add-pet " element={<AddPetPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
};
