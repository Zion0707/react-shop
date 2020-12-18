// 判断对象是否为空
export const objIsNull = (obj) => {
    if (Object.prototype.toString.call(obj) !== '[object Object]' || JSON.stringify(obj) === '{}') {
        return true;
    }
    return false;
};

// 退出登录
export const toLogout = (history, callback) => {
    localStorage.clear();
    history.push('/login');
    callback && callback();
};
