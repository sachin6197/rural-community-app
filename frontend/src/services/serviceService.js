import axios from "axios";
const API = "http://localhost:5000/api/services";

export const getServices = () => axios.get(API);
export const getService = (id) => axios.get(`${API}/${id}`);
export const createService = (token, data) => axios.post(API, data, { headers: { Authorization: `Bearer ${token}` } });
export const updateService = (token, id, data) => axios.put(`${API}/${id}`, data, { headers: { Authorization: `Bearer ${token}` } });
export const deleteService = (token, id) => axios.delete(`${API}/${id}`, { headers: { Authorization: `Bearer ${token}` } });
