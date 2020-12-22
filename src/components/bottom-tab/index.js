import React, { useState, useEffect } from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import '_less/bottom-tab/index.less';

const BottomTab = () => {
    const history = useHistory();
    const { pathname } = history.location;
    const [barSelected, setBarSelected] = useState('home');

    // 菜单点击的时候
    const tabbarSelect = (type) => {
        setBarSelected(type);
        history.push(`/${type}`);
    };

    // 根据路由锁定selected
    const setActiveBar = () => {
        if (pathname.indexOf('/home') !== -1) {
            setBarSelected('home');
        } else if (pathname.indexOf('/class') !== -1) {
            setBarSelected('class');
        } else if (pathname.indexOf('/user') !== -1) {
            setBarSelected('user');
        } else {
            setBarSelected('home');
        }
    };

    useEffect(() => {
        setActiveBar();
    }, [pathname]);

    return (
        <ul className="tab-bar">
            <li
                className={`tabbar-home ${barSelected === 'home' ? 'active' : ''}`}
                onClick={() => {
                    tabbarSelect('home');
                }}
            >
                <i></i>
                <span>home</span>
            </li>
            <li
                className={`tabbar-class ${barSelected === 'class' ? 'active' : ''}`}
                onClick={() => {
                    tabbarSelect('class');
                }}
            >
                <i></i>
                <span>class</span>
            </li>
            <li
                className={`tabbar-user ${barSelected === 'user' ? 'active' : ''}`}
                onClick={() => {
                    tabbarSelect('user');
                }}
            >
                <i></i>
                <span>user</span>
            </li>
        </ul>
    );
};
export default withRouter(BottomTab);
