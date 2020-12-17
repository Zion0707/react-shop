import React, { Fragment, useEffect } from 'react';
import { List } from 'antd-mobile';
import { connect } from 'react-redux';
import { saveUserinfo } from '_store/actions/index';
import { objIsNull } from '_utils/index';
import { Redirect } from 'react-router-dom';
import '_less/user/index.less';

const { Item } = List;

const User = (props) => {
    const { userInfo } = props;

    console.log(userInfo);

    useEffect(() => {}, []);

    //判断用户数据是否为空，如果为空则跳转到登录页
    if (objIsNull(userInfo)) {
        return <Redirect to="/login" />;
    }
    return (
        <div className="user">
            <List>
                <Item extra={<div>123</div>}>头像：</Item>
                <Item extra={userInfo.name}>用户名：</Item>
            </List>
        </div>
    );
};

const mapToProps = { saveUserinfo };

export default connect((state) => {
    return {
        userInfo: state.getUserInfo.userInfo,
    };
}, mapToProps)(User);
