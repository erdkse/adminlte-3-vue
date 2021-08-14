import axios from 'axios';

const intance = axios.create({
    baseURL: ``
});

intance.interceptors.request.use(
    (request) => request,
    (error) => Promise.reject(error)
);

intance.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
);

export default intance;
