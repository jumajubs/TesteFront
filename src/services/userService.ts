import { api } from './api';

export const getUsers = async () => {
  const response = await api.get('/users?page=1&per_page=5');
  return response.data;
};

export const getUserById = async (id: number) => {
  const response = await api.get(`/users/${id}`);
  return response.data;
};

export const updateUser = async (id: number, data: any) => {
  const response = await api.put(`/users/${id}`, data);
  return response.data;
};

export const deleteUser = async (id: number) => {
  await api.delete(`/users/${id}`);
};
