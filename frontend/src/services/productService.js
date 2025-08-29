import axios from "axios";
const API = "http://localhost:5000/api/products";

export const getProducts = () => axios.get(API);
export const getProduct = (id) => axios.get(`${API}/${id}`);
export const createProduct = (token, data) => axios.post(API, data, { headers: { Authorization: `Bearer ${token}` } });
export const updateProduct = (token, id, data) => axios.put(`${API}/${id}`, data, { headers: { Authorization: `Bearer ${token}` } });
export const deleteProduct = (token, id) => axios.delete(`${API}/${id}`, { headers: { Authorization: `Bearer ${token}` } });
