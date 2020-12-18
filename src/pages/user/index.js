import React from 'react';
import { Button, List } from 'antd-mobile';
import { connect } from 'react-redux';
import { saveUserInfo } from '_store/actions/index';
import { objIsNull, toLogout } from '_utils/index';
import { Redirect, useHistory } from 'react-router-dom';
import '_less/user/index.less';

const { Item } = List;

const User = (props) => {
    const { userInfo } = props;
    const history = useHistory();

    const logout = () => {
        toLogout(history, () => {
            props.saveUserInfo({});
        });
    };

    //判断用户数据是否为空，如果为空则跳转到登录页
    if (objIsNull(userInfo)) {
        return <Redirect to="/login" />;
    }
    return (
        <div className="user">
            <List className="user-item">
                <Item
                    extra={
                        <div className="head-portrait">
                            <img src={userInfo.head} alt="头像" />
                        </div>
                    }
                >
                    头像：
                </Item>
                <Item extra={userInfo.name}>用户名：</Item>
                <Item extra={userInfo.uid}>ID：</Item>
            </List>
            <div className="user-logout">
                <Button type="warning" onClick={logout}>
                    退出
                </Button>
            </div>
        </div>
    );
};

const mapToProps = { saveUserInfo };

export default connect((state) => {
    return {
        userInfo: state.getUserInfo.userInfo,
    };
}, mapToProps)(User);
