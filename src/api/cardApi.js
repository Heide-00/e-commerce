import axios from './axiosInstance';

export const getCards = () => axios.get('/user/card');
export const addCard = (data) => axios.post('/user/card', data);
export const updateCard = (data) => axios.put('/user/card', data);
export const deleteCard = (id) => axios.delete(`/user/card/${id}`);