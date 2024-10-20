import axios from 'axios';


export const axiosinstance = axios.create({
    baseURL: process.env.REACT_APP_url,
});


axiosinstance.interceptors.request.use(function(config) {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers['Authorization'] = 'Bearer ' + token; 
    }
    return config;
}, function(error) {
    return Promise.reject(error);  
});

axiosinstance.interceptors.response.use(
    function(response) {
        if (response.data) {
            console.log(response.data);  
        }
        return response;  
    },
    function(err) {
        
        if (err.response && err.response.data.message === "unauthorized user" && err.response.status === 401) {
            localStorage.removeItem('token');
            window.location.href = '/';  
        } else if (err.response && err.response.status === 404) {
            window.location.href = '/not-found';  
        }
        return Promise.reject(err);  
    }
);
