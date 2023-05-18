import instance from './app';

export const getAllNews = async () => {
  const { data } = await instance.get('/news');
  return data;
};

export const getFilteredNews = async query => {
  const { data } = await instance.get(`/news?search=${query}`);
  return data;
};
