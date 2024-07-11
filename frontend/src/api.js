import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const fetchItems = () => API.get('/items');
export const fetchOutfits = () => API.get('/outfits');
