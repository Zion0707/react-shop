import React from 'react';
import { NavBar, Icon } from 'antd-mobile';
import { useHistory } from 'react-router-dom';

const Detail = (props) => {
    const history = useHistory();
    const { params } = props.match;

    return (
        <div className="child-page">
            <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => {
                    history.go(-1);
                }}
            />
            <div>{params.id}</div>
        </div>
    );
};

export default Detail;
