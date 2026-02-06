import axios from 'axios';
const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export default api;

//Alterar em produção

api.interceptors.request.use((config) => {
  const userData = localStorage.getItem('account:userData');

  const token = userData ? JSON.parse(userData).token : null;

  if (userData) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
