import axiosInstance, { setAuthToken } from '../../api/axiosInstance';
import { toast } from 'react-toastify';

// Redux action creators
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

// Login thunk
export const loginThunk = (formData) => async (dispatch) => {
  try {
    const res = await axiosInstance.post('/login', {
      email: formData.email,
      password: formData.password
    });

    const { token, user } = res.data;

    // Token'ı axios header'a ekle
    setAuthToken(token);

    // Eğer "Beni Hatırla" seçiliyse token'ı localStorage'a yaz
    if (formData.rememberMe) {
      localStorage.setItem('token', token);
    }

    // Redux'a kullanıcıyı yaz
    dispatch(setUser(user));

    toast.success('Giriş başarılı!');

    // Yönlendirme
    window.history.length > 1
      ? window.history.back()
      : window.location.href = '/';
  } catch (err) {
    toast.error('Giriş başarısız!');
  }
};