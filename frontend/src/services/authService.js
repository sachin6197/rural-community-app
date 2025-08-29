import axios from "axios";
const API = "http://localhost:5000/api";

export const login = (data) => axios.post(`${API}/login`, data);
export const register = (data) => axios.post(`${API}/register`, data);
export const getProfile = (token) => axios.get(`${API}/me`, { headers: { Authorization: `Bearer ${token}` } });
export const updateProfile = (token, data) => axios.put(`${API}/me`, data, { headers: { Authorization: `Bearer ${token}` } });
