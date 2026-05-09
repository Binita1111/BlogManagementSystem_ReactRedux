import axios from "axios";

const API = axios.create({
  baseURL: "https://react30.onrender.com/api/user/",
   headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: localStorage.getItem("jwt"),
  },
});

// 🔥 ALWAYS attach token
/* API.interceptors.request.use((config) => {
  const token = localStorage.getItem("jwt");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
}); */

export default API;