import { create } from 'axios';

const axios = create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 5000,
});

export default axios;
