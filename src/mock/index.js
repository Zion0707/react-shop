import Mock from 'mockjs';

Mock.mock('/api/user/login', 'post', function () {
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
