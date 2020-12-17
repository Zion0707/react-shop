import Mock from 'mockjs';

Mock.mock('/api/user/login', 'post', function () {
    return Mock.mock({
        code: 200,
        message: 'success',
        data: {
            name: '@name',
            token: Mock.mock('@string(20)'),
        },
    });
});
