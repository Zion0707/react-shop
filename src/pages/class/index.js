import React from 'react';
import { renderRoutes } from 'react-router-config';
import AnimatedRouter from '_components/animated-router';
import '_less/class/index.less';

const Class = (props) => {
    const { history } = props;
    const { child } = props.route;

    return (
        <AnimatedRouter>
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
                {renderRoutes(child)}
            </div>
        </AnimatedRouter>
    );
};

export default Class;
