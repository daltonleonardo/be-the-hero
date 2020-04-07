import axios from 'axios';

// baseURL: '192.168.0.130:3333' // mac ip
const api = axios.create({
    baseURL: 'http://localhost:3333'
});

export default api;