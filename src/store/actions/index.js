import { SAVE_USERINFO } from '_store/constants/index';

// 保存用户信息
export function saveUserinfo(payload) {
    localStorage.setItem('userInfo', JSON.stringify(payload));
    return { type: SAVE_USERINFO, payload };
}
