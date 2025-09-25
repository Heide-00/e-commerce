export const setUser = (user) => ({
  type: 'SET_USER',
  payload: user
});

export const setRoles = (roles) => ({
  type: 'SET_ROLES',
  payload: roles
});

export const setTheme = (theme) => ({
  type: 'SET_THEME',
  payload: theme
});

export const setLanguage = (lang) => ({
  type: 'SET_LANGUAGE',
  payload: lang
});

export const setAddressList = (list) => ({
  type: 'SET_ADDRESS_LIST',
  payload: list
});

export const setCreditCards = (cards) => ({
  type: 'SET_CREDIT_CARDS',
  payload: cards
});


import axios from 'axios';
import { toast } from 'react-toastify';

export const loginThunk = (formData) => async (dispatch) => {
  try {
    const res = await axios.post('http://localhost:3000/login', {
      email: formData.email,
      password: formData.password
    });

    const { token, user } = res.data;

    if (formData.rememberMe) {
      localStorage.setItem('token', token);
    }

    dispatch(setUser(user)); 

    toast.success('Giriş başarılı!');
    window.history.length > 1 
    ? window.history.back() 
    : window.location.href = '/';
  } catch (err) {
    toast.error('Giriş başarısız!');
  }
};