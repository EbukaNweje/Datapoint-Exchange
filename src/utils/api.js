// utils/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.billpoint.co", // example
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
