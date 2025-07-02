import axios from 'axios';
import * as Keychain from 'react-native-keychain';
const api = axios.create({
  baseURL: 'http://192.168.34.49:1010/api', // Change to your backend base URL
  timeout: 10000, // 10 seconds timeout
});

api.interceptors.request.use(
  async config => {
    try {
      // Try to get credentials from Keychain
      const credentials = await Keychain.getGenericPassword();
      if (credentials) {
        // Attach token to Authorization header
        config.headers.Authorization = `Bearer ${credentials.password}`;
      }
    } catch (error) {
      console.log('Keychain error:', error);
      // Optionally, you can handle/log error here
    }
    return config;
  },
  error => {
    // Handle request setup errors
    return Promise.reject(error);
  },
);

export default api;
