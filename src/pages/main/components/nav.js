import React, { Fragment, useState, useEffect } from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import { TabBar } from 'antd-mobile';

const Nav = () => {
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
        } else if (pathname.indexOf('/car') !== -1) {
            setBarSelected('car');
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
        <Fragment>
            <TabBar noRenderContent={true} tintColor="#c82519">
                <TabBar.Item
                    selected={barSelected === 'home'}
                    title="首页"
                    key="home"
                    icon={<div className="tabbar-icon tabbar-home"></div>}
                    selectedIcon={<div className="tabbar-icon tabbar-home-active"></div>}
                    onPress={tabbarSelect.bind(this, 'home')}
                ></TabBar.Item>
                <TabBar.Item
                    selected={barSelected === 'class'}
                    title="分类"
                    key="class"
                    icon={<div className="tabbar-icon tabbar-class"></div>}
                    selectedIcon={<div className="tabbar-icon tabbar-class-active"></div>}
                    onPress={tabbarSelect.bind(this, 'class')}
                ></TabBar.Item>
                <TabBar.Item
                    selected={barSelected === 'car'}
                    title="购物车"
                    key="car"
                    icon={<div className="tabbar-icon tabbar-car"></div>}
                    selectedIcon={<div className="tabbar-icon tabbar-car-active"></div>}
                    onPress={tabbarSelect.bind(this, 'car')}
                ></TabBar.Item>
                <TabBar.Item
                    selected={barSelected === 'user'}
                    title="用户中心"
                    key="user"
                    icon={<div className="tabbar-icon tabbar-user"></div>}
                    selectedIcon={<div className="tabbar-icon tabbar-user-active"></div>}
                    onPress={tabbarSelect.bind(this, 'user')}
                ></TabBar.Item>
            </TabBar>
        </Fragment>
    );
};
export default withRouter(Nav);
