import axios from "axios";
const API = "http://localhost:5000/api/bookings";

export const getBookings = (token) => axios.get(API, { headers: { Authorization: `Bearer ${token}` } });
export const createBooking = (token, data) => axios.post(API, data, { headers: { Authorization: `Bearer ${token}` } });
export const cancelBooking = (token, id) => axios.delete(`${API}/${id}`, { headers: { Authorization: `Bearer ${token}` } });
