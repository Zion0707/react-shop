import axios from 'axios';
import { Toast } from 'antd-mobile';

axios.defaults.timeout = 10000; // 超时时间
axios.interceptors.request.use(
    (config) => {
        const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : {};
        config.headers['X-Auth-Token'] = userInfo.token; //cookie设置在头部信息里面
        config.headers['Content-Type'] = 'application/json';
        return config;
    },
    (error) => {
        Toast.fail('请求超时，请重试！', 3);
        return Promise.reject(error);
    }
);

// http响应拦截器
axios.interceptors.response.use(
    (res) => {
        if (res.data.bodyObj && res.data.bodyObj.code) {
            const code = res.data.bodyObj.code;
            // 10101是未登录状态码
            if (code === 10101) {
                // 如果是未登录直接踢出去
                location.href = '/login';
            }
        }
        return res;
    },
    (error) => {
        Toast.fail('请求失败，请重试！', 3);
        return Promise.reject(error);
    }
);

export default axios;
