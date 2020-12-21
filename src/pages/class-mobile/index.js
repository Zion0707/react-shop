import React from 'react';
import { useHistory } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

const ClassMobile = (props) => {
    const { child } = props.route;
    const history = useHistory();
    return (
        <div className="class">
            <h4>
                <button
                    onClick={() => {
                        history.go(-1);
                    }}
                >
                    返回
                </button>
                class-mobile
            </h4>
            <ul>
                <li
                    onClick={() => {
                        history.push('/class/mobile/iphone');
                    }}
                >
                    iphone
                </li>
                <li
                    onClick={() => {
                        history.push('/class/mobile/moto');
                    }}
                >
                    moto
                </li>
            </ul>

            {renderRoutes(child)}
        </div>
    );
};

export default ClassMobile;
