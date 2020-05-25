import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://api.sanctum.test',
    withCredentials: true,
});

export default apiClient;

