import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { InputItem, Toast } from 'antd-mobile';
import { formValidationReg } from '_const/index';
import { toLogin } from '_api/index';
import { connect } from 'react-redux';
import { saveUserInfo } from '_store/actions/index';
import '_less/login/index.less';
import '_mock/index';

const { phone: _phoneReg } = formValidationReg;

const Login = (props) => {
    const history = useHistory();
    const [userMobile, setUserMobile] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userMobileHasErr, setUserMobileHasErr] = useState(false);
    const [userPasswordHasErr, setUserPasswordHasErr] = useState(false);

    //监听用户输入
    const userMobileChange = (val) => {
        setUserMobile(val);
    };

    useEffect(() => {
        setUserMobileHasErr(!_phoneReg.test(userMobile) && userMobile !== '');
    }, [userMobile]);

    const userPasswordChange = (val) => {
        setUserPassword(val);
    };

    useEffect(() => {
        setUserPasswordHasErr(userPassword.length < 8 && userPassword !== '');
    }, [userPassword]);

    // 校验登录
    const checkLogin = () => {
        toLogin({
            phone: userMobile,
            password: userPassword,
        }).then((res) => {
            const { data } = res;
            const { code, message } = data;
            if (code === 200) {
                // 保存用户信息
                props.saveUserInfo(data.data);
                history.push('/user');
            } else {
                Toast.fail(message);
            }
        });
    };

    // 表单提交
    const submitForm = () => {
        const judge =
            userMobile !== '' &&
            userPassword !== '' &&
            userMobileHasErr === false &&
            userPasswordHasErr === false;
        if (judge) {
            checkLogin();
            return;
        }

        if (userMobile === '') {
            setUserMobileHasErr(true);
        }
        if (userPassword === '') {
            setUserPasswordHasErr(true);
        }
    };

    return (
        <div className="login">
            <ul className="login__form-list">
                <li>
                    <InputItem placeholder="请输入手机号" value={userMobile} onChange={userMobileChange} />
                    {userMobileHasErr && <div className="error-tip">请输入正确的手机号！</div>}
                </li>
                <li>
                    <InputItem
                        placeholder="请输入密码"
                        type="password"
                        value={userPassword}
                        onChange={userPasswordChange}
                    />
                    {userPasswordHasErr && <div className="error-tip">密码长度不能低于8位！</div>}
                </li>
                <li>
                    <div className="login__btn" onClick={submitForm}>
                        提交
                    </div>
                </li>
            </ul>
        </div>
    );
};

const mapToProps = {
    saveUserInfo,
};

export default connect((state) => ({ userInfo: state.getUserInfo.userInfo }), mapToProps)(Login);
