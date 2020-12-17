import Loadable from 'react-loadable';
import Loading from '_components/loading';

// 路由表
export const routers = [
    {
        path: ['/', '/home'],
        name: '首页',
        exact: true,
        component: Loadable({
            loader: () => import('_pages/home/index'),
            loading: Loading,
        }),
    },
    {
        path: '/class',
        name: '分类',
        component: Loadable({
            loader: () => import('_pages/class/index'),
            loading: Loading,
        }),
    },
    {
        path: '/car',
        name: '购物车',
        component: Loadable({
            loader: () => import('_pages/car/index'),
            loading: Loading,
        }),
    },
    {
        path: '/user',
        name: '用户中心',
        component: Loadable({
            loader: () => import('_pages/user/index'),
            loading: Loading,
        }),
    },
    {
        path: '*',
        name: '404',
        component: Loadable({
            loader: () => import('_pages/not-found/index'),
            loading: Loading,
        }),
    },
];

// 表单校验正则
export const formValidationReg = {
    phone: /^[1][3,4,5,7,8][0-9]{9}$/,
};
