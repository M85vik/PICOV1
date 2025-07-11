import api from './axios';
import * as Keychain from 'react-native-keychain';

export const registerUser = async (userData: {
  mobile: string;
  password: string;
}) => {
  return api.post('/auth/signup', userData);
};

export const loginUser = async (loginData: {
  mobile: string;
  password: string;
}) => {
  try {
    const response = await api.post('/auth/login', loginData);

    const token = response.data?.token;
    if (token) {
      await Keychain.setGenericPassword('user_token', token);
      return response.data;
    } else {
      throw new Error('Token not found in response');
    }
  } catch (error) {
    console.log('Login error:', error);
    throw error;
  }
};

export const verifyOtp = async (otpData: {mobile: string; otp: string}) => {
  const response = await api.post('/auth/verify-otp', otpData);
  console.log('RESPONSE FROM VERIFY OTP API', response);

  const token = response.data?.result?.token;
  if (token) {
    await Keychain.setGenericPassword('user_token', token);
    return response.data;
  } else {
    throw new Error('Token not found in response');
  }
};

export const makeUserProfile = async (profileData: {
  name: string;
  email: string;
  DOB: string;
  gender: string;
  address: string;
}) => {
  try {
    return api.patch('/auth/complete-profile', profileData);
  } catch (error) {
    const err = error as Error;
    throw err;
  }
};

export const getAQI = async (latitude: string, longitude: string) => {
  try {
    const response = await api.get('/maps/airquality', {
      params: {
        lat: latitude,
        lon: longitude,
      },
    });

    console.log('response data:', response.data);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch air quality:', error);
    return null;
  }
};

export const getWeatherData = async (latitude: string, longitude: string) => {
  try {
    const response = await api.get('/maps/weather', {
      params: {
        lat: latitude,
        lon: longitude,
      },
    });

    // console.log('response Weatherdata:', response);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch weather', error);
    return null;
  }
};
