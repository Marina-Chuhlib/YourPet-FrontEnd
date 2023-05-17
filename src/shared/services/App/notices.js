import instance from './app';

export const getAllNotices = async () => {
  const { data } = await instance.get('/notices');
  return data;
};

export const addNotice = async data => {
  const { data: result } = await instance.post('/notices', data);
  return result;
};

export const deleteNotice = async id => {
  const { data } = await instance.delete(`/notices/${id}`);
  return data;
};

export const getNoticesByCategory = async (categoryName, query = '') => {
  const { data } = await instance.get(
    `notices/?category=${categoryName}&searchValue=${query}`
  );
  return data;
};

export const getNoticesByOwn = async (query = '') => {
  const { data } = await instance.get(`notices/user/own?searchValue=${query}`);
  return data;
};
