import Mock from 'mockjs';

Mock.mock('/api/user/login', 'post', () => {
    return Mock.mock({
        code: 200,
        message: 'success',
        data: {
            uid: Mock.mock('@string(5)'),
            name: '@name',
            head: 'https://dummyimage.com/100x100/999&text=Hello',
            token: Mock.mock('@string(20)'),
        },
    });
});

Mock.mock('/api/goods/list', 'post', () => {
    return Mock.mock({
        code: 200,
        message: 'success',
        data: {
            list: [
                { id: 11111, name: '电容', desc: '电容是智慧工地项目之一' },
                { id: 22222, name: '电阻', desc: '电阻是智慧工地项目之一' },
                { id: 33333, name: '传感器', desc: '传感器是智慧工地项目之一' },
                { id: 44444, name: '发动机', desc: '发动机是智慧工地项目之一' },
                { id: 55555, name: '零部件', desc: '零部件是智慧工地项目之一' },
                { id: 66666, name: '电箱', desc: '电箱是智慧工地项目之一' },
            ],
        },
    });
});
