import React from 'react';
import { useHistory } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

const ClassMobile = (props) => {
    const { child } = props.route;
    const history = useHistory();
    return (
        <div className="class">
            <h4>class-mobile</h4>
            <ul>
                <li
                    onClick={() => {
                        history.push('/class/mobile/detail');
                    }}
                >
                    iphone
                </li>
                <li>moto</li>
            </ul>

            {renderRoutes(child)}
        </div>
    );
};

export default ClassMobile;
