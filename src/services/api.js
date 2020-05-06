import axios from "axios";

const api = axios.create({
  baseURL: "https://api.tibiadata.com",
});

export default api;
