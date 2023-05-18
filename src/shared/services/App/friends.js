import instance from './app';

export const getFriends = async () => {
  const data = await instance.get('/services');
  return data;
};
