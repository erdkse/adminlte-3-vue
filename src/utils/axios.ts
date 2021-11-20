import axios from 'axios';

const instance = axios.create({
    baseURL: ``
});

instance.interceptors.request.use(
    (request) => request,
    (error) => Promise.reject(error)
);

instance.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
);

export default instance;
