import axios from 'axios';
import { API_URL } from 'react-native-dotenv';

console.log(API_URL);
const api = axios.create({
  baseURL: API_URL,
});

export default api;
