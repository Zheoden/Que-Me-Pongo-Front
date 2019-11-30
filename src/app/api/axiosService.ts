import axios from 'axios';

export const axiosService = axios.create({
    baseURL: 'https://que-me-pongo-api.azurewebsites.net/',
});
