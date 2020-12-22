import React from 'react';
import { useHistory } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import AnimatedRouter from '_components/animated-router';
import '_less/class/index.less';

const Class = (props) => {
    const { child } = props.route;
    const history = useHistory();

    return (
        <div className="class">
            <h4>class</h4>
            <ul>
                <li
                    onClick={() => {
                        history.push('/class/mobile');
                    }}
                >
                    mobile
                </li>
                <li
                    onClick={() => {
                        history.push('/class/computer');
                    }}
                >
                    computer
                </li>
            </ul>
            <AnimatedRouter>{renderRoutes(child)}</AnimatedRouter>
        </div>
    );
};

export default Class;
