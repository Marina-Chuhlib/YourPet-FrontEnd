import instance from './app';

export const getAllNotices = async () => {
  const { data } = await instance.get('/notices');
  console.log(data);
  return data;
};

export const getNoticesById = async id => {
  const { data } = await instance.get(`/notices/${id}`);
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

export const getNoticesByCategory = async (
  categoryName,
  query = '',
  page = 1
) => {
  const { data } = await instance.get(
    `notices/?category=${categoryName}&searchValue=${query}&page=${page}&limit=12`
  );
  return data;
};

export const getNoticesByOwn = async (query = '', page = 1) => {
  const { data } = await instance.get(
    `notices/user/own?searchValue=${query}&page=${page}&limit=12`
  );
  return data;
};

export const getAllFavoriteNotices = async (query = '', page = 1) => {
  const { data } = await instance.get(
    `notices/favorite/all?searchValue=${query}&page=${page}&limit=12`
  );
  return data;
};
