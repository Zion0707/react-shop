import axios from './service';

export const toLoginApi = (reqParams) => {
    return axios.post('/api/user/login', reqParams);
};

export const goodsListApi = (reqParams) => {
    return axios.post('/api/goods/list', reqParams);
};
