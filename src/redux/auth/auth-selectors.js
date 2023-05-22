export const selectAuth = state => {
  const { isLoggedIn, token } = state.auth;
  return { isLoggedIn, token };
};

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectIsLoading = state => state.auth.isLoading;

export const selectError = state => state.auth.error;

// export const isUserLogin = ({ auth }) => auth.isLogin;
//// имя возле аватара
export const getUser = ({ auth }) => auth.user;

export const selectRegistrationSuccessful = ({ auth }) =>
  auth.registrationSuccessful;

export const selectlogoutSuccessful = ({ auth }) => auth.registrationSuccessful;

export const userInfo = state => state.user;

export const getFavorite = ({ auth }) => auth.user.favorite;

export const userMyPets = state => {
  const { pets } = state.auth;
  return pets;
};
