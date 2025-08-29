import axios from "axios";
const API = "http://localhost:5000/api/contact";

export const sendMessage = (data) => axios.post(API, data);
