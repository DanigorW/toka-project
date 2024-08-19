import axios from 'axios';
import store from '@/store/index';
import { showNotification } from "@/js/helperFunctions"
// Default settings
const instance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Response interceptor
instance.interceptors.response.use(
    response => {
        // Handle successful responses + Notification popups
        const operationContext = response.config.headers['X-Operation-Context'];


        if (response.status === 200) {
            if (operationContext === 'add') {
                showNotification('add', 'success')
            } else if (operationContext === 'update') {
                showNotification('update', 'success')
            } else if (operationContext === 'delete') {
                showNotification('delete', 'success')
            }
        }
        store.commit('SET_IS_LOADING', false); // Hide loading spinner
        return response;
    },
    error => {
        // Handle response errors
        store.commit('SET_IS_LOADING', false); // Hide loading spinner

        if (error.response) {
            // Server responded with a status other than 2xx
            console.error('Error response:', error.response.data);
            showNotification('responseError', 'error')
        } else if (error.request) {
            // The request was made but no response was received
            console.error('Error request:', error.request);
            showNotification('requestError', 'error')

        } else {
            // Something happened in setting up the request
            console.error('Error message:', error.message);
            showNotification('messageError', 'error')

        }
        return Promise.reject(error);
    }
);

// Vue plugin installation
export default {
    install(Vue) {
        Vue.prototype.$axios = instance;
    }
};