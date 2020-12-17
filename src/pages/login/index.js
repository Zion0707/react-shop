import React, { useEffect, useState } from 'react';
import { InputItem } from 'antd-mobile';
import { formValidationReg } from '_const/index';
import '_less/login/index.less';

const { phone: _phoneReg } = formValidationReg;

const Login = () => {
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
        setUserPasswordHasErr(userPassword.length < 8 && userMobile !== '');
    }, [userPassword]);

    // 表单提交
    const submitForm = () => {
        if (
            userMobile !== '' &&
            userPassword !== '' &&
            userMobileHasErr === false &&
            userPasswordHasErr === false
        ) {
            console.log(userMobile, userPassword);
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
export default Login;
