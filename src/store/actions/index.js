import { SET_USERINFO } from '_store/constants/index';

export function setUserinfo(payload) {
    return { type: SET_USERINFO, payload };
}
