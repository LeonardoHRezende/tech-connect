import axios from 'axios';

export const axiosApiInstance = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    'Content-Type': 'application/json',
  },
})