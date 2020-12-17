import { combineReducers } from 'redux';
import { SAVE_USERINFO } from '_store/constants/index';

const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : {};
const initalState = {
    userInfo,
};

// 获取用户信息
function getUserInfo(state = initalState, action) {
    switch (action.type) {
        case SAVE_USERINFO:
            console.log(action.payload);
            return {
                ...state,
                userInfo: action.payload,
            };
        default:
            return state;
    }
}

export default combineReducers({ getUserInfo });
