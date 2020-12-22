import Loadable from 'react-loadable';
import Loading from '_components/loading';

// 路由表，凡是带有child子页面的父级，绝对不能加exact否则无法显示
export const routers = [
    {
        path: '/',
        name: 'home',
        exact: true,
        component: Loadable({
            loader: () => import('_pages/home/index'),
            loading: Loading,
        }),
    },
    {
        path: '/home',
        name: 'home',
        component: Loadable({
            loader: () => import('_pages/home/index'),
            loading: Loading,
        }),
        child: [
            {
                path: '/home/:id',
                name: 'detail',
                component: Loadable({
                    loader: () => import('_pages/home-id/index'),
                    loading: Loading,
                }),
            },
        ],
    },
    {
        path: '/class',
        name: 'class',
        component: Loadable({
            loader: () => import('_pages/class/index'),
            loading: Loading,
        }),
        child: [
            {
                path: '/class/mobile',
                name: 'mobile',
                component: Loadable({
                    loader: () => import('_pages/class-mobile/index'),
                    loading: Loading,
                }),
                child: [
                    {
                        path: '/class/mobile/:type',
                        name: 'mobile-type',
                        component: Loadable({
                            loader: () => import('_pages/class-mobile-type/index'),
                            loading: Loading,
                        }),
                    },
                ],
            },
            {
                path: '/class/mobile',
                name: 'mobile',
                component: Loadable({
                    loader: () => import('_pages/class-computer/index'),
                    loading: Loading,
                }),
            },
        ],
    },
    {
        path: '/user',
        name: 'user',
        component: Loadable({
            loader: () => import('_pages/user/index'),
            loading: Loading,
        }),
    },
    {
        path: '/test',
        name: 'test',
        component: Loadable({
            loader: () => import('_pages/test/index'),
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
