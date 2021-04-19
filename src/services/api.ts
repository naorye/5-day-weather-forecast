import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_FORECAST_API_ROOT,
  params: {
    appid: process.env.REACT_APP_FORECAST_API_KEY,
  },
  timeout: 20000,
});

export { api };
