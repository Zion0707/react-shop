import React, { useEffect, useState } from 'react';
import { SearchBar, Toast } from 'antd-mobile';
import { goodsListApi } from '_api/index';
import { useHistory, Route } from 'react-router-dom';
import '_mock/index';
import '_less/home/index.less';

const Home = (props) => {
    const history = useHistory();
    const routers = props.routers;
    console.log(routers);
    const [goodList, setGoodList] = useState([]);

    // 搜索提交
    const searchSubmit = (val) => {
        console.log(val);
    };

    // 获取商品数据
    const getGoodsList = async () => {
        let rData = [];
        await goodsListApi('/api/goods/list', {}).then((res) => {
            const { code, message, data } = res.data;
            if (code === 200) {
                rData = data.list;
            } else {
                Toast.fail(message);
            }
        });
        return rData;
    };

    useEffect(async () => {
        const list = await getGoodsList();
        setGoodList(list);
    }, []);

    return (
        <div className="home">
            <SearchBar placeholder="输入您想要的项目" onSubmit={searchSubmit} />
            <ul className="home-item">
                {goodList.map((item) => {
                    return (
                        <li
                            key={item.id}
                            onClick={() => {
                                history.push(`/home/${item.id}`);
                            }}
                        >
                            <div className="in">
                                <div className="photo"></div>
                                <div className="message">
                                    <h4>{item.name}</h4>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>

            {routers.map((item) => {
                return (
                    <Route
                        key={item.path}
                        path={item.path}
                        exact={item.exact}
                        render={(props) => <item.component {...props} routers={item.child} />}
                    />
                );
            })}
        </div>
    );
};

export default Home;
