import { combineReducers } from 'redux';
import { SET_USERINFO } from '_store/constants/index';

const initalState = {
    userInfo: {},
};

function getUserInfo(state = initalState, action) {
    switch (action.type) {
        case SET_USERINFO:
            return {
                ...state,
                userInfo: action.payload.userInfo,
            };
        default:
            return state;
    }
}

export default combineReducers({ getUserInfo });
