// resources/js/api.ts
import axios from 'axios';

const api = axios.create({
    baseURL: '/Laravel/roxell-pharma/public',
});

export default api;