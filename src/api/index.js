import axios from './service';

export const toLogin = (reqParams) => {
    return axios.post('/api/user/login', reqParams);
};
