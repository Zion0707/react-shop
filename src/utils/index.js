// 判断对象是否为空
export const objIsNull = (obj) => {
    if (Object.prototype.toString.call(obj) !== '[object Object]' || JSON.stringify(obj) === '{}') {
        return true;
    }
    return false;
};
