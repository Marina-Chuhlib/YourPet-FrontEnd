import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from 'modules/Header/Header';

// const Layout = lazy(() => import('./modules/Layout/Layout'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const MainPage = lazy(() => import('./pages/MainPage/MainPage'));
const NoticesPage = lazy(() => import('./pages/NoticesPage/NoticesPage'));
const UserPage = lazy(() => import('./pages/UserPage/UserPage'));
const AddPetPage = lazy(() => import('./pages/AddPetPage/AddPetPage'));

export const App = () => {
  return (
    <>
      <BrowserRouter basename="/YourPet-FrontEnd">
        <Header></Header>
        <Suspense>
          <Routes>
            <Route></Route>
          </Routes>
          <RegisterPage></RegisterPage>
          <LoginPage></LoginPage>
          <MainPage></MainPage>
          <NoticesPage></NoticesPage>
          <UserPage></UserPage>
          <AddPetPage></AddPetPage>
        </Suspense>
      </BrowserRouter>
    </>
  );
};
