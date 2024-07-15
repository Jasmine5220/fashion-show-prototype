// src/api.js
import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export const fetchItems = () => API.get('/items');
export const fetchOutfits = () => API.get('/outfits');
export const fetchFashionShowVideo = () => API.get('/fashion-show-video');
