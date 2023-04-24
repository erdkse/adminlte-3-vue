import axios from 'axios';
var intance = axios.create({
    baseURL: ""
});
intance.interceptors.request.use(function (request) { return request; }, function (error) { return Promise.reject(error); });
intance.interceptors.response.use(function (response) { return response; }, function (error) { return Promise.reject(error); });
export default intance;
//# sourceMappingURL=axios.js.map