import instance from './app';

export const getAllNews = async (page = 1) => {
  const { data } = await instance.get(`/news?page=${page}`);
  return data;
};

export const getFilteredNews = async (query, page = 1) => {
  const { data } = await instance.get(`/news?search=${query}&page=${page}`);
  return data;
};
