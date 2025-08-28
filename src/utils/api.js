import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const categoryListGet = () => {
  return apiClient.get('/categories');
}

export const login = (credentials) => {
  return apiClient.post('/auth/login', credentials);
}

export const languageListGet = () => {
  return apiClient.get('/languages');
}

export const userData = (access_token) => {
  return apiClient.get('/auth/me', {
    headers: {
      'Authorization': `Bearer ${access_token}`
    }
  });
}
