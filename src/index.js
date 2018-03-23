import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'APP TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(request => {
    console.log('request', request);
    return request;
}, error => {
    console.log('error', error);
    Promise.reject(error);
});

axios.interceptors.response.use(response => {
    console.log('response', response);
    return response;
}, error => {
    console.log('error', error);
    Promise.reject(error);
});


ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();