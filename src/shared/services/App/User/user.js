import instance from '../app';

export const getUser = async token => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data: result } = await instance.get('/user', config);

  return result;
};

export const updateUserInf = async (fieldToUpdate, newValue, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  console.log(token);
  console.log(fieldToUpdate);
  console.log(newValue);

  const data = {
    [fieldToUpdate]: newValue,
  };

  const { data: result } = await instance.patch('/user', data, config);
  console.log(result, 'app');
  return result;
};
