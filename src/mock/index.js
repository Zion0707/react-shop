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
                { id: 11111, name: '安电U+', desc: '安电U+是智慧工地项目之一' },
                { id: 22222, name: '知电U+', desc: '知电U+是智慧工地项目之一' },
                { id: 33333, name: '识电U+', desc: '识电U+是智慧工地项目之一' },
                { id: 44444, name: '安电U管理版', desc: '安电U管理版是智慧工地项目之一' },
                { id: 55555, name: '知电U管理版', desc: '知电U管理版是智慧工地项目之一' },
                { id: 66666, name: '识电U管理版', desc: '识电U管理版是智慧工地项目之一' },
            ],
        },
    });
});
