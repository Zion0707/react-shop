import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setUserinfo } from '_store/actions/index';
import { objIsNull } from '_utils/index';
import { Redirect } from 'react-router-dom';

const User = (props) => {
    const { userInfo } = props;
    useEffect(() => {}, []);

    //判断用户数据是否为空，如果为空则跳转到登录页
    if (objIsNull(userInfo)) {
        return <Redirect to="/login" />;
    }
    return <Fragment>user</Fragment>;
};

const mapToProps = { setUserinfo };

export default connect((state) => {
    return {
        userInfo: state.getUserInfo.userInfo,
    };
}, mapToProps)(User);
