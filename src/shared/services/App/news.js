import instance from './app';

export const getAllNews = async () => {
  const { data } = await instance.get('/news');
  return data;
};
