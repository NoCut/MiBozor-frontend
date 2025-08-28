import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const adminCatGet = () => {
  return apiClient.get('/admin/categories');
}

export const adminOnly = (access_token) => {
  return apiClient.get('/auth/admin-only', {
    headers: {
      'Authorization': `Bearer ${access_token}`
    }
  });
}
